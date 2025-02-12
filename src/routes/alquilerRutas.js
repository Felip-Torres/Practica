const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Turista = require('./turista');
const Tour = require('./tour');
const Factura = require('./facturaRutas');

const Alquiler = sequelize.define('Alquiler', {
    DNI: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        references: {
            model: Turista,
            key: 'DNI'
        }
    },
    TourID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Tour,
            key: 'ID'
        }
    },
    FacturaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Factura,
            key: 'ID'
        }
    }
}, {
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Alquiler;
