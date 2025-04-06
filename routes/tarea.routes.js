const express = require('express');
const router = express.Router();
const Tarea = require('../models/tarea.model')

// crear tarea
router.post('/', async (req,res) =>{
    try {
        if (!req.body.texto) return res.status(400).json({ error: 'Texto requerido' });
        const nuevaTarea = new Tarea({ texto: req.body.texto });
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
});

// obtener todas las tareas
router.get('/', async (req, res) => {
    const tareas = await Tarea.find();
    res.json(tareas);
});

// obtener tarea por id
router.get('/:id', async (req, res) => {
    const tarea = await Tarea.findById(req.params.id);
    if (tarea) res.json(tarea);
    else res.status(404).json({message: 'Tarea no encontrada'});
});

// eliminar tarea por id
router.delete('/:id', async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarea eliminada' });  
});

module.exports = router;