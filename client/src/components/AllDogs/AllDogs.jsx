import React, { useState } from "react";
import Dogs from "../Dogs/Dogs";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import styles from './AllDogs.module.css'


export default function AllDogs (props) {
    const dogs = useSelector( state => state.dog) // Estado Global
    const [pages, setPages] = useState(1) // Cantidad de paginas
    const [perPage, setPerPage] = useState(8) // Cantidad de elementos a mostrar en cada pagina
    const maxPages = Math.ceil(dogs.length / perPage) //Cantidad de Paginas Totales

    

    return (
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
                    }):<div>
                            <img src="http://pawrider.com/assets/images/pages-loder.gif" alt="searching..." />
                            <h1>Loading...</h1>
                        </div>
                }
            </div>     
                <Pagination pages={pages} setPages={setPages} maxPages={maxPages}/>
        </div>
    )
}