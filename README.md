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
### Sección 3 (Teoría)
Se creo un archivo con las preguntas y respuestas, dejo el link
[Preguntas y respuestas](./03-teoria/questionario.md)
