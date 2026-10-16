Language / Idioma: [Español](./README.md) | [English](./README.en.md)

# Technical Assessment - Juan Chavez Gamez

Repository containing the technical assessment solution for the Full Stack Developer position, organized into three independent sections to facilitate review and execution.

## Prerequisites
Ensure you have the following tools installed in your environment before getting started:

- **[Git](https://git-scm.com/)** (to clone the repository)
- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[pnpm](https://pnpm.io/)** (package manager)
- **[Docker Desktop / Docker Compose](https://www.docker.com/)** (to run the full-stack application)

## Structure and Content
- **Section 1 (Exercises):** Algorithms and SQL queries implemented in plain Node.js.
- **Section 2 (Full-stack App):** A mini task-management API and its frontend, containerized using Docker.
- **Section 3 (Theory):** Theoretical questions answered in Markdown format.
```
├── 01-ejercicios/
├── 02-fullstack-app/
├── 03-teoria/
└── README.md
```

## Execution Guide by Section
### Section 1 (Exercises)
Navigate to the section directory before starting:

```bash
cd 01-ejercicios
```

This section uses `pnpm` for package management. If you do not have it enabled globally in Node.js, you can enable it using Corepack:

```bash
corepack enable
```

Next, install the project dependencies:

```bash
pnpm install
```

> Note: If this is your first time installing dependencies and pnpm blocks a build script (such as esbuild), authorize it by running: `pnpm approve-builds`

**Available Scripts**

Within the `package.json` file for this section, you will find the following configured commands:

- `pnpm start`
Executes the main script.
Runs the entry point (`index.ts`) to see the overall execution of the exercises.

- `pnpm test`
Executes unit tests.
Automatically runs all unit test files (`*.test.ts`).

**Database Exercises (MySQL - Online Testing)**

To test MySQL scripts (such as the book loan control exercise) without needing to configure a local environment, you can use the free web platform DB Fiddle:

Go to [DB Fiddle](dbfiddle.uk).

In the platform's configuration options, select MySQL as the database engine.

Copy the script found in `01-ejercicios/05-consulta-sonia.sql`. It includes table creation, test data, and the final query.

### Section 2 (Fullstack App)
### Section 2 (Fullstack Application)
The system consists of three main services orchestrated using Docker Compose:
Frontend (Nuxt 3): Running on port 3000.
Backend (NestJS): Running on port 4000.
Database (MongoDB): Running internally on port 27017 and exposed locally on port 27018.

- **Starting the services**
    Start all services using Docker Compose: `docker compose up --build -d`
    Start the frontend: `docker compose up --build -d frontend`
    Start the backend: `docker compose up --build -d backend`
    Start MongoDB: `docker compose up --build -d mongo`

- **Server (NestJS + MongoDB)**
    RESTful API developed with NestJS, using Mongoose for data persistence in MongoDB, and containerized via Docker Compose.

    **How ​​to test the API**
    You can test the endpoints using tools such as Thunder Client, Postman, or cURL.

    **Authentication**: Protected requests require an HTTP header:
    - Authorization: Bearer token-secret (or the token configured in the environment variables)

    **Available endpoints (/api/tasks):**
    1. List all tasks
        - Method: GET
        - URL: http://localhost:4000/api/tasks
    2. Get a task by ID
        - Method: GET
        - URL: http://localhost:4000/api/tasks/:id
    3. Create a task
        - Method: POST
        - URL: http://localhost:4000/api/tasks
        - Body (JSON):
        ```json
        {
            "title": "Learn Docker and NestJS",
            "description": "Complete the technical test",
            "completed": false
        }
        ```
    4. Update a task
        - Method: PUT (or PATCH)
        - URL: http://localhost:4000/api/tasks/:id
        - Body (JSON):
        ```json
        {
            "completed": true
        }
        ```
    5. Delete a task
        - Method: DELETE
        - URL: http://localhost:4000/api/tasks/:id


- **Frontend (Nuxt 3 + Pinia)**
    A web application developed using Nuxt 3, with global state management handled by Pinia and styling provided by Tailwind CSS. The application is containerized using Docker and configured to communicate with the backend REST API.

    **State Management (Pinia)**: API requests and application state are managed via a Pinia store (`useTaskStore`), which centralizes the logic for interacting with the backend.

    **UI Authentication**: Requests sent from the Nuxt application to the backend include an HTTP Authorization header:

    **Authorization**: Bearer token-secret (or the token configured in your environment variables).

    **Task Management:**- View tasks: Upon loading the main page, the store executes the action to fetch tasks from http://localhost:4000/api/tasks.

    - Create task: Use the main form to specify a Title and Description, then click the "Save" button.

    - Mark as completed: Click a task's checkbox or toggle switch to update its status (PUT/PATCH).

    - Delete task: Click the trash icon to delete the task (DELETE).


    **Running Tests**

    The project includes unit tests configured with Jest. To run them inside the container, execute the following command in your terminal:

    `docker exec -it <container_name_or_id> pnpm test`

### Section 3 (Theory)
A file containing the questions and answers has been created; here is the link:
[Questions and answers](./03-teoria/questionario.md)
