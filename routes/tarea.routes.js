const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Tarea = require('../models/tarea.model');
const authMiddleware = require('../middleware/authMiddleware');

// Crear tarea
router.post(
'/', authMiddleware, 
body('texto').notEmpty().withMessage('El texto es requerido'),
async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const nuevaTarea = new Tarea({ texto: req.body.texto });
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}
);

// Obtener todas las tareas
router.get('/', authMiddleware , async (req, res) => {
    const tareas = await Tarea.find();
    res.json(tareas);
});

// Obtener tarea por ID
router.get('/:id', authMiddleware , async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    if (tarea) res.json(tarea);
    else res.status(404).json({ message: 'Tarea no encontrada' });
});

// Eliminar tarea por ID
router.delete('/:id', authMiddleware, async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarea eliminada' });
});

// Actualizar tarea por ID
router.put('/:id', authMiddleware, async (req, res) => {
try {
    const { texto } = req.body;
    if (!texto) {
        return res.status(400).json({ error: 'Texto requerido para actualizar' });
    }

    const tareaActualizada = await Tarea.findByIdAndUpdate(
    req.params.id,
    { texto },
    { new: true, runValidators: true }
    );

    if (!tareaActualizada) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json(tareaActualizada);
    } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
});

module.exports = router;
