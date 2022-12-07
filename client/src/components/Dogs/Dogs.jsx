import React from "react"
import styles from './Dogs.module.css'


export default function Dogs ( { name, height, weight, life_span, image, temperament } ) {
    return (
        <div className={styles.container}>
            <img className={styles.imagen} src={image|| "http://pawrider.com/assets/images/pages-loder.gif"} alt='none' />
            <h1 className={styles.CardName}> {name || "undefined"} </h1>
        </div>
    )
}