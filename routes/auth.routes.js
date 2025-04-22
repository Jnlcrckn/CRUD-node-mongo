const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model');

const router = express.Router();

// Registro
router.post('/register',
body('email').isEmail(),
body('password').isLength({ min: 6 }),
async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });

    const { email, password } = req.body;

    try {
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) return res.status(400).json({ error: 'Usuario ya registrado' });

        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado' });
    } catch (err) {
        console.error('Error en el registro:', err);
        res.status(500).json({ error: 'Error en el registro' });
    }
}
);

// Login
router.post('/login',
body('email').isEmail(),
body('password').exists(),
async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) return res.status(401).json({ error: 'Credenciales incorrectas' });

        const token = jwt.sign({ id: usuario._id }, 'secreto123', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
}
);

module.exports = router;
