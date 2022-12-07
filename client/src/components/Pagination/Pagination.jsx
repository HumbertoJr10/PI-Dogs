import React, { useState } from "react";
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/action/action";


export default function Pagination({maxPages}) {
    const pages = useSelector( state => state.pages )
    const dispatch = useDispatch()
    const [input, setInput] = useState(1)

    const nextPage = () => {
        if (input!==pages) {   // Para correguir bugs si el usuario modifica el imput
            setInput(pages)
        }
        dispatch(changePage(pages * 1 + 1 ))
        //setPages (pages * 1 + 1)
        setInput (input * 1 + 1)
    }

    const previousPage = () => {
        if (input!==pages) {   // Para correguir bugs si el usuario modifica el imput
            setInput(pages)
        }
        dispatch(changePage(pages * 1 - 1 ))
        //setPages (pages*1 - 1)
        setInput (input*1 - 1)
    }

    const onKeyDown = (e) => {
        if ( e.keyCode === 13 ) {
         
            if (e.target.value< 1 || e.target.value > maxPages || isNaN(e.target.value) ) {
                alert('Invalid Page')
            } else {
                dispatch(changePage(e.target.value))
                //setPages(e.target.value)
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
            <p>{pages} de {maxPages}</p>
            <button 
                className={styles.buttonPage} 
                onClick={nextPage}
                disabled={pages>=maxPages}>▶️</button>
        </div>
    )
}