const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');
const { auth, isAdmin } = require('../middleware/auth');

// Proteger las siguientes rutas con autenticación
router.use(auth);

/**
 * @swagger
 * tags:
 *   - name: Alquileres
 *     description: Operaciones relacionadas con alquileres
 */

/**
 * @swagger
 * /api/alquileres/register:
 *   post:
 *     summary: Crear un nuevo alquiler
 *     tags: [Alquileres]
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
 *               TourID:
 *                 type: integer
 *               ID:
 *                 type: integer
 *               MetodoPago:
 *                 type: string
 *     responses:
 *       201:
 *         description: Alquiler creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', alquilerController.createAlquiler);

// Proteger las siguientes rutas con el middleware de administrador
router.use(isAdmin);

/**
 * @swagger
 * /api/alquileres:
 *   get:
 *     summary: Obtener todos los alquileres
 *     tags: [Alquileres]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alquileres obtenida con éxito
 */
router.get('/', alquilerController.getAllAlquileres);

/**
 * @swagger
 * /api/alquileres/{DNI}/{TourID}:
 *   get:
 *     summary: Obtener un alquiler por DNI y TourID
 *     tags: [Alquileres]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: DNI
 *         required: true
 *         schema:
 *           type: string
 *         description: DNI del usuario
 *       - in: path
 *         name: TourID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tour alquilado
 *     responses:
 *       200:
 *         description: Alquiler encontrado exitosamente
 *       404:
 *         description: Alquiler no encontrado
 */
router.get('/:DNI/:TourID', alquilerController.getAlquilerById);

/**
 * @swagger
 * /api/alquileres/{DNI}/{TourID}:
 *   delete:
 *     summary: Eliminar un alquiler por DNI y TourID
 *     tags: [Alquileres]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: DNI
 *         required: true
 *         schema:
 *           type: string
 *         description: DNI del usuario
 *       - in: path
 *         name: TourID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tour alquilado
 *     responses:
 *       200:
 *         description: Alquiler eliminado con éxito
 *       404:
 *         description: Alquiler no encontrado
 */
router.delete('/:DNI/:TourID', alquilerController.deleteAlquiler);

module.exports = router;
