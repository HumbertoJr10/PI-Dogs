const { Router } = require('express');
const getTemperaments = require('../controller/getTemperament')
const { Temperament } = require('../db')

const temperamentsRouter = Router();

temperamentsRouter.get('/', async (req,res)=> {
    //res.status(200).json('Estamos en ruta temperamentsRouter')
    try {
        const allTemperaments = await getTemperaments()

        allTemperaments.forEach( temperament => {
            Temperament.findOrCreate({
                where: {
                    name: temperament
                }
            })
        })

        const temperamentInDb = await Temperament.findAll()

        res.status(200).json(temperamentInDb)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

module.exports = temperamentsRouter;
