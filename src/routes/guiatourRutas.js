const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Guia = require('./guia');
const Tour = require('./tour');

const GuiaTour = sequelize.define('GuiaTour', {
    DNI: {
        type: DataTypes.STRING(20),
        references: {
            model: Guia,
            key: 'DNI'
        },
        primaryKey: true
    },
    ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Tour,
            key: 'ID'
        },
        primaryKey: true
    }
}, {
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = GuiaTour;
