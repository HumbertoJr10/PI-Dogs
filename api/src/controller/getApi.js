const axios = require('axios')

const getApiInfo = () => {
    const info = axios.get('https://api.thedogapi.com/v1/breeds')
        .then(res => res.data.map( dog => {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height.metric.split(' - ')[1]? 
                    Math.round((
                        (dog.height.metric.split(' - ')[0]*1 + 
                        dog.height.metric.split(' - ')[1]*1)/2)).toString() : dog.height.metric.split(' - ')[0],

                weight: dog.weight.metric.split(' - ')[1]? 
                Math.round((
                    (dog.weight.metric.split(' - ')[0]*1 + 
                    dog.weight.metric.split(' - ')[1]*1)/2)).toString() : dog.weight.metric.split(' - ')[0],
                life_span: dog.life_span,
                temperament: dog.temperament
            }
        })) 
    return info;
}

module.exports = getApiInfo