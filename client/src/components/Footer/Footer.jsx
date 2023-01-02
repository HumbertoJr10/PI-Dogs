import React from 'react'
import styles from './Footer.module.css'
import linkedin from '../../asses/Linkedin.png'
import github from '../../asses/Github.png'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

  const user = useSelector(state => state.userLoged)
  const history = useHistory()

  useEffect( ()=> {
    if (!user.lengt) {
        history.push('/')
    }
},[])

  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            
            <div className={styles.IconContactContainer}>
                <h4>Contact</h4>
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
          <p>© 2023 DogeLand.</p>
        </div>
        <div className={styles.rightSide}>
          <h4>Humberto Junior Guerra Arzolay</h4>
          <p>Full stack developer</p>
          <p>Ciudad Bolívar, Venezuela</p>
          <p>+584124993765</p>
        </div>
    </div>
  )
}

export default Footer;