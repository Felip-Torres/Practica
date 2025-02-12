const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

// Obtener todos los tours(Puede tener filtros en el body)
router.post('/register', alquilerController.createAlquiler);

// Obtener un alquiler por id
router.get('/', alquilerController.getAllAlquileres);
router.get('/:DNI/:TourID', alquilerController.getAlquilerById);
router.delete('/:DNI/:TourID', alquilerController.deleteAlquiler);

module.exports = router;