const { Router } = require('express');
const getApiInfo = require('../controller/getApi')

const dogsRouter = Router();

dogsRouter.get('/', async (req,res)=> {
    try {
        const {name} = req.query
        const allDogs = await getApiInfo()
        
        if (name) {
            let result = allDogs.filter(e => {
                if (e.name.includes(name)) {
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



module.exports = dogsRouter;
