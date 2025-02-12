require('dotenv').config();  // Asegúrate de que las variables de entorno se carguen
const sequelize = require('./config/database');  // Asegúrate de que la ruta al archivo sea correcta

// Intentar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa!');
    })
    .catch((err) => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

sequelize.sync({ force: false })  // No sobrescribir la base de datos
    .then(() => {
        console.log('Modelos sincronizados con la base de datos!');
    })
    .catch((err) => {
        console.error('Error al sincronizar los modelos:', err);
    });