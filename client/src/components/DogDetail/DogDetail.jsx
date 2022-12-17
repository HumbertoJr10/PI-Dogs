import React, { useEffect, useLayoutEffect } from 'react'
import styles from './DogDetail.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { resetDetail, getOneDog, getDogs } from '../../redux/action/action';
import cloud from '../../asses/cloud.png'
import { Loading } from '../Loading/Loading';



const DogDetail = () => {
    const { id } = useParams();
    const dog = useSelector( state => state.dogRespaldo)
    const dispatch = useDispatch()
    
    
    useEffect( ()=> {
      dispatch(getOneDog(id))
    }, [])
    
    const dogDetail = useSelector( state => state.dogDetail)


  return (
  <div className={styles.body}>

    {
      dogDetail.length? 
        <div className={styles.container}>

          <div className={styles.BannerContainer}>
              <img className={styles.picture} src={dogDetail[0].image} alt="dog" />
          </div>

          <div className={styles.StatsSide}>
            <div className={styles.titleStats}>
              <h1>{dogDetail[0].name}</h1>
            </div>
            <div className={styles.stadistic}>
              <h2>Height: {dogDetail[0].heightMin} - {dogDetail[0].heightMax} cm</h2>
              <h2>Weight: {dogDetail[0].weightMin} - {dogDetail[0].weightMax} kg</h2>
              <h2>Life span: {dogDetail[0].life_span}</h2>
            </div>
            <div className={styles.buttonSide}>
              <NavLink to={"/home"}>
              <button className={styles.backButton}>Back</button>
              </NavLink>
            </div>
          </div>


      </div>: <Loading/>
    }
    {
      dogDetail.length?
        <div className={styles.rightSide}>
          <div className={styles.titleRight}>
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
  
  </div>
)
}

export default DogDetail;