# Project Memory

> **Usage:** This is the brain. Update it when you discover patterns,
> make decisions, or learn something about the project.

## 1. Quick Index

| Section                 | Reference           |
| ----------------------- | ------------------- |
| Tech Stack              | [Details](#L17-L28) |
| Business Logic          | [Details](#L29-L34) |
| Architecture Decisions  | [Details](#L35-L43) |
| Naming & Style Patterns | [Details](#L44-L51) |
| Known Gaps / TODOs      | [Details](#L52-L57) |
| Taste / Preferences     | [Details](#L58-L62) |

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

- **Dashboard** — `/dashboard` shows workforce overview: stat cards (total/present/on-leave/absent), employee table with search/filter, 7-day attendance bar chart, department distribution, and recent activity feed.
- **Color scheme** — Tinted slate + indigo accent. Neutrals carry ~0.005 indigo chroma to feel authored, not sterile.
- **Motion** — Product-grade only: fade-up (200ms), slide-right (300ms), scale-in (200ms). All `motion-safe:` prefixed. No page-load theater.

## Architecture Decisions

- **Styled with shadcn/ui** — all forms and pages use shadcn Card, Input, Label, and Button components. Styling applied alongside functionality.
- **Dashboard composition** — Monitor pattern (status, metrics, trends). Sidebar + header layout shell. Page-specific components in `app/dashboard/components/`.
- **Charts** — Pure CSS/div bars, no chart library dependency. Simple and performant.
- **Strict separation of concerns** — types in `src/types/<feature>.type.ts`, dummy data in `src/data/<feature>.data.ts`. Never co-locate types and data in a single file. Global types/data go in these folders; page-specific types stay with the page.
- **File size limits** — 200 lines for simple components/hooks, 500 for complex global components. Aggressive splitting: sub-components, extracted hooks, and services are preferred over large files. This makes the codebase AI-navigable and human-debuggable.
- **Linting & Formatting** — ESLint for code quality (import sorting via `eslint-plugin-simple-import-sort`, type imports enforced, Prettier conflicts disabled), Prettier for formatting (semicolons, double quotes, trailing commas, 100 char width). Run `pnpm check` before commits/CI.

## Naming & Style Patterns

- Types file: `src/types/<feature>.type.ts` — shared types used by 2+ routes/modules. Extract here only when truly cross-module.
- Data file: `src/data/<feature>.data.ts` — shared dummy data used by 2+ routes/modules.
- Local types: `src/app/<route>/<route>.types.ts` — module-local types consumed only within that route.
- Local data: `src/app/<route>/<route>.data.ts` — module-local dummy data consumed only within that route.
- No type/interface/enum definitions in component code. Import everything from the dedicated types file.

## Known Gaps / TODOs

- React Compiler ESLint rule not configured in eslint.config.mjs
- No test framework
- Login page has no API integration yet — mockup only

## Taste / Preferences

- **Design-first with shadcn/ui** — build UI alongside functionality using shadcn components. Modern minimalist aesthetic, indigo-tinted color schemes, product-grade animations.
- **Image-driven development** — when given a reference image, build a redesigned/improved version, not a direct copy. Cleaner, more modern.
