# API de Editoriales

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **MongoDB** que permite gestionar información de editoriales. Se puede utilizar como backend para una aplicación web de gestión de libros, catálogos o bases de datos bibliográficas.

## Características

- Crear nuevas editoriales
- Listar todas las editoriales registradas
- Actualizar datos de una editorial
- Eliminar editoriales
- Estructura modular y escalable
- Manejo de errores y validación básica

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/k-hroma/api-Editoriales.git
   cd api-Editoriales
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/editorialesdb
   ```

4. Ejecutá el servidor:

   ```bash
   npm run dev
   ```

   También podés usar:

   ```bash
   npm start
   ```

## Endpoints disponibles

| Método | Ruta                   | Descripción                  |
|--------|------------------------|------------------------------|
| GET    | /api/editorials        | Lista todas las editoriales |
| GET    | /api/editorials/:id    | Obtiene una editorial por ID|
| POST   | /api/editorials        | Crea una nueva editorial    |
| PATCH  | /api/editorials/:id    | Actualiza una editorial     |
| DELETE | /api/editorials/:id    | Elimina una editorial       |

## Estructura del proyecto

```
api-Editoriales/
├── controllers/
│   └── editorial.controller.js
├── models/
│   └── editorial.model.js
├── routes/
│   └── editorial.routes.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Mejoras futuras

- Validación de datos avanzada con Joi o Zod
- Autenticación y autorización de usuarios
- Pruebas unitarias y de integración
- Despliegue en servicios como Railway o Render

## Autor

Desarrollado por [k-hroma](https://github.com/k-hroma)

---

> Proyecto orientado a fortalecer habilidades backend con Node.js y MongoDB. Parte de mi portfolio como desarrollador Full Stack.
