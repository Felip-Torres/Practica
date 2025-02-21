const express = require('express');
const Usuario = require('../models/usuario');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    try {
        const user = await Usuario.findOne({ where: { Email: req.query.Email, Password: req.query.Password} });
        const token = user.generateAuthToken();
        console.log(token);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Unable to login: '+ error });
    }
});

module.exports = router;