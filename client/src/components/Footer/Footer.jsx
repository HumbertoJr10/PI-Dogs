import React from 'react'
import styles from './Footer.module.css'
import linkedin from '../../asses/Linkedin.png'
import github from '../../asses/Github.png'

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            
            <div className={styles.IconContactContainer}>
                <h2>Contact</h2>
                <div className={styles.iconside}>
                    <img className={styles.iconSocialGit} src={github} />
                    <img className={styles.iconSocialLink} src={linkedin} />
                </div> 
            </div>

        </div>
        <div className={styles.centerSide}>

        </div>
        <div className={styles.rightSide}>

        </div>
    </div>
  )
}
