import React, { useState } from "react";
import Dogs from "../Dogs/Dogs";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import FilterMenu from "../FiltersMenu/FiltersMenu";
import styles from './AllDogs.module.css'
import { useEffect } from "react";
import { getDogs } from "../../redux/action/action";




export default function AllDogs (props) {
    const pages = useSelector(state => state.pages) // pagina en la que nos encontramos ESTADO GLOBAL
    const [perPage, setPerPage] = useState(8) // Cantidad de elementos a mostrar en cada pagina
    const dogs = useSelector( state => state.dog) // Estado Global
    const maxPages = Math.ceil(dogs.length / perPage) //Cantidad de Paginas Totales
    const dispatch = useDispatch()

    useEffect (()=> {
        if (!dogs.length) {
            dispatch(getDogs())
        }
    }, [])


    return (
        <div className={styles.container}>
            <div>
                <div className={styles.AllDogsDiv}> 
                    {
                        dogs.length?dogs.slice(
                            (pages - 1 ) * perPage,
                            (pages - 1 ) * perPage + perPage
                        ).map( e => {
                            return <Dogs 
                                name={e.name}
                                height={e.height} 
                                weight={e.weight} 
                                life_span={e.life_span}
                                image={e.image}
                                key={e.id}
                                temperament={e.temperament}
                            />
                        }):
                        <div className={styles.imgLoading}>
                            <img src="http://pawrider.com/assets/images/pages-loder.gif" alt="searching..." />
                            <h1>Loading...</h1>
                        </div>
                    }
                </div>     
                {
                    dogs.length?
                        <Pagination maxPages={maxPages} setPerPage={setPerPage}/>
                        :
                    null                 
                }
            </div>
            {
                !dogs.length?null:
            <div>
                    <FilterMenu/>
            </div>
            }
        </div>
    )
}