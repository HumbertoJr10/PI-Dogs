import React, { useState } from "react";
import styles from './Pagination.module.css'


export default function Pagination({pages, setPages, maxPages}) {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        if (input!==pages) {   // Para correguir bugs si el usuario modifica el imput
            setInput(pages)
        }
        setPages (pages * 1 + 1)
        setInput (input * 1 + 1)
    }

    const previousPage = () => {
        if (input!==pages) {   // Para correguir bugs si el usuario modifica el imput
            setInput(pages)
        }
        setPages (pages*1 - 1)
        setInput (input*1 - 1)
    }

    const onKeyDown = (e) => {
        if ( e.keyCode === 13 ) {
         
            if (e.target.value< 1 || e.target.value > maxPages || isNaN(e.target.value) ) {
                alert('Invalid Page')
            } else {
                setPages(e.target.value)
                setInput(e.target.value)
            }
        }
    }
 
    const onChange = e => {
        setInput (e.target.value);
      };

    return (
        <div className={styles.divPagination}>
            <button 
            className={styles.buttonPage} 
            onClick={previousPage}
            disabled={pages<=1}>◀️</button>
            <input onChange={onChange} onKeyDown={onKeyDown} className={styles.inputPage} type="text" value={input}/>
            <p> de {maxPages}</p>
            <button 
                className={styles.buttonPage} 
                onClick={nextPage}
                disabled={pages>=maxPages}>▶️</button>
        </div>
    )
}