import React from 'react'
import styles from './DogDetail.module.css'
import { useParams } from 'react-router-dom'


const DogDetail = () => {
    const { name } = useParams();
    
  return (
    <div className={styles.container}>
        <div className={styles.detailSide}>

        </div>
        <div className={styles.mediaSide}>

        </div>
    </div>
  )
}

export default DogDetail;