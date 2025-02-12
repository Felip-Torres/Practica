const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Guia = sequelize.define('Guia', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'DNI'
        }
    },
    Salario: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, {
    tableName: 'guia',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Guia;
