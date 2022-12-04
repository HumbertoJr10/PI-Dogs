const getApiInfo = require('./getApi')
const getDatabase = require('./getDatabase')

const getAllDog = async () => {

    const apiInfo = await getApiInfo()
    const dbInfo = await getDatabase()
    let allDog = [...dbInfo, ...apiInfo]
    
    return allDog
}

module.exports = getAllDog