import React, { useState } from "react"
import styles from './Nav.module.css'
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePage, reset, searchDog, userLogout } from "../../redux/action/action";
import ModalWindow from "../ModalWindow/ModalWindow";
import Switch from "../Switch/Switch";


export default function Nav() {
    const [SearchText, setSearchText] = useState('')
    const [ModalSearchFailed, setModalSearchFailed] = useState(false)
    const [AccountOpen, setAccountOpen] = useState(false)
    let dogs = useSelector( state => state.dogRespaldo)
    const user = useSelector( state => state.userLoged)

    const dispatch = useDispatch() 
    const history = useHistory()

    
    const handdleChange = e => {
        setSearchText(e.target.value)
    }
    const searching = () => {
        const finded = dogs.filter( e => e.name.toUpperCase().includes(SearchText.toUpperCase()))
        if (finded.length) {
            //dispatch(reset()) 
            dispatch(searchDog(SearchText))
            dispatch(changePage(1))
            history.push('/home')
        } else {
            setSearchText('')
            setModalSearchFailed(!ModalSearchFailed)
        }
    }
    const onKeyDown = e => {
        if (e.keyCode==13) {
            const finded = dogs.filter( e => e.name.toUpperCase().includes(SearchText.toUpperCase()))
            if (finded.length) {
                //dispatch(reset())
                dispatch(searchDog(SearchText))
                dispatch(changePage(1))
                setSearchText('')
                history.push('/home')
            } else {
                setSearchText('')
                setModalSearchFailed(!ModalSearchFailed)
            }
        }
    }
    const logout = () => {
        dispatch(userLogout())
        setAccountOpen(!AccountOpen)
        history.push('/')
    }
    const accountSelection = () => {
        setAccountOpen(!AccountOpen)
    }
    



    return (
        <div className={styles.container}>
            
            <div className={styles.navigationDiv}>   
                <NavLink className={styles.navButton} to={'/home'}>
                    <p>Home</p>
                </NavLink> 
            </div>

            <div className={styles.searchDiv}>
                <input className={styles.searchText} 
                    value={SearchText}  
                    onKeyDown={onKeyDown} 
                    onChange={handdleChange} 
                    type={"text"} 
                    placeholder={'Search...'}>
                </input>
                <button 
                    onClick={searching} 
                    className={styles.searchButton}>
                    <img className={styles.imgSearch} src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844432-magnifier-search-zoom_110300.png"/>
                </button>
            </div>

            <div className={styles.accountActions}>
                <Switch/>
                <NavLink className={styles.createButton} to={'/new-breed'}>
                    <p className={styles.text}> New breed </p>
                </NavLink>
                <img onClick={()=> setAccountOpen(!AccountOpen)} className={styles.profileIcon} src={user[0].profile_Picture}/>
            </div>

            {
                AccountOpen?
                <div className={styles.accountWindow}>
                    <NavLink className={styles.navAccount} to={`/account/${user[0].username}`}>
                        <p onClick={accountSelection}>My Account</p>
                    </NavLink>
                <p onClick={logout}>Logout</p>
            </div>:null
            }
            {
                AccountOpen? <div className={styles.vineta}></div>:null
            }

            <ModalWindow
            modalState={ModalSearchFailed}
            setModalState={setModalSearchFailed}
            >   
                <img className={styles.img404NotFoundDog} src="https://cdn-icons-png.flaticon.com/256/6028/6028541.png" alt="404notDog"/>
                <h2 className={styles.modalMessage}>No result</h2>
            </ModalWindow>
        </div>
    )
}