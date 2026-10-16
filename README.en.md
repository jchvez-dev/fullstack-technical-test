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
### Section 3 (Theory)