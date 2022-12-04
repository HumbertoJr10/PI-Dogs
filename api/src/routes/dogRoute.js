const { Router } = require('express');
const getAllDog = require('../controller/getAllDog')
const { Dog } = require('../db')


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
            return res.status(200).json(result)
        }

        res.status(200).json(allDogs)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

dogsRouter.post('/', async (req, res)=> {
    try {
        const { name, height, weight, life_span } = req.body
        if (!name || !height || !weight || !life_span ) {
            return res.status(400).json('Faltan Parametros')
        }
        
        const newDog = await Dog.create({ name, height, weight, life_span })
        res.status(201).json(`Creado ${name} satisfactoriamente`)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

dogsRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const allDog = await getAllDog()
        const dogfilter = allDog.filter( e => e.id == id)
        res.status(200).json(dogfilter)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = dogsRouter;
