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

    let mapeado = infoDatabase.map( e => {
        const { id, name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperaments } = e
        return {
            id, name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperament: temperaments[0].name
        }
    })

    return mapeado;
}

module.exports = getDatabase