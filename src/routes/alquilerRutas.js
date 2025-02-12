const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

router.post('/register', alquilerController.createAlquiler);
router.get('/', alquilerController.getAllAlquileres);
router.get('/:DNI/:TourID', alquilerController.getAlquilerById);
router.delete('/:DNI/:TourID', alquilerController.deleteAlquiler);

module.exports = router;