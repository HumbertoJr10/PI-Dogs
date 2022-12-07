const { Dog, Temperament } = require('../db')

const getDatabase =  async () => {
    const infoDatabase = await Dog.findAll( {
        include: {
            model: Temperament,
            attributes: ['name'],
            throught: {
                attributes: []
            }
        }
    })

    return infoDatabase;
}

module.exports = getDatabase