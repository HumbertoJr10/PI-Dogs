import React, { useEffect, useState } from 'react'
import styles from './BreedCreator.module.css'
import { isUrl, validationErrors } from './Validation'
import { addDog, getDogs, getTemperament } from '../../redux/action/action'
import { useDispatch, useSelector } from "react-redux";
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import { NavLink } from 'react-router-dom';


const BreedCreator = () => {

    const Dark = useSelector(state => state.DarkMode)
    const allDogs = useSelector(state => state.dogRespaldo)

    const [newDog, setNewDog] = useState({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_span: '',
        image: '',
        temperament: ''
    })
    const [errors, setErrors] = useState({
        name: 'You must enter all the parameters',
        heightMin: 'a',
        heightMax: 'a',
        weightMin: 'a',
        weightMax: 'a',
        life_span: 'a',
        image: 'a',
        temperament: 'a'
    })
    const [preImage, setPreImage] = useState("https://i.pinimg.com/originals/7a/fd/bb/7afdbb03e80c341e011ca963365fae1c.gif")

    const [ModalDuplicated, setModalDuplicated] = useState(false)
    const [modalState, setModalState] = useState(false)

    const dispatch = useDispatch()

//---- Handlers ----------
    const clear = () => {
        setNewDog({
            name: '',
            heightMin: '',
            heightMax: '',
            weightMin: '',
            weightMax: '',
            life_span: '',
            image: '',
            temperament: []
        })
        setPreImage("https://i.pinimg.com/originals/7a/fd/bb/7afdbb03e80c341e011ca963365fae1c.gif")
        setErrors({
            name: 'You must enter all the parameters',
            heightMin: 'a',
            heightMax: 'a',
            weightMin: 'a',
            weightMax: 'a',
            life_span: 'a',
            image: 'a',
            temperament: 'a'
        })
    }
    const handleChange = e => {
        setNewDog({
            ...newDog,
            [e.target.name]: e.target.value
        })

        if (e.target.name==='image') {
            if (isUrl(e.target.value)) {
                setPreImage(e.target.value)
            } else {
                setPreImage("https://i.pinimg.com/originals/7a/fd/bb/7afdbb03e80c341e011ca963365fae1c.gif")
            }
        }


        setErrors(validationErrors({
            ...newDog,
            [e.target.name]: e.target.value
        }, allDogs))
    }
    const createBreed = () => {
        if (Object.keys(errors).length) {
            alert('You need to fix the mistakes')
        } else {
            dispatch(addDog({
                ...newDog,
                life_span: newDog.life_span + ' years'
            }))
            dispatch(getDogs())
    
            setNewDog({
                name: '',
                heightMin: '',
                heightMax: '',
                weightMin: '',
                weightMax: '',
                life_span: '',
                image: '',
                temperament: ''
            })
            setErrors({
                name: '',
                heightMin: '',
                heightMax: '',
                weightMin: '',
                weightMax: '',
                life_span: '',
                image: '',
                temperament: ''
            })
            setPreImage("https://i.pinimg.com/originals/7a/fd/bb/7afdbb03e80c341e011ca963365fae1c.gif")
            setModalState(!modalState)
        }
    }

//------------------------
    

useEffect (()=> {
    if (!allDogs.length) {
        dispatch(getDogs())
        dispatch(getTemperament())
    }
}, [])

  return (
    <div>
        <div className={Dark?styles.container_dark:styles.container}>
            <img className={styles.image} src='https://bullymake.com/assets/img/tbg-dog.png' alt="pet"/>
            <div className={styles.Form}>
                <div className={styles.title}>
                    <h2>Add new dog breed:</h2>
                </div>
                <div className={styles.formBody}>
                    <div className={styles.textSide}>
                        <div className={styles.line}>
                            <p>Name:</p>
                        </div>
                        <div className={styles.line}>
                            <p>Height (Cm):</p>
                        </div>
                        <div className={styles.line}>
                            <p>Weight (Kg):</p>
                        </div>
                        <div className={styles.line}>
                            <p>Life Span:</p>
                        </div>
                        <div className={styles.line}>
                            <p>Image:</p>
                        </div>
                        <div className={styles.line}>
                            <p>Temperament:</p>
                        </div>

                    </div>
                    <div className={styles.inputSidde}>
                        <div className={styles.line}>
                            <input onChange={handleChange} className={errors.name?styles.inputWrong:styles.input} type="text" value={newDog.name} name="name" placeholder="Name"/>
                        </div>
                        <div className={styles.line}>
                            <input onChange={handleChange} className={errors.heightMin?styles.inputDoubleWrong:styles.inputDouble} value={newDog.heightMin} name="heightMin" type="number" placeholder="Min"/>
                            <input onChange={handleChange} className={errors.heightMax?styles.inputDoubleWrong:styles.inputDouble} value={newDog.heightMax} name="heightMax" type="number" placeholder="Max"/>
                        </div>
                        <div className={styles.line}>
                            <input onChange={handleChange} className={errors.weightMin?styles.inputDoubleWrong:styles.inputDouble} value={newDog.weightMin} name="weightMin" type="number" placeholder="Min"/>
                            <input onChange={handleChange} className={errors.weightMax?styles.inputDoubleWrong:styles.inputDouble} value={newDog.weightMax} name="weightMax" type="number" placeholder="Max"/>
                        </div>
                        <div className={styles.line}>
                            <input onChange={handleChange} type="number" className={errors.life_span?styles.inputWrong:styles.input} value={newDog.life_span} name="life_span" placeholder="Life Span average"/>
                        </div>
                        <div className={styles.line}>
                            <input onChange={handleChange} type="text" className={errors.image?styles.inputWrong:styles.input} value={newDog.image} name="image" placeholder="Image Url"/>
                        </div>
                        <div className={styles.line}>
                            <input onChange={handleChange} type="text" className={errors.temperament?styles.inputWrong:styles.input} value={newDog.temperament} name="temperament" placeholder="Temperament"/>
                        </div>
                    </div>
                    <div className={styles.previewSide}>
                        <img className={styles.previewImg} src={preImage} alt='Preview Image'/>
                    {
                        Object.values(errors).length?<div>
                            <p> ❌ {Object.values(errors)[0]}</p>
                        </div>:<div>
                            <p>✅ All Ok </p>
                        </div>
                    }
            
                    </div>
                </div>
                <div className={Dark?styles.buttonsSubmit_dark:styles.buttonsSubmit}>
                    <div>
                        <button onClick={createBreed} disabled={Object.keys(errors).length?true:false} className={Dark?styles.buttonCreate_dark:styles.buttonCreate}>Create</button>
                        <button onClick={clear} className={Dark?styles.buttonCreate_dark:styles.buttonCreate}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
        <ModalWindow 
            modalState={modalState} 
            setModalState={setModalState}
            header={false}
        >
            <img className={styles.modalImgDone} src='https://freepngimg.com/download/dog/104266-cute-dog-photos-corgi-free-download-png-hd.png' alt='dogDone'/>
            <h1>Dog breed created successfully</h1>

            <NavLink to={'/home'}>
                <img className={styles.ModalButton} onClick={()=> setModalState(!modalState)} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de1ory8-0dbee882-01eb-42a9-8060-5fa4fb75897f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMWNlZWU1LTk0NTgtNDQzNC04MGJjLWZjNWQ4M2EyZWE4OFwvZGUxb3J5OC0wZGJlZTg4Mi0wMWViLTQyYTktODA2MC01ZmE0ZmI3NTg5N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3quSNi33mSVpr5LfeHHUEBaIPYx8XQyzvnpsNy_ha_U' alt='OkeyImg' />
            </NavLink>
        </ModalWindow>
    </div>
  )
}

export default BreedCreator