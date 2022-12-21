import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Dogs from '../Dogs/Dogs'
import styles from './Account.module.css'

const Account = () => {

    const user = useSelector(state => state.userLoged)
    const Dark = useSelector(state => state.DarkMode)
    const Alldog = useSelector(state=> state.dog) 

    const userDogs = Alldog.filter( e=> e.created_by ==user[0]?.username)

    console.log(userDogs)
  return (
    <div className={styles.body}>
        <div className={Dark?styles.container_dark:styles.container}> 
            <div className={styles.pictureSide}>
                <img className={styles.profilePic} src={user[0]?.profile_Picture} alt='ProfilePic'/>
                <h2>{user[0]?.username}</h2>
                <p>{user[0]?.email}</p>
                <p>Register: {user[0]?.register}</p>
            </div>
            <div className={styles.infoUser}>
                <div className={styles.titleBreed}>
                    <h1>Your Breeds</h1>
                </div>
                <div className={styles.DogsContainer}>
                {
                    userDogs.map( e => {
                        return <NavLink to={`/Breed/${e.id}`}>
                            <div className={styles.dogbreed}>
                                <img className={styles.dogPic} src={e.image} alt="userBreedPic"/>
                                <p key={e.name + 'text'} className={styles.DogName}>{e.name}</p>
                            </div>
                        </NavLink>
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account;