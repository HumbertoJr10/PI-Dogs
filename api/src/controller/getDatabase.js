const { Dog, Temperament, User } = require('../db')

const getDatabase =  async () => {
    const infoDatabase = await Dog.findAll( {
        include: [{
            model: Temperament,
            attributes: ['name'],
        },{
            model: User,
            attributes: ['username'],
        }]
    })
    
 


    let mapeado = infoDatabase.map( e => {
        const { id, name, heightMin, heightMax, weightMin, weightMax, life_span, image, temperaments, user } = e
        
        return {
            id, 
            name, 
            heightMin, 
            heightMax, 
            weightMin, 
            weightMax, 
            life_span, 
            image, 
            created_by: e.user.username, 
            temperament: temperaments.map( e=> e.name).join(', ')
        }
    })

    return mapeado;
}

module.exports = getDatabase