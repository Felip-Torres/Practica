const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Factura = sequelize.define('Factura', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    MetodoPago: {
        type: DataTypes.STRING(50)
    },
    Fecha: {
        type: DataTypes.DATE
    },
    ImporteTotal: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, {
    sequelize,
    tableName: 'factura',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Factura;
