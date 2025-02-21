const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');
const { auth, isAdmin } = require('../middleware/auth');

// Proteger las siguientes rutas con el middleware de autenticación
router.use(auth);

// Crear un nuevo alquiler
router.post('/register', alquilerController.createAlquiler);

// Proteger las siguientes rutas con el middleware de administrador
router.use(isAdmin);

// Obtener todos los alquileres
router.get('/', alquilerController.getAllAlquileres);

// Obtener un alquiler por DNI y TourID
router.get('/:DNI/:TourID', alquilerController.getAlquilerById);

// Eliminar un alquiler
router.delete('/:DNI/:TourID', alquilerController.deleteAlquiler);

module.exports = router;