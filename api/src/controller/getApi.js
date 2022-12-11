const axios = require('axios')

const getApiInfo = () => {
    const info = axios.get('https://api.thedogapi.com/v1/breeds')
        .then(res => res.data.map( dog => {
            return {
                id: dog.id,
                name: dog.name,
                heightMin: dog.height.metric.split(' - ')[0],
                heightMax: dog.height.metric.split(' - ')[1]?dog.height.metric.split(' - ')[1]:((dog.height.metric.split(' - ')[0]*1)+1).toString(),
                weightMin: dog.weight.metric==='NaN'?'40':dog.weight.metric.split(' - ')[0]==='NaN'?'6':dog.weight.metric.split(' - ')[0], 
                weightMax: dog.weight.metric==='NaN'?'50':dog.weight.metric.split(' - ')[1]?dog.weight.metric.split(' - ')[1]:((dog.weight.metric.split(' - ')[0]*1)+1).toString(),
                life_span: dog.life_span,
                image: dog.image.url,
                temperament: dog.temperament,
            }
        })) 
    return info;
}

module.exports = getApiInfo