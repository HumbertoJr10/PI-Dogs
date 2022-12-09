import React from "react"
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Nav() {
    

   

    return (
        <div className={styles.container}>
            
            <div className={styles.navigationDiv}>   
                <NavLink className={styles.navButton} to={'/'}>
                    <p>Home</p>
                </NavLink> 
                
                <p className={styles.navButton}>About</p>
            </div>

            <div className={styles.searchDiv}>
                <input className={styles.searchText} type={"text"} placeholder={'Search...'}></input>
                <button className={styles.searchButton}>
                    <img className={styles.imgSearch} src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844432-magnifier-search-zoom_110300.png"/>
                </button>
            </div>

                <img className={styles.profileIcon} src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"/>
            
        </div>
    )
}