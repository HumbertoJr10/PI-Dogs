import React, { useState } from 'react'
import styles from './Switch.module.css'
import Darkimg from '../../asses/Dark.png'
import Lightimg from '../../asses/Light.png'


const Switch = () => {
    const [Dark, setDark] = useState(false)

  return (
    <div className={styles.Container}>
        <div className={styles.Wrapper}>
            <div className={styles.bgc}>
                <button onClick={()=>setDark(!Dark)} className={Dark?styles.ButtonSwitch_Dark:styles.ButtonSwitch}>
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