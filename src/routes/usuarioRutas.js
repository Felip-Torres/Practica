const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { auth, isAdmin } = require('../middleware/auth');

// Proteger las siguientes rutas con el middleware de autenticación
router.use(auth);
router.use(isAdmin);

// Crear un nuevo usuario
router.post('/register', usuarioController.register);

// Obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// Obtener un usuario por DNI
router.get('/:dni', usuarioController.getUsuarioByDni);

// Actualizar información de un usuario
router.put('/:dni', usuarioController.updateUsuario);

// Eliminar un usuario
router.delete('/:dni', usuarioController.deleteUsuario);

module.exports = router;