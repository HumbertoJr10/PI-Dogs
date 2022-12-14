import React, { useEffect, useState } from "react";
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/action/action";


export default function Pagination({maxPages}) {
    const pages = useSelector( state => state.pages )
    const Dark = useSelector( state => state.DarkMode)
    const dispatch = useDispatch()
    const [input, setInput] = useState(1)

    const nextPage = () => {
        dispatch(changePage(pages * 1 + 1 ))
    }

    const previousPage = () => {
        dispatch(changePage(pages * 1 - 1 ))
    }

    useEffect( ()=> {
        setInput(pages)
    }, [pages])

    const onKeyDown = e => {
        if ( e.keyCode === 13 ) {
         
            if (e.target.value< 1 || e.target.value > maxPages || isNaN(e.target.value) ) {
                alert('Invalid Page')
            } else {
                dispatch(changePage(e.target.value))
            }
        }
    }
 
    const onChange = e => {
        setInput (e.target.value);
      };

    return (
        <div className={styles.divPagination}>
            <button 
            className={Dark?styles.buttonPage_dark:styles.buttonPage} 
            onClick={previousPage}
            disabled={pages<=1}>◀ PREV</button>

        <div className={styles.pages}>
            <input onChange={onChange} onKeyDown={onKeyDown} className={Dark?styles.inputPage_dark:styles.inputPage} type="text" value={input}/>
            <p className={Dark?styles.p_dark:null}> Page {pages} / {maxPages}</p>
        </div>

            <button 
                className={Dark?styles.buttonPage_dark:styles.buttonPage} 
                onClick={nextPage}
                disabled={pages>=maxPages}> NEXT ▶</button>
        </div>
    )
}