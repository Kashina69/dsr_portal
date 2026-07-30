# Project Information

## 1. Stack

- **Next.js 16** — App Router, `src/` directory
- **Tailwind CSS v4** — `@import "tailwindcss"`, PostCSS `@tailwindcss/postcss`
- **shadcn/ui v4** — `@base-ui/react` primitives, `class-variance-authority`, `lucide-react` icons
- **TypeScript** strict mode, `@/*` → `./src/*`
- **pnpm** workspace
- **ESLint v9** flat config (core-web-vitals + typescript + import sorting + prettier)
- **Prettier v3** (`.prettierrc.yaml`)
- **React Compiler** enabled in `next.config.ts`
- **Zod** for validation (v4)

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
│       ├── <page>.service.ts   # page-specific services/api
│       ├── <route>.types.ts    # route-local types (interfaces, unions, enums)
│       └── <route>.data.ts     # route-local dummy/mock data
├── components/
│   ├── ui/                     # small reusable components (Button, Input, Modal…)
│   │   └── ui.components.md    # index — grep before read
│   └── global/                 # large cross-session components (Header, Sidebar…)
│       └── global.components.md
├── hooks/                      # global hooks (used 2+ routes)
│   └── hooks.md
├── services/                   # global services (used 2+ routes)
│   └── services.md
├── types/                      # shared types used by 2+ modules (feature.types.ts)
│   └── <feature>.type.ts
├── data/                       # shared dummy data used by 2+ modules (feature.data.ts)
│   └── <feature>.data.ts
└── context/
    └── memory.md               # project memory — business logic, decisions, taste
```

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

| Type           | Pattern                | Example              |
| -------------- | ---------------------- | -------------------- |
| Component file | `PascalCase.tsx`       | `Button.tsx`         |
| Hook file      | `camelCase.hook.ts`    | `useAuth.hook.ts`    |
| Service file   | `camelCase.service.ts` | `api.service.ts`     |
| Route types    | `<route>.types.ts`     | `dashboard.types.ts` |
| Route data     | `<route>.data.ts`      | `dashboard.data.ts`  |
| Global types   | `<feature>.type.ts`    | `auth.type.ts`       |
| Global data    | `<feature>.data.ts`    | `users.data.ts`      |
| Route page     | `page.tsx`             | `page.tsx`           |

### 4.4 Types & Data Separation

- **No type/interface/enum definitions in component code** — import from a `.types.ts` file.
- **Local (module-level):** `src/app/<route>/<route>.types.ts` + `<route>.data.ts` — consumed only within that route.
- **Global (shared):** `src/types/<feature>.type.ts` + `src/data/<feature>.data.ts` — used by 2+ routes/modules.
- **When building a new module, ALWAYS create the `.types.ts` and `.data.ts` files as part of the scaffold.** Do not inline types. Do not mix types and data in one file.

### 4.5 Splitting Rules

- If a component CAN be reused elsewhere → make it global/ui immediately
- If a file approaches 200 lines → extract sub-components, hooks, or services
- Extract side effects and API calls into `.hook.ts` or `.service.ts` files
- Keep page.tsx focused on composition only
