const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxMjM0NTY3SiIsImlhdCI6MTc0MDI2MjAwMSwiZXhwIjoxNzQwMjY1NjAxfQ.9EJx0w1uqrymHU2l2ZgotQHvvQgHh6avoZFC5bvCRCc
/**
 * @swagger
 * tags:
 *   - name: Autenticación
 *     description: Login y generación de tokens
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión y obtener token
 *     tags: [Autenticación]
 *     parameters:
 *      - in: query
 *        name: Email
 *        schema:
 *           type: string
 *        description: Email del usuario
 *      - in: query
 *        name: Password
 *        schema:
 *           type: string
 *        description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Autenticación exitosa, devuelve el usuario y el token
 *       400:
 *         description: Credenciales incorrectas
 */
router.post('/login', async (req, res) => {
    try {
        const user = await Usuario.findOne({ where: { Email: req.query.Email, Password: req.query.Password } });
        const token = user.generateAuthToken();
        console.log(token);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Unable to login: ' + error });
    }
});

module.exports = router;
