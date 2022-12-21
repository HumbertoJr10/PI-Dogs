import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Account.module.css'

const Account = () => {

    const user = useSelector(state => state.userLoged)

  return (
    <div className={styles.body}>
        <div className={styles.container}> 
            <div className={styles.pictureSide}>
                <img className={styles.profilePic} src={user[0]?.profile_Picture} alt='ProfilePic'/>
                <h2>{user[0]?.username}</h2>
            </div>
            <div className={styles.infoUser}>
                <p>Email: {user[0]?.email}</p>
                <p>Register: {user[0]?.register}</p>
            </div>
        </div>
    </div>
  )
}

export default Account;