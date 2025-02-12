const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Guia = require('./guia');

const Esp = sequelize.define('Esp', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        references: {
            model: Guia,
            key: 'DNI'
        }
    },
    esp: {
        type: DataTypes.ENUM('Bosque', 'Museo', 'Ruinas', 'Playas', 'Montañas'),
        primaryKey: true
    }
}, {
    tableName: 'esp',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Esp;
