const express = require('express');
const usuarioRoutes = require('./routes/usuarioRutas');
const tourRoutes = require('./routes/tourRutas');
const alquilerRoutes = require('./routes/alquilerRutas');

const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas
app.use((req, res, next) => {
    console.log("🔍 BODY RECIBIDO EN EL SERVIDOR:", req.body);
    next();
});
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/alquileres', alquilerRoutes);

// Iniciar el servidor
app.listen(port, async () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    try {
        await sequelize.authenticate();  // Asegúrate de que la base de datos está conectada
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }
});
