import React, { useState } from "react";
import Dogs from "../Dogs/Dogs";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import FilterMenu from "../FiltersMenu/FiltersMenu";
import styles from './AllDogs.module.css'
import { useEffect } from "react";
import { getDogs, getTemperament, resetDetail } from "../../redux/action/action";
import { Loading } from "../Loading/Loading";



export default function AllDogs (props) {
    const pages = useSelector(state => state.pages) // pagina en la que nos encontramos ESTADO GLOBAL
    const [perPage, setPerPage] = useState(6) // Cantidad de elementos a mostrar en cada pagina
    const dogs = useSelector( state => state.dog) // Estado Global
    const maxPages = Math.ceil(dogs.length / perPage) //Cantidad de Paginas Totales
    const dispatch = useDispatch()

    const Dark = useSelector(state => state.DarkMode)
    const userLoged = useSelector(state => state.userLoged)

    useEffect (()=> {
        if (!dogs.length) {
            dispatch(getDogs())
            dispatch(getTemperament())
        }
        dispatch(resetDetail())
    }, [])

    console.log(userLoged)    

    return (
        <div className={Dark?styles.container_dark:styles.container} >
            <div className={styles.divFilters}>
                <FilterMenu/>
            </div>
            <h1>Bienvenido {userLoged[0]?.username}</h1>
            <div className={styles.AllDogsDiv}> 
                {
                    dogs.length?dogs.slice(
                        (pages - 1 ) * perPage,
                        (pages - 1 ) * perPage + perPage
                    ).map( e => {
                        return <Dogs 
                            name={e.name}
                            heightMin= {e.heightMin}
                            heightMax={e.heightMax}
                            weightMin={e.weightMin}
                            weightMax={e.weightMax}
                            life_span={e.life_span}
                            image={e.image}
                            key={e.id}
                            temperament={e.temperament}
                            id={e.id}
                        />
                    }): <Loading/>
                }
            </div>
            <div>
                {
                    dogs.length?
                        <Pagination maxPages={maxPages} setPerPage={setPerPage}/>
                        :
                    null                 
                }
            </div>
        </div>
    )
}