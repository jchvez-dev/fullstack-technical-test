Language / Idioma: [Español](./README.md) | [English](./README.en.md)
# Prueba Técnica - Juan Chavez Gamez

Repositorio que contiene la solución a la prueba técnica para participar de la vacante para Full Stack Developer, organizada en tres secciones independientes para facilitar su revisión y ejecución.

## Requisitos previos
Asegúrate de contar con las siguientes herramientas instaladas en tu entorno antes de comenzar:

- **[Git](https://git-scm.com/)** (para clonar el repositorio)
- **[Node.js](https://nodejs.org/)** (v18 o superior)
- **[pnpm](https://pnpm.io/)** (gestor de paquetes)
- **[Docker Desktop / Docker Compose](https://www.docker.com/)** (para levantar la app Fullstack)

## Estructura y Contenido
- **Sección 1 (Ejercicios):** Algoritmos y consultas SQL resueltos en Node.js puro.
- **Sección 2 (App Fullstack):** Mini API de tareas con su frontend, empaquetados con Docker.
- **Sección 3 (Teoría):** Preguntas teóricas respondidas en formato Markdown.
```
├── 01-ejercicios/
├── 02-fullstack-app/
├── 03-teoria/
└── README.md
```

## Guía de ejecucion por sección
### Sección 1 (Ejercicios)
Navega al directorio de la seccion antes de comenzar:

```bash
cd 01-ejercicios
```

Esta seccion utiliza pnpm para la gestion de paquetes. Si no lo tienes activado globalmente en Node.js, puedes habilitarlo usando Corepack:

```bash
corepack enable
```

A continuacion, instala las dependencias del proyecto:

```bash
pnpm install
```

> Nota: Si es la primera vez que instalas dependencias y pnpm bloquea algun script de compilacion (como esbuild), autorizalo ejecutando: `pnpm approve-builds`

**Scripts Disponibles**

Dentro del archivo package.json de esta seccion encontraras los siguientes comandos configurados:

- `pnpm start` 
Ejecutar el script principal
Para correr el punto de entrada (index.ts) y ver la ejecucion general de los ejercicios

- `pnpm test`
Ejecutar las pruebas unitarias
Para correr de manera automatica todos los archivos de prueba unitaria (*.test.ts).

**Ejercicios de Bases de Datos (MySQL - Pruebas en Línea)**

Para probar scripts de MySQL (como el ejercicio de control de préstamos de libros) sin necesidad de configurar un entorno local, puedes utilizar la plataforma web gratuita DB Fiddle:

Entra a [DB Fiddle](dbfiddle.uk).

En las opciones de configuración de la plataforma, selecciona MySQL como motor de base de datos.

Copia el script que se encuentra en `01-ejercicios\05-consulta-sonia.sql`. Incluye la creación de tablas, los datos de prueba y la consulta final.

### Sección 2 (App Fullstack)
El sistema se compone de tres servicios principales orquestados mediante Docker Compose:
Frontend (Nuxt 3): Corriendo en el puerto 3000.
Backend (NestJS): Corriendo en el puerto 4000.
Database (MongoDB): Ejecutándose internamente en el puerto 27017 y expuesta localmente en el 27018.

- **Levantamineto de servicios**
    Levanta todos los servicios con Docker Compose: `docker compose up --build -d`
    Levanta frontend: `docker compose up --build -d frontend`
    Levanta backend: `docker compose up --build -d backend`
    Levanta mongo: `docker compose up --build -d mongo`

- **Backend (NestJS + MongoDB)** 

    API RESTful desarrollada con NestJS, utilizando Mongoose para la persistencia de datos en MongoDB y contenedores mediante Docker Compose.

    **Cómo probar la API**
    Puedes probar los endpoints utilizando herramientas como Thunder Client, Postman o cURL. 

    **Autenticación**: Las peticiones protegidas requieren enviar un Header HTTP:
    - Authorization: Bearer token-secret (o el token configurado en las variables de entorno)

    **Endpoints disponibles (/api/tasks):**
    1. Listar todas las tareas
        - Método: GET
        - URL: http://localhost:4000/api/tasks
    2. Obtener una tarea por ID
        - Método: GET
        - URL: http://localhost:4000/api/tasks/:id
    3. Crear una tarea
        - Método: POST
        - URL: http://localhost:4000/api/tasks
        - Body (JSON):
        ```json
        {
            "title": "Aprender Docker y NestJS",
            "description": "Completar la prueba técnica",
            "completed": false
        }
        ```
    4. Actualizar una tarea
        - Método: PUT (o PATCH)
        - URL: http://localhost:4000/api/tasks/:id
        - Body (JSON):
        ```json
        {
            "completed": true
        }
        ```
    5. Eliminar una tarea
        - Método: DELETE
        - URL: http://localhost:4000/api/tasks/:id


- **Frontend (Nuxt 3 + Pinia)**
    Aplicación web desarrollada con Nuxt 3 y gestión de estado global mediante Pinia, utilizando Tailwind CSS para los estilos, empaquetada mediante Docker y configurada para comunicarse con la API REST del backend.

    **Manejo de Estado (Pinia)**: Las peticiones a la API y el estado de la aplicación se gestionan a través del Store de Pinia (useTaskStore), centralizando la lógica de consumo del backend.

    **Autenticación en UI**: Las peticiones enviadas desde Nuxt hacia el backend incluyen el Header HTTP de autorización:

    **Authorization**: Bearer token-secret (o el token configurado en tus variables de entorno).

    **Gestión de Tareas:**

    - Ver tareas: Al cargar la página principal, el store ejecuta la acción para obtener las tareas desde http://localhost:4000/api/tasks.

    - Crear tarea: Usa el formulario principal especificando Título y Descripción, y presiona el botón "Guardar".

    - Marcar como completada: Haz clic en el checkbox o interruptor de una tarea para actualizar su estado (PUT/PATCH).

    - Eliminar tarea: Haz clic en el icono de papelera para borrar la tarea (DELETE).


    **Ejecución de Pruebas (Tests)**

    El proyecto incluye pruebas unitarias configuradas con Jest. Para ejecutarlas dentro del contenedor, corre el siguiente comando en tu terminal:

    `docker exec -it <nombre_o_id_del_contenedor> pnpm test`

### Sección 3 (Teoría)
Se creo un archivo con las preguntas y respuestas, dejo el link
[Preguntas y respuestas](./03-teoria/questionario.md)
