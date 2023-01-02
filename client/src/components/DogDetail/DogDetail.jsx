import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './DogDetail.module.css'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getOneDog } from '../../redux/action/action';
import { Loading } from '../Loading/Loading';
import ModalWindow from '../ModalWindow/ModalWindow';
import { deleteDog } from '../../redux/action/action';


const DogDetail = () => {
    const { id } = useParams();
    const Dark = useSelector( state => state.DarkMode)
    const dispatch = useDispatch()
    const history = useHistory()
    const dogDetail = useSelector( state => state.dogDetail)
    const userLoged = useSelector( state => state.userLoged)
    const allUsers = useSelector( state => state.allUser)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const creator = allUsers.find( e => e.username == dogDetail[0]?.created_by)
    
    useEffect(  ()=> {
       dispatch(getOneDog(id))
    }, [])
  


    const Remove = () => {
      dispatch(deleteDog(id))
      setDeleteOpen(!deleteOpen)
      history.push('/home')
    }


  return (
  <div className={styles.body}>

    {
      creator?
      <div className={Dark?styles.userInfo_dark:styles.userInfo}>
        <div className={Dark?styles.headerUserSide_dark:styles.headerUserSide}>
          <h2 className={styles.titleUserInfo}>Creator</h2>
        </div>
        
        {
          creator.member==='admin'?
          <img className={styles.PlanBadged} src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png" alt="userPlan" />:
          null
          
        }
        <img className={styles.profPic} src={creator.profile_Picture} alt='user'/>
        <NavLink className={styles.navName} to={`/profile/${creator.username}`}>
          <h2 className={styles.username}>{creator.username}</h2>
        </NavLink>
      </div>:null
    }

    {
      dogDetail.length? 
        <div className={styles.container}>

          <div className={styles.BannerContainer}>
              <img className={styles.picture} src={dogDetail[0].image} alt="dog" />
              {
                dogDetail[0].created_by&&dogDetail[0].created_by==userLoged[0].username||userLoged[0].member==='admin'?
                  <img onClick={()=> setDeleteOpen(!deleteOpen)} className={styles.delete} src="https://assets.stickpng.com/images/580b57fbd9996e24bc43bbdd.png" alt="delete"/>
                :null
              }
              
          </div>

          <div className={Dark?styles.StatsSide_dark:styles.StatsSide}>
            <div className={Dark?styles.titleStats_dark:styles.titleStats}>
              <h1>{dogDetail[0].name}</h1>
            </div>
           

            <div className={styles.stadistic}>
              <h2>Height: {dogDetail[0].heightMin} - {dogDetail[0].heightMax} cm</h2>
              <h2>Weight: {dogDetail[0].weightMin} - {dogDetail[0].weightMax} kg</h2>
              <h2>Life span: {dogDetail[0].life_span}</h2>
            </div>
            <div className={styles.buttonSide}>
              <NavLink to={"/home"}>
              <button className={Dark?styles.backButton_dark:styles.backButton}>Back</button>
              </NavLink>
            </div>
          </div>


      </div>: <Loading/>
    }
    {
      dogDetail.length?
        <div className={Dark?styles.rightSide_dark:styles.rightSide}>
          <div className={Dark?styles.titleRight_dark:styles.titleRight}>
            <h2>Temperaments</h2>
          </div>
          <div className={styles.rightList}>
              {
                dogDetail[0].temperament?.split(', ')?.map( e=> {
                  return <p key={e}>{e}</p>
                }) || <p>Unknown</p>
              }
          </div>
          <img src="https://www.pngfind.com/pngs/b/84-842521_cute-dog-png.png" alt='doge' />
        </div>:null
    }
    <ModalWindow
    modalState={deleteOpen}
    setModalState={setDeleteOpen}
    >
      <img className={styles.sadDog} src='https://assets.stickpng.com/images/580b57fbd9996e24bc43bbdd.png' alt="sadDog"/>
      <h1>Are you sure?</h1>
      <button onClick={Remove} className={styles.backButton}> Delete</button>
    </ModalWindow>
  </div>
)
}

export default DogDetail;