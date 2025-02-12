require('dotenv').config(); // Carga las variables de entorno del archivo .env

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'vrworld',  // Nombre de la base de datos
    process.env.DB_USER || 'root',        // Usuario de la base de datos
    process.env.DB_PASSWORD || '1234',        // Contraseña
    {
        host: process.env.DB_HOST || 'localhost',  // Dirección del servidor de base de datos
        port: process.env.DB_PORT || 3306,        // Puerto de la base de datos
        dialect: 'mysql',                         // Tipo de base de datos (mysql, postgres, etc.)
        logging: false,                           // Opcional: Desactiva los logs de la consulta SQL
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

module.exports = sequelize;