const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Turista = sequelize.define('Turista', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'DNI'
        }
    }
}, {
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Turista;
