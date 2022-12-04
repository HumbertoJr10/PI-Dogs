const getAllDog = require('./getAllDog')

const getTemperaments = async () => {

    const allDogs = await getAllDog()
        const temperaments = allDogs.map(e=> e.temperament).toString()
        const temp_Space = temperaments.split(',')

        const temp_Ok= temp_Space.map( e => {
            if (e[0]===' ') {
                return e.split(' ')[1]
            }
            return e
        })
        const allTemperaments = temp_Ok.filter( e => e!='')
        return allTemperaments
}

module.exports = getTemperaments