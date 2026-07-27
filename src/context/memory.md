# Project Memory

> **Usage:** This is the brain. Update it when you discover patterns,
> make decisions, or learn something about the project.

## Tech Stack
- Next.js 16 (App Router, `src/` dir)
- Tailwind CSS v4 (`@import "tailwindcss"`, `@tailwindcss/postcss` plugin)
- TypeScript strict mode, `@/*` → `./src/*`
- pnpm workspace
- ESLint v9 flat config (core-web-vitals + typescript)
- React Compiler enabled (babel-plugin-react-compiler installed)
- Radix UI (`@radix-ui/react-form` installed, add more primitives as needed)
- Zod for validation (v4)

## Business Logic
- (empty — add as discovered)

## Architecture Decisions
- **No styling until later** — build functionality, validation, routing, and logic first using bare Radix UI primitives. No theme, no CSS, no Tailwind classes on components until design phase.

## Naming & Style Patterns
- (empty — add as established)

## Known Gaps / TODOs
- React Compiler ESLint rule not configured in eslint.config.mjs
- No test framework
- Login page has no API integration yet — mockup only

## Taste / Preferences
- **Functionality-first workflow** — implement logic, validation, routing, and state management before any UI polish. Radix UI for all interactive primitives (forms, dialogs, menus, etc.). Zero styling until everything works.
