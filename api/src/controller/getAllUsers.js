const { User } = require('../db')

const getUser = async () => {
    const allUsers = await User.findAll()
    return allUsers
}

module.exports = getUser