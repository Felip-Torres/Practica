const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { auth, isAdmin } = require('../middleware/auth');

// Proteger las siguientes rutas con el middleware de autenticación
router.use(auth);
router.use(isAdmin);

/**
 * @swagger
 * /api/usuarios/register:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               DNI:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               Edad:
 *                 type: integer
 *               Nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', usuarioController.register);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 */
router.get('/', usuarioController.getAllUsuarios);

/**
 * @swagger
 * /api/usuarios/{dni}:
 *   get:
 *     summary: Obtener un usuario por DNI
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dni
 *         required: true
 *         schema:
 *           type: string
 *         description: DNI del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido con éxito
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:dni', usuarioController.getUsuarioByDni);

/**
 * @swagger
 * /api/usuarios/{dni}:
 *   put:
 *     summary: Actualizar información de un usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dni
 *         required: true
 *         schema:
 *           type: string
 *         description: DNI del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:dni', usuarioController.updateUsuario);

/**
 * @swagger
 * /api/usuarios/{dni}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dni
 *         required: true
 *         schema:
 *           type: string
 *         description: DNI del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:dni', usuarioController.deleteUsuario);

module.exports = router;
