const { Router } = require('express');
const { User } = require('../db')
const getUser = require('../controller/getAllUsers')

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const allUsers = await getUser()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({err: error.message})
    }
})


userRouter.post('/', async (req,res) => {
    try {
        const {username, password, email, profile_Picture} = req.body

        if (!username || !password || !email) {
            return res.status(404).json({err: 'Faltan parámetros'})
        }

        const busquedaUsername = await User.findAll({
            where: {
                username: username
            }
        })
        const busquedaEmail = await User.findAll({
            where: {
                email: email
            }
        })

        if (busquedaUsername.length || busquedaEmail.length) {
            res.status(404).json({err: 'Usuario/email ya existe'})
        } else {
            const newUser = await User.create({username, password, email, profile_Picture})
            res.status(201).json(newUser)
        }

    } catch (error) {
        res.status(404).json({err: error.message})
    }
})

module.exports = userRouter;