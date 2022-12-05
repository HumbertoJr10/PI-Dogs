const {DataTypes} = require('sequelize')

const Temperament = (sequelize) => {
    sequelize.define('temperament', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

module.exports = Temperament