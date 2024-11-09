# Descripci&#243;n del Proyecto

## Nombre del Proyecto: API de Gesti&#243;n de carga de notas (AppNoteUpload)

#### Tecnolog&#237;as Utilizadas:

- **Node.js:** Plataforma para construir la aplicaci&#243;n backend.

- **Express:** Framework para gestionar las rutas y middleware.

- **bcrypt:** Biblioteca para cifrar contrase&#241;as antes de almacenarlas en la base de datos.

- **jsonwebtoken (JWT):** Biblioteca para generar tokens de acceso, proporcionando autenticaci&#243;n segura.

- **Sequelize:** ORM (Object-Relational Mapping) para interactuar con la base de datos.

- **MSSQL:** Base de datos utilizada para almacenar la informaci&#243;n de los usuarios y otros datos.

## Funcionalidades Principales

1. Registro de Usuarios:

- Los nuevos usuarios pueden registrarse proporcionando un nombre de usuario y contrase&#241;a.

- La contrase&#241;a se cifra utilizando bcrypt antes de almacenarse en la base de datos para mejorar la seguridad.

2. Autenticaci&#243;n de Usuarios:

- Los usuarios registrados pueden autenticarse proporcionando sus credenciales.

- Si las credenciales son v&#225;lidas, se genera un token JWT que se devuelve al usuario.

- Este token se utiliza para autorizar el acceso a rutas protegidas en la aplicaci&#243;n frontend.

3. CRUD de Usuarios, Estudiantes, Profesores,Secciones, Asignaturas y Evaluaciones:

- **Crear:** Permite a&#241;adir nuevos datos a la base de datos.

- **Leer:** Permite obtener informaci&#243;n de los datos existentes.

- **Actualizar:** Permite modificar la informaci&#243;n de los datos.

- **Eliminar:** Permite borrar informaci&#243;n de la base de datos.


Este proyecto representa una API de backend robusta que maneja la gesti&#243;n de usuarios con funcionalidades de registro, autenticaci&#243;n y operaciones CRUD. Utiliza bcrypt para asegurar las contraseñas y jsonwebtoken para gestionar tokens de acceso, proporcionando una base s&#243;lida para integrarse con un frontend.