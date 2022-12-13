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
                  <a href="https://github.com/HumbertoJr10" target="_blank" >
                    <img className={styles.iconSocialGit} src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/humbertojrguerra/" target="_blank" >
                    <img className={styles.iconSocialLink} src={linkedin} />
                  </a>
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
