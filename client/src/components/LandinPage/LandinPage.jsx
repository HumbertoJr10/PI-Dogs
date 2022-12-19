import React from "react";
import styles from './LandinPage.module.css'
import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/action/action";

const LandinPage = () => {
    const dispatch = useDispatch()
    
    const login = () => {
        dispatch(userLogin())
    }

    return (
    <div className={styles.body}>
        <div className={styles.bar}>
            <Switch/>
        </div>
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <img className={styles.picture} src="https://images.pling.com/img/00/00/64/33/33/1680458/2hjlwg.jpg" alt='gropDog'/>
                <div className={styles.overlay}></div>

                <div className={styles.startContainer}>
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" ></input>
                    <input type="text" placeholder="Password" ></input>
                    <NavLink to={"/home"}>
                        <button onClick={login} className={styles.buttonLogin}>Continue</button>
                    </NavLink>
                    <p>Sing up?</p>
                </div> 
                <div className={styles.messageMain}>
                    <h1>Henry Pet's</h1>
                    <p>By Humberto JR</p>
                </div>
            </div>

            <div className={styles.infoPage}>
                <div className={styles.leftInfo}>
                    <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt="Findimage" />
                    <div className={styles.leftText}>
                        <h2>Find your breed</h2>
                    </div>
                </div>

                <div className={styles.leftInfo}>
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" alt="Right Image" />
                <div className={styles.leftText}>
                    <h2>Create your own</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LandinPage;