# Project Memory

> **Usage:** Update when discovering patterns, making decisions, or logging business logic. (Stack/conventions belong in PROJECT.md).

## 1. Quick Index

| Section                | Reference           |
| ---------------------- | ------------------- |
| Business Logic         | [Details](#L13-L17) |
| Architecture Decisions | [Details](#L19-L23) |
| Known Gaps / TODOs     | [Details](#L25-L29) |
| Taste / Preferences    | [Details](#L31-L34) |

## Business Logic

- **Dashboard** — `/dashboard` shows workforce overview: stat cards, employee table, 7-day attendance bar chart, department distribution, and recent activity.
- **DSR Module** — Three routes under `/admin/dsr/`: Add DSR (card-based form with inline entry editing, time auto-advance, send-to chip selection), Sent DSR (split-panel list + detail with search, pagination, status badges, timeline entry blocks), Received DSR (three-column manager view with submitter list, DSR list, detail with Approve/Reject actions and comments). All data is mock/static, structured for future DB integration.
- **Weekly Report Module** — Three routes under `/admin/weekly-report/`: Add Report (project+description entry rows, week navigation, chip-based send-to/cc, submit enabled when ≥1 entry + ≥1 recipient), Sent Reports (split-panel with filter tabs, search, pagination), Received Reports (three-column manager view with submitter list, report list, detail with Approve/Reject + comments). Entries have no time fields — project name + description only. Weekly cadence, same Pending/Approved/Rejected flow as DSR.
- **Color scheme** — Tinted slate + indigo accent. Neutrals carry ~0.005 indigo chroma.
- **Motion** — Product-grade only: fade-up (200ms), slide-right (300ms), scale-in (200ms). All `motion-safe:` prefixed.

## Architecture Decisions

- **Styled with shadcn/ui** — use Card, Input, Label, and Button. Styling applied alongside functionality.
- **Dashboard composition** — Monitor pattern (status, metrics, trends). Sidebar + header layout shell. Page-specific components in `app/dashboard/components/`.
- **Sidebar promoted to `/admin/` level** — `src/app/admin/layout.tsx` wraps all admin routes with the shared sidebar shell. Individual route layouts (dashboard, dsr) are thin wrappers (metadata only). DSR nav group is a collapsible `SidebarMenuItem` with `useState` toggle + `ChevronDown` animation.
- **Shared report components** — DSR and Weekly Report share 5 components (`EmptyState`, `EntryBlock`, `StatusBar`, `SubmitterList`, `SendPanel`) and a `useToggleList` hook extracted from duplicated code. Shared types at `src/types/report.type.ts`, shared data at `src/data/report.data.ts`. Domain-specific types (`dsr.types.ts`, `weekly-report.types.ts`) re-export from shared where applicable.
- **Charts** — Pure CSS/div bars, no chart library dependency.

## Known Gaps / TODOs

- React Compiler ESLint rule not configured in eslint.config.mjs
- No test framework
- Login page has no API integration yet — mockup only

## Taste / Preferences

- **Design-first with shadcn/ui** — build UI alongside functionality. Modern minimalist aesthetic, indigo-tinted color schemes, product-grade animations.
- **Image-driven development** — when given a reference image, build an improved version, not a direct copy.
