import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import styles from './ProfileUsers.module.css'

export const ProfileUsers = () => {

    const Dark = useSelector(state => state.DarkMode)
    const { username } =  useParams()
    const allUser = useSelector(state => state.allUser)
    const profileUser = allUser.find( e => e.username === username)
    const dogRespaldo = useSelector(state => state.dogRespaldo)

    const breedUser = dogRespaldo.filter( e=> e.created_by===username)

  return (
    <div className={styles.body}>
        <div className={Dark?styles.container_dark:styles.container}>
            <div className={styles.leftSide}>
                <img className={styles.picProfile} src={profileUser?.profile_Picture} alt="profile"/>
                {
                    profileUser?.member==='admin'?
                        <img className={styles.PlanBadged} src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png" alt="userPlan" />:
                        null
                }
                <h2 className={styles.username}>{profileUser?.username}</h2>
                <p className={styles.parrafos}>{profileUser?.email}</p>
                <p className={styles.parrafos}>Register: {profileUser?.register}</p>
                <p className={styles.parrafos}>Member: {profileUser?.member}</p>
            </div>
            <div className={styles.rightSide}>

                <div className={styles.DogsContainer}>
                {
                    breedUser.map( e => {
                        return <NavLink to={`/Breed/${e.id}`}>
                            <div key={e.name + ' container'} className={styles.dogbreed}>
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
