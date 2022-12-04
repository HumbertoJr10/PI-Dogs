const { Router } = require('express');
const getAllDog = require('../controller/getAllDog')
const getTemperaments = require('../controller/getTemperament')

const temperamentsRouter = Router();

temperamentsRouter.get('/', async (req,res)=> {
    //res.status(200).json('Estamos en ruta temperamentsRouter')
    try {
        const allTemperaments = await getTemperaments()
        res.status(200).json(allTemperaments)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = temperamentsRouter;
