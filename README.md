# Starter Monorepo

A minimal monorepo setup for building full-stack applications with **[Nuxt](https://github.com/nuxt)** (frontend) and **[NestJS](https://github.com/nestjs)** (backend) with pnpm as the package manager.

## Features

- **Frontend:** Nuxt 3 (compatible with [Nuxt 4](https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4))
- **Backend:** NestJS
- **Package Management:** pnpm
- **Linting & Formatting:** [Antfu's ESLint config](https://github.com/antfu/eslint-config) with Stylistic rules for clean, opinionated code
- **Tooling:** Built-in linting, type-checking, testing, and pre-configured git hooks for streamlined development

## Usage

### Install Dependencies

```bash
pnpm install
```

### Prepare

Build all packages in stub mode:

```bash
pnpm dev:prepare
```

### Development

To start both the frontend (Nuxt) and backend (Nest) in development mode, use:


```bash
pnpm dev
```

###  Lint 

To lint the entire codebase, run:

```bash
pnpm lint
```


###  Typecheck 

To run TypeScript type checks across the monorepo, use:

```bash
pnpm typecheck
```

### Running Tests

- Unit tests:
    ```bash
    pnpm test
    ```

- End-to-end tests:
    ```bash
    pnpm test:e2e
    ```