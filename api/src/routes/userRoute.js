const { Router } = require('express');
const { User } = require('../db')

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    res.status(200).json('usuario')
})

module.exports = userRouter;