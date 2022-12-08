import React from "react";
import styles from './LandinPage.module.css'
import { Link } from "react-router-dom";

const LandinPage = () => {
    

    return (<div>
        <h1> LANDING PAGE </h1>
        <Link to={'/home'}> 
            <button className={styles.startButton}>START</button>
        </Link>
    </div>
    )
}

export default LandinPage;