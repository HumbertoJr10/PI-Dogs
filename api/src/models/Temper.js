const {DataTypes} = require('sequelize')

const Temper = (sequelize) => {
    sequelize.define('temper', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

module.exports = Temper