import React, { useState } from 'react'
import styles from './Switch.module.css'
import Darkimg from '../../asses/Dark.png'
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from '../../redux/action/action';
import darkmodeBackground from '../../asses/DarkBackground.png'
import lightmodeBackground from '../../asses/LightBackground.png'


const Switch = () => {
    const Dark = useSelector(state => state.DarkMode)
    const dispatch = useDispatch()

    const THEME = () => {
        if (!Dark) {
            document.body.style.backgroundImage = "url("+darkmodeBackground+")";
            dispatch(darkMode(!Dark))   
        } else {
            document.body.style.backgroundImage = 'url('+lightmodeBackground+')';
            dispatch(darkMode(!Dark))
        }
    }
    

  return (
    <div className={styles.Container}>
        <div className={styles.Wrapper}>
            <div className={styles.bgc}>
                <button onClick={THEME} className={Dark?styles.ButtonSwitch_Dark:styles.ButtonSwitch}>
                {
                    Dark?<img className={styles.DarkIcon} src={Darkimg}/>:<img className={styles.LightIcon} src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png"/>
                }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Switch