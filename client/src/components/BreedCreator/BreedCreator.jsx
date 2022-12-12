import React, { useState } from 'react'
import styles from './BreedCreator.module.css'
import { isUrl, validationErrors } from './Validation'
import { addDog, getDogs } from '../../redux/action/action'
import { useDispatch } from "react-redux";


const BreedCreator = () => {

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
        }))

    }
    const createBreed = () => {
        if (Object.keys(errors).length) {
            alert('You need to fix the mistakes')
        } else {
            dispatch(addDog(newDog))
            dispatch(getDogs())
            alert('Your breed was successfully created')
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
        }
    }

//------------------------
    

  return (
    <div>
    <div className={styles.container}>
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
            <div className={styles.buttonsSubmit}>
                <div>
                    <button onClick={createBreed} disabled={Object.keys(errors).length?true:false} className={styles.buttonCreate}>Create</button>
                    <button onClick={clear} className={styles.buttonCreate}>Clear</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BreedCreator