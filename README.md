# 📝 CRUD de Tareas con Node.js, Express y MongoDB

Este proyecto es una API RESTful con un frontend básico para la gestión de tareas. Permite **crear**, **leer**, **eliminar** (y próximamente **editar**) tareas. Está construido usando Node.js, Express y MongoDB con Mongoose, y una interfaz web simple con HTML + JavaScript puro.

---

## Tecnologías usadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- HTML + JavaScript (Vanilla)

---

## Estructura del proyecto

nodeyexpress/ ├── index.js # Servidor principal ├── public/ # Frontend simple en HTML │ └── index.html ├── models/ │ └── tarea.model.js # Modelo de Tarea (Mongoose) ├── routes/ │ └── tarea.routes.js # Rutas CRUD ├── .gitignore ├── package.json └── README.md

yaml
Copy
Edit

---

## Instalación y uso local

### 1. Clonar el repositorio

```bash
git clone https://github.com/jnlcrckn/CRUD-node-mongo.git
cd crud-node-mongo
npm install
2. Asegurarse de que MongoDB esté corriendo localmente
```bash
Copy
Edit
mongod
MongoDB debe estar disponible en: mongodb://localhost:27017

3. Iniciar la app
```bash
Copy
Edit
npm start
4. Abrir el frontend
http://localhost:3000/

## Funcionalidades
 Crear tareas

 Obtener lista de tareas

 Obtener tarea por ID

 Eliminar tareas

 Editar tareas (próximamente)

## Próximas mejoras
 Actualizar tarea (PUT)

 Autenticación de usuario

 Deploy en la nube (Render o Railway)

 Versión con React + Tailwind

## Contribuciones
¡Este proyecto está abierto a sugerencias, forks y mejoras!
Si querés aprender haciendo pull requests, este repo es ideal para practicar 

##Autor
jnlcrckn
Desarrollador Backend Jr. — apasionado por aprender y construir cosas útiles.
##Contacto: 
jcczcom@gmail.com
##LinkedIn : 
https://www.linkedin.com/in/jnlcrckn/
