const { Dog } = require('../db')

const getDatabase =  async () => {
    const infoDatabase = await Dog.findAll()
    return infoDatabase;
}

module.exports = getDatabase