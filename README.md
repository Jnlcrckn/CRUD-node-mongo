# 🗂️ API REST de Tareas

Este es un proyecto backend desarrollado con **Node.js**, **Express** y **MongoDB**. Es una API REST que permite realizar operaciones CRUD sobre una lista de tareas.

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- MongoDB con Mongoose
- JavaScript
- Express Validator

---

## 📦 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/Jnlcrckn/CRUD-node-mongo
cd CRUD-node-mongo
```

Instala las dependencias:

```bash
npm install
```
Asegúrate de tener MongoDB corriendo localmente.

Ejecuta el servidor:

```bash
npm run dev
```
El servidor se levantará en http://localhost:3000

📚 Endpoints de la API
🔸 Crear tarea
POST /tareas

```bash
{
  "texto": "Hacer las compras"
}
```
🔸 Obtener todas las tareas
GET /tareas

🔸 Obtener tarea por ID
GET /tareas/:id

🔸 Actualizar tarea
PUT /tareas/:id

```bash
{
  "texto": "Texto actualizado"
}
```
🔸 Eliminar tarea
DELETE /tareas/:id

📌 Notas

Incluye timestamps automáticos (fecha de creación y actualización) gracias a la opción timestamps: true en el schema de Mongoose.

### ⚠️ Vulnerabilidades conocidas

Este proyecto utiliza algunas dependencias con vulnerabilidades conocidas (`mime`, `git` como dependencia interna), detectadas por `npm audit`. Actualmente no hay solución disponible, pero estas dependencias no se utilizan directamente ni afectan el funcionamiento de la API.

🧑‍💻 Autor
Jnlcrckn
