# Project Memory

> **Usage:** This is the brain. Update it when you discover patterns,
> make decisions, or learn something about the project.

## Tech Stack

- Next.js 16 (App Router, `src/` dir)
- Tailwind CSS v4 (`@import "tailwindcss"`, `@tailwindcss/postcss` plugin)
- TypeScript strict mode, `@/*` → `./src/*`
- pnpm workspace
- ESLint v9 flat config (core-web-vitals + typescript + import sorting + prettier)
- Prettier v3 (`.prettierrc.yaml`, `.prettierignore`)
- React Compiler enabled (babel-plugin-react-compiler installed)
- shadcn/ui v4 (base-ui primitives)
- Zod for validation (v4)

## Business Logic

- (empty — add as discovered)

## Architecture Decisions

- **Styled with shadcn/ui** — all forms and pages use shadcn Card, Input, Label, and Button components. Styling applied alongside functionality.
- **Linting & Formatting** — ESLint for code quality (import sorting via `eslint-plugin-simple-import-sort`, type imports enforced, Prettier conflicts disabled), Prettier for formatting (semicolons, double quotes, trailing commas, 100 char width). Run `pnpm check` before commits/CI.

## Naming & Style Patterns

- (empty — add as established)

## Known Gaps / TODOs

- React Compiler ESLint rule not configured in eslint.config.mjs
- No test framework
- Login page has no API integration yet — mockup only

## Taste / Preferences

- **Functionality-first workflow** — implement logic, validation, routing, and state management before any UI polish. Radix UI for all interactive primitives (forms, dialogs, menus, etc.). Zero styling until everything works.
