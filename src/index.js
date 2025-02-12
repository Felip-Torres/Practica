require('dotenv').config();
const sequelize = require('./config/database');

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: false }).then(() => {
    console.log('✅ Conectado y sincronizado con la base de datos');
}).catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
});