import React from "react"
import styles from './Dogs.module.css'
import { useSelector } from 'react-redux'


export default function Dogs ( { 
    name, 
    heightMin, 
    heightMax, 
    weightMin, 
    weightMax, 
    life_span, 
    image, 
    temperament 
}) {

    const Dark = useSelector(state => state.DarkMode)

    return (
        <div className={Dark?styles.container_dark:styles.container}>
            <div className={styles.imgSide}>
                <img className={styles.imagen} src={image|| "http://pawrider.com/assets/images/pages-loder.gif"} alt='none' />
                <div className={styles.statsContainer}>
                </div>
                <div className={styles.stats}>
                    <p>Height: {heightMin} - {heightMax} Cm</p>
                    <p>Weight: {weightMin} - {weightMax} Kg</p>
                </div>

            </div>
            <div className={Dark?styles.NameSide_dark:styles.NameSide}>
                <h2 className={Dark?styles.CardName_dark:styles.CardName}> {name || "404 ERROR"} </h2>
            </div>
            
            <div className={Dark?styles.FooterSide_dark:styles.FooterSide}>
                <p>{temperament || 'Unknown'}</p>
            </div>
        </div>
    )
}