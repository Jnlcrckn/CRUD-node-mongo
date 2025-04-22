require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.error('Error al conectar con la base de datos', err));

app.use(express.json());

// Rutas
const tareasRouter = require('./routes/tarea.routes');
const authRouter = require('./routes/auth.routes');
app.use('/tareas', tareasRouter);
app.use('/auth', authRouter);

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
