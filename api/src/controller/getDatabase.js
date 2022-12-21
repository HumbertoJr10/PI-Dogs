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
        const { id, name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperaments, userId } = e
        return {
            id, name, heightMin, heightMax, weightMin, weightMax, life_span, image, userId, 
            temperament: temperaments.map( e=> e.name).join(', ')
        }
    })

    return mapeado;
}

module.exports = getDatabase