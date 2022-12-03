const { Router } = require('express');

const dogsRouter = Router();

dogsRouter.get('/', (req,res)=> {
    res.status(200).json('Estamos en ruta dogs')
})

module.exports = dogsRouter;
