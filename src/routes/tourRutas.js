const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// Obtener todos los tours(Puede tener filtros en el body)
router.get('/', tourController.getAllTours);

// Obtener un tour por id
router.get('/:id', tourController.getTourById);

module.exports = router;