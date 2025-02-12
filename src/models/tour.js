const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tour = sequelize.define('Tour', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Pais: {
        type: DataTypes.STRING(100)
    },
    Tipo: {
        type: DataTypes.ENUM('Bosque', 'Museo', 'Ruinas', 'Playas', 'Montañas')
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Duracion: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'tour',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = Tour;
