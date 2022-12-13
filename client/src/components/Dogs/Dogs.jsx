import React from "react"
import styles from './Dogs.module.css'


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
    return (
        <div className={styles.container}>
            <div className={styles.imgSide}>
                <img className={styles.imagen} src={image|| "http://pawrider.com/assets/images/pages-loder.gif"} alt='none' />
                <div className={styles.statsContainer}>
                </div>
                <div className={styles.stats}>
                    <p>Height: {heightMin} - {heightMax} Cm</p>
                    <p>Weight: {weightMin} - {weightMax} Kg</p>
                </div>

            </div>
            <div className={styles.NameSide}>
                <h2 className={styles.CardName}> {name || "404 ERROR"} </h2>
            </div>
            
            <div className={styles.FooterSide}>
                <p>{temperament || 'Unknown'}</p>
            </div>
        </div>
    )
}