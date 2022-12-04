const { Router } = require('express');
const dogsRouter = require('./dogRoute');
const temperamentsRouter = require("./temperamentRoute")

const router = Router();

// Rutas Modularizadas

router.use('/dogs', dogsRouter)
router.use('/temperaments', temperamentsRouter)

module.exports = router;
