const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');
const { auth } = require('../middleware/auth');

// Proteger las rutas con autenticación
router.use(auth);

/**
 * @swagger
 * tags:
 *   - name: Tours
 *     description: Operaciones relacionadas con los tours
 */

/**
 * @swagger
 * /api/tours:
 *   get:
 *     summary: Obtener todos los tours con opción de filtrar por país, tipo, duración y precio
 *     tags: [Tours]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Pais
 *         schema:
 *           type: string
 *         description: Filtrar tours por país
 *       - in: query
 *         name: Tipo
 *         schema:
 *           type: string
 *         description: "Filtrar tours por tipo (Ejemplo: Bosque, Montaña, Playa, etc.)"
 *       - in: query
 *         name: duracionMin
 *         schema:
 *           type: integer
 *         description: Duración mínima del tour en días
 *       - in: query
 *         name: duracionMax
 *         schema:
 *           type: integer
 *         description: Duración máxima del tour en días
 *       - in: query
 *         name: precioMin
 *         schema:
 *           type: number
 *         description: Precio mínimo del tour
 *       - in: query
 *         name: precioMax
 *         schema:
 *           type: number
 *         description: Precio máximo del tour
 *     responses:
 *       200:
 *         description: Lista de tours obtenida con éxito
 *       404:
 *         description: No se encontraron tours con los filtros especificados
 */
router.get('/', tourController.getAllTours);

/**
 * @swagger
 * /api/tours/{id}:
 *   get:
 *     summary: Obtener un tour por su ID
 *     tags: [Tours]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del tour a obtener
 *     responses:
 *       200:
 *         description: Tour encontrado exitosamente
 *       404:
 *         description: Tour no encontrado
 */
router.get('/:id', tourController.getTourById);

module.exports = router;
