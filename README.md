## Getting Started

First, install the dependencys:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

If using `pnpm` then you have to run `pnpm approve-builds sharp unrs-resolver` to resolve installation errors for Next.js.

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The server will open on `http://localhost:3000`

# MD Files.

- `./PROJECT.md` — Core project specifications, stack details, commands, and code conventions.
- `./README.md` — General getting started guide and installation instructions.
- `./INITIALIZE.md` — A system skill template used to scaffold agent-friendly docs for new projects.
- `./src/services/services.md` — Registry and conventions for global services and API calls.
- `./src/context/memory.md` — The "brain" of the project; tracks business logic, architecture decisions, and known gaps.
- `./src/components/global/global.components.md` — Registry for large, cross-session UI components (e.g., layouts, sidebars).
- `./src/components/ui/ui.components.md` — Registry for small, reusable UI primitives (e.g., buttons, inputs, modals).
- `./src/hooks/hooks.md` — Registry and conventions for custom React hooks used across multiple routes.
- `./AGENTS.md` — The main entry point for AI agents, detailing their workflow and how to navigate this context graph.
- `./.commandcode/taste/taste.md` — Tracks developer preferences, stylistic rules, and UI/UX design taste for AI generation.
