const getApiInfo = require('./getApi')
const getDatabase = require('./getDatabase')

const getAllDog = async () => {

    const apiInfo = await getApiInfo()
    const dbInfo = await getDatabase()

    const lattest = dbInfo.reverse()
    let allDog = [...lattest, ...apiInfo]
    
    return allDog
}

module.exports = getAllDog