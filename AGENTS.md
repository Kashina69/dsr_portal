# DSR Portal — Agent Guide

**This file is the entry point. Context docs below are graph nodes — grep before full read.**

---

## 1. Stack

- **Next.js 16** — App Router, `src/` directory
- **Tailwind CSS v4** — `@import "tailwindcss"`, PostCSS `@tailwindcss/postcss`
- **TypeScript** strict mode, `@/*` → `./src/*`
- **pnpm** workspace
- **ESLint v9** flat config (core-web-vitals + typescript + import sorting + prettier)
- **Prettier v3** (`.prettierrc.yaml`)
- **React Compiler** enabled in `next.config.ts`

## 2. Commands

| Command             | Action                                                                    |
| ------------------- | ------------------------------------------------------------------------- |
| `pnpm dev`          | Dev server                                                                |
| `pnpm build`        | Production build                                                          |
| `pnpm lint`         | ESLint check                                                              |
| `pnpm lint:fix`     | ESLint auto-fix                                                           |
| `pnpm format`       | Prettier format all                                                       |
| `pnpm format:check` | Prettier check only                                                       |
| `pnpm typecheck`    | `tsc --noEmit`                                                            |
| `pnpm check`        | Full CI pipeline: clean `.next` + typecheck + lint + format check + build |

No test framework.

---

## 3. Folder Structure

```
src/
├── app/
│   └── <route-name>/
│       ├── page.tsx            # route entry — keep <200 lines
│       ├── layout.tsx          # (optional) route layout
│       ├── components/         # page-specific components
│       │   └── <Component>.tsx
│       ├── <hook>.hook.ts      # page-specific hooks
│       └── <page>.service.ts   # page-specific services/api
├── components/
│   ├── ui/                     # small reusable components (Button, Input, Modal…)
│   │   └── ui.components.md    # index — grep before read
│   └── global/                 # large cross-session components (Header, Sidebar…)
│       └── global.components.md
├── hooks/                      # global hooks (used 2+ routes)
│   └── hooks.md
├── services/                   # global services (used 2+ routes)
│   └── services.md
└── context/
    └── memory.md               # project memory — business logic, decisions, taste
```

---

## 4. Code Conventions

### 4.1 File Length

- **Max 200 lines** for simple components/hooks
- **Max 500 lines** for complex global components
- If exceeded → split into sub-components, extract hooks/services

### 4.2 Component Hierarchy (when to place where)

| Used in      | Size                  | Place in                                               |
| ------------ | --------------------- | ------------------------------------------------------ |
| 1 route only | any                   | `app/<route>/components/`                              |
| 2+ routes    | small (<200 lines)    | `components/ui/`                                       |
| 2+ routes    | large (200-500 lines) | `components/global/`                                   |
| 2+ routes    | any                   | `components/global/` if layout-level (Header, Sidebar) |

### 4.3 Naming

| Type           | Pattern                | Example           |
| -------------- | ---------------------- | ----------------- |
| Component file | `PascalCase.tsx`       | `Button.tsx`      |
| Hook file      | `camelCase.hook.ts`    | `useAuth.hook.ts` |
| Service file   | `camelCase.service.ts` | `api.service.ts`  |
| Route page     | `page.tsx`             | `page.tsx`        |

### 4.4 Splitting Rules

- If a component CAN be reused elsewhere → make it global/ui immediately
- If a file approaches 200 lines → extract sub-components, hooks, or services
- Extract side effects and API calls into `.hook.ts` or `.service.ts` files
- Keep page.tsx focused on composition only

---

## 5. Reference Docs (Context Graph)

These are **token-efficient reference nodes**. Always use this workflow:

```
1. IDENTIFY keywords for what you need
2. GREP the relevant .md file for those keywords
   └─ if match found → read only that entry
   └─ if no match → check other docs or create new
3. UPDATE docs when you add something
```

### Doc Index

| Doc               | Path                                         | What it tracks                     |
| ----------------- | -------------------------------------------- | ---------------------------------- |
| UI Components     | `src/components/ui/ui.components.md`         | small reusable components          |
| Global Components | `src/components/global/global.components.md` | large cross-session components     |
| Hooks             | `src/hooks/hooks.md`                         | global hooks                       |
| Services          | `src/services/services.md`                   | global services                    |
| Project Memory    | `src/context/memory.md`                      | business logic, decisions, taste   |
| This file         | `AGENTS.md`                                  | entry point, conventions, workflow |

Each doc has an index table with: **Name, File, Tags (keywords), Description**.
Tags include alternative names so agents find components even with different search terms.

---

## 6. Agent Workflow

### When given a task:

1. **Read this file** (done — you're here)
2. **Grep `memory.md`** for relevant context (business logic, prior decisions)
3. **Grep the relevant component/hook/service .md** for existing matching items
4. **Only read full files** when grep confirms relevance
5. **Implement** following conventions above
6. **Update docs** — add new components/hooks/services to index tables, update memory.md with decisions
7. **Run `pnpm lint`** before finishing (or `pnpm check` for full CI pipeline)

### When adding a new component:

- Check if something similar exists in `ui.components.md` or `global.components.md` (grep)
- Add tags/keywords and alternative names so future agents find it
- Add entry to the appropriate index table

### When making a decision:

- Log it in `memory.md` under Architecture Decisions or Taste/Preferences

---

## 7. Self-Improving System

This is a **living context graph**. Every agent session should:

1. **Read** AGENTS.md (entry node)
2. **Traverse** only relevant doc nodes (grep, don't read all)
3. **Update** docs with new entries, tags, decisions
4. **Log taste** in memory.md — user preferences for style, patterns, approach
5. **Split** files that grow stale — if a .md becomes long, refactor into sub-docs

This creates a flywheel: each session enriches the graph, making future agents faster.

---

## 8. Important Reminders

- BE CONCISE. Sacrifice grammar for brevity.
- No emojis.
- No comments in code files.
- Every file max 200-500 lines.
- Think about reuse BEFORE you write.
- When in doubt, ask the user.
