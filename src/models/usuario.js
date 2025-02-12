const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Edad: {
        type: DataTypes.INTEGER
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, {
    tableName: 'usuario',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Usuario;
