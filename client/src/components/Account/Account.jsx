import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Dogs from '../Dogs/Dogs'
import ModalWindow from '../ModalWindow/ModalWindow'
import styles from './Account.module.css'
import { isUrl } from '../BreedCreator/Validation'
import { changeProfilePic } from '../../redux/action/action'
import { resetDetail } from '../../redux/action/action'

const Account = () => {

    const user = useSelector(state => state.userLoged)
    const Dark = useSelector(state => state.DarkMode)
    const Alldog = useSelector(state=> state.dogRespaldo)
    const [changePicOpen, setChangePicOpen] = useState(false)
    const [newPic, setNewPic] = useState("https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg")
    const userDogs = Alldog.filter( e=> e.created_by ==user[0]?.username)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (isUrl(e.target.value)) {
            setNewPic(e.target.value)
        } else {
            setNewPic("https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg")
        }
    }

    const ChangePicHandler = () => {
        if (!isUrl(newPic)) {
            return alert('URL INVALID')
        } 

        dispatch(changeProfilePic(user[0].id, {profile_Picture: newPic}))
        setNewPic('https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg')
        setChangePicOpen(!changePicOpen)
    }

    useEffect( ()=> {
        dispatch(resetDetail())
    })


  return (
    <div className={styles.body}>
        <div className={Dark?styles.container_dark:styles.container}>
            <div className={styles.pictureSide}>
                <div onClick={()=> setChangePicOpen(!changePicOpen)} className={styles.overlay}>
                </div>
                    <img onClick={()=> setChangePicOpen(!changePicOpen)} className={styles.editicon} src='https://www.freeiconspng.com/uploads/edit-new-icon-22.png' alt='edit'/>
                    
                <img className={styles.profilePic} src={user[0]?.profile_Picture} alt='ProfilePic'/>
                <h2>{user[0]?.username}</h2>
                <p>{user[0]?.email}</p>
                <p>Register: {user[0]?.register}</p>

                <div className={styles.memberdiv}>
                    <p> Member: </p>
                    {
                        user[0]?.member==='admin'?
                        <img className={styles.PlanBadged} src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png" alt="userPlan" />:
                        <p>Standard</p>
                        
                    }
                </div>
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
        <ModalWindow
        modalState={changePicOpen}
        setModalState={setChangePicOpen}
        header={false}
        >
            <div className={styles.containerChangePic}>
                <h2>Change your Profile Picture</h2>
                <img className={styles.profilePicChange} name="newProfilePic" src={newPic} alt='ProfilePic'/>
                <input onChange={handleChange} className={styles.inputPicChange} type="text" placeholder='Enter picture URL...' />
                <button onClick={ChangePicHandler} className={styles.buttonSavePic}>Save</button>
            </div>
        </ModalWindow>
    </div>
  )
}

export default Account;