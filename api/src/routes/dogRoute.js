const { Router } = require('express');
const getAllDog = require('../controller/getAllDog')
const getApiInfo = require('../controller/getApi')
const getDatabase = require('../controller/getDatabase')
const { Dog, Temperament } = require('../db')


const dogsRouter = Router();


dogsRouter.get('/', async (req,res)=> {
    try {
        const {name} = req.query
        const allDogs = await getAllDog()
        
        if (name) {
            let result = allDogs.filter(e => {
                if (e.name.toUpperCase().includes(name.toUpperCase())) {
                    return e
                }
            })
            if (result.length) {
                return res.status(200).json(result)
            } else {
                return res.status(400).json(`No se encontró la raza ${name}`)
            }
        }
        res.status(200).json(allDogs)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

dogsRouter.post('/', async (req, res)=> {
    try {
        const { name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament } = req.body
        if (!name || 
            !heightMin || 
            !heightMax || 
            !weightMin  || 
            !weightMax || 
            !life_span || 
            !image || 
            !temperament ){ 
            return res.status(400).json('Faltan Parametros')}
        
        const verification = await Dog.findAll({
            where: {
                name: name
            }
        })
        
        if (verification.length)  {
            return res.status(400).json('Esta Raza ya existe')
        }
        

        const newDog = await Dog.create({ name, heightMin, heightMax, weightMin, weightMax, life_span, image })
        const TemperamentInDB = await Temperament.findAll({ where: {name: temperament }})
        console.log(TemperamentInDB)
        newDog.addTemperament(TemperamentInDB)
        res.status(201).json(newDog)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

dogsRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {

        const allDog = await getAllDog()
        const dogfilter = allDog.filter( e => e.id == id)

        if (dogfilter.length===0) {
            return res.status(400).json(`No existe raza para el ID ${id}`)
        }

        res.status(200).json(dogfilter)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})




module.exports = dogsRouter;
