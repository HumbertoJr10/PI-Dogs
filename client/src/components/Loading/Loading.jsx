import React from 'react'
import cloud from '../../asses/cloud.png'
import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.container}>
        <img className={styles.cloud} src={cloud} alt='cloud'/>
        <img className={styles.dog} src='http://pawrider.com/assets/images/pages-loder.gif' alt='dogrunning'/>
    </div>
  )
}
