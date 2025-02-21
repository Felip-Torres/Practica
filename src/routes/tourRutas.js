const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const { auth, isAdmin } = require('../middleware/auth');

// Proteger las siguientes rutas con el middleware de autenticación
router.use(auth);

// Obtener todos los tours(Puede tener filtros en los parametros)
router.get('/', tourController.getAllTours);

// Obtener un tour por id
router.get('/:id', tourController.getTourById);

module.exports = router;