const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true,
    },
},{
    timestamps: true,   // Agrega la fecha de creación y actualización
});

module.exports = mongoose.model('Tarea', tareaSchema);