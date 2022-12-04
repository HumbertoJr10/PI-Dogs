const { Router } = require('express');

const temperamentsRouter = Router();

temperamentsRouter.get('/', (req,res)=> {
    res.status(200).json('Estamos en ruta temperamentsRouter')
})

module.exports = temperamentsRouter;
