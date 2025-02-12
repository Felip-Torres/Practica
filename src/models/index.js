const sequelize = require('../config/database');

const Usuario = require('./usuario');
const Turista = require('./turista');
const Tour = require('./tour');
const Factura = require('./factura');
const Alquiler = require('./alquiler');
const Guia = require('./guia');
const Esp = require('./esp');
const GuiaTour = require('./guiatour');

// Definir relaciones
Usuario.hasOne(Turista, { foreignKey: 'DNI', as: 'turista' });
Turista.belongsTo(Usuario, { foreignKey: 'DNI', as: 'usuario' });

Usuario.hasOne(Guia, { foreignKey: 'DNI', as: 'guia' });
Guia.belongsTo(Usuario, { foreignKey: 'DNI', as: 'usuario' });

Turista.hasMany(Alquiler, { foreignKey: 'DNI', as: 'alquileres' });
Alquiler.belongsTo(Turista, { foreignKey: 'DNI', as: 'Turista' });

Tour.hasMany(Alquiler, { foreignKey: 'TourID', as: 'alquileres' });
Alquiler.belongsTo(Tour, { foreignKey: 'TourID', as: 'Tour' });

Factura.hasMany(Alquiler, { foreignKey: 'FacturaID', as: 'alquileres' });
Alquiler.belongsTo(Factura, { foreignKey: 'FacturaID', as: 'Factura' });

Guia.hasMany(Esp, { foreignKey: 'DNI', as: 'especialidades' });
Esp.belongsTo(Guia, { foreignKey: 'DNI', as: 'Guia' });

Guia.belongsToMany(Tour, { through: GuiaTour, foreignKey: 'DNI', as: 'tours' });
Tour.belongsToMany(Guia, { through: GuiaTour, foreignKey: 'ID', as: 'guias' });

module.exports = { sequelize, Usuario, Turista, Tour, Factura, Alquiler, Guia, Esp, GuiaTour };
