import React from "react";
import { useState } from "react";
import styles from './LandinPage.module.css'
import { useHistory } from "react-router-dom";
import Switch from "../Switch/Switch";
import { useDispatch, useSelector } from "react-redux";
import { validationLogin, validationRegister } from "./validation";
import { createUser, userLoged } from "../../redux/action/action";
import ModalWindow from "../ModalWindow/ModalWindow";


const LandinPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allUser = useSelector( state => state.allUser)
    const userLogin = useSelector( state => state.userLoged)

    const [inputLogin, setInputLogin] = useState({
        username: '',
        password: ''
    })
    const [inputRegister, setInputRegister] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [errorRegister, setErrorRegister] = useState({
        a: 'All parametres is necesary'
    })
    const [error, setError] = useState({})
    const [loginOpen, setLoginOpen] = useState(true)
    const [modalRegisterSucces, setModalRegisterSucces] = useState(false)


    
    function handleChangeLogin(e) {
        setInputLogin({
            ...inputLogin,
            [e.target.name]: e.target.value
        })

        setError(validationLogin({
            ...inputLogin,
            [e.target.name]: e.target.value
        }, allUser))
    }

    function handleChangeRegister(e) {
        setInputRegister({
            ...inputRegister,
            [e.target.name]: e.target.value
        })
        setErrorRegister(validationRegister({
            ...inputRegister,
            [e.target.name]: e.target.value 
        }, allUser))
    }

    function login () {
        const user = allUser.find( e=> e.username===inputLogin.username && e.password === inputLogin.password)

        if (user) {
            dispatch(userLoged(inputLogin.username))
            history.push('/home')
        } else {
            alert('Datos incorrectos')
        }
    }

    function register() {
        if (Object.values(errorRegister).length) {
            alert('must fix errors!')
        } else {
            dispatch(createUser(inputRegister))
            setInputRegister({
                username: '',
                password: '',
                email: ''
            })
            setModalRegisterSucces(!modalRegisterSucces)
            setLoginOpen(true)
        }
    }
    

    return (
    <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <img className={styles.picture} src="https://images.pling.com/img/00/00/64/33/33/1680458/2hjlwg.jpg" alt='gropDog'/>
                <div className={styles.overlay}></div>

                    {     
                        !userLogin.length?
                            loginOpen?           
                        <div className={modalRegisterSucces?styles.startContainer_close:styles.startContainer}>
                            <h1>Login</h1>
                            <input onChange={handleChangeLogin} value={inputLogin.username} type="text" name="username" placeholder="Username" ></input>
                            <input onChange={handleChangeLogin} value={inputLogin.password} type="password" name="password" placeholder="Password" ></input>
                            <button onClick={login} className={styles.buttonLogin}>Continue</button>
                            <p onClick={()=> setLoginOpen(!loginOpen)}>Sing up?</p>
                            <div className={styles.containerError}>
                                {
                                    Object.values(error).length?<p className={styles.error}>❌ {Object.values(error)[0]}</p>: null
                                }
                            </div>
                        </div> 
                        :
                        <div className={styles.startContainer}>
                            <h1>Sing Up</h1>
                            <input onChange={handleChangeRegister} name="username" value={inputRegister.username} type="text" placeholder="Username"></input>
                            <input onChange={handleChangeRegister} name="email" value={inputRegister.email} type="text" placeholder="Email"></input>
                            <input onChange={handleChangeRegister} name="password" value={inputRegister.password} type="password" placeholder="Password"></input>
                            <button onClick={register} className={styles.buttonLogin}>Register</button>
                            <p onClick={()=> setLoginOpen(!loginOpen)}>Already have an account? login</p>
                            <div className={styles.containerError}>
                                {
                                    Object.values(errorRegister).length?<p className={styles.error}>❌ {Object.values(errorRegister)[0]}</p>: null
                                }
                            </div>
                        </div>
                        :null
                    }
                <div className={styles.messageMain}>
                    <h1>DogeLand</h1>
                    <p>By Humberto JR</p>
                </div>
                <ModalWindow className={styles.modalW}
                modalState={modalRegisterSucces}
                setModalState={setModalRegisterSucces}
                header={false}
                >
                    <h1>Successfully registered</h1>
                    <img className={styles.ModalButton} onClick={()=> setModalRegisterSucces(!modalRegisterSucces)} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de1ory8-0dbee882-01eb-42a9-8060-5fa4fb75897f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMWNlZWU1LTk0NTgtNDQzNC04MGJjLWZjNWQ4M2EyZWE4OFwvZGUxb3J5OC0wZGJlZTg4Mi0wMWViLTQyYTktODA2MC01ZmE0ZmI3NTg5N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3quSNi33mSVpr5LfeHHUEBaIPYx8XQyzvnpsNy_ha_U' alt='OkeyImg' />
                </ModalWindow>
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