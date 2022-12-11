import React, { useState } from "react"
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePage, reset, searchDog } from "../../redux/action/action";


export default function Nav() {
    const [SearchText, setSearchText] = useState('')
    let dogs = useSelector( state => state.dog)
    const dispatch = useDispatch() 
   
    const handdleChange = e => {
        setSearchText(e.target.value)
    }

    const searching = () => {
        dispatch(reset())
        dispatch(searchDog(SearchText))
        dispatch(changePage(1))
    }
    const onKeyDown = e => {
        if (e.keyCode==13) {
            dispatch(reset())
            dispatch(searchDog(SearchText))
            dispatch(changePage(1))
        }
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.navigationDiv}>   
                <NavLink className={styles.navButton} to={'/'}>
                    <p>Home</p>
                </NavLink> 
                
                <p className={styles.navButton}>About</p>
            </div>

            <div className={styles.searchDiv}>
                <input onKeyDown={onKeyDown} onChange={handdleChange} className={styles.searchText} type={"text"} placeholder={'Search...'}></input>
                <button onClick={searching} className={styles.searchButton}>
                    <img className={styles.imgSearch} src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844432-magnifier-search-zoom_110300.png"/>
                </button>
            </div>
                <img className={styles.profileIcon} src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"/>
        </div>
    )
}