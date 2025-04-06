const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// cno
mongoose.connect('mongodb://localhost:27017/tareasBD',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.error('Error al conectar con la base de datos',err))

app.use(express.json());

// importacion de las rutas
const tareasRouter = require('./routes/tarea.routes');
app.use('/tareas', tareasRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
