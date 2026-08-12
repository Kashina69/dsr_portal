# Global Hooks

> **Usage:** Grep for hook name or keyword before full read.

## Convention

- File: `src/hooks/<hookName>.hook.ts`
- Named export: `use<hookName>`
- Max 200 lines. Split concerns into separate hooks if larger.

## 1. Quick Index

| Hook            | Tags                      | Details Reference   |
| --------------- | ------------------------- | ------------------- |
| useToggleList   | toggle, selection, list   | [Details](#L21-L24) |
| useTableFilters | table, filter, pagination | [Details](#L26-L30) |

## 2. Deep Dives

### useToggleList

- **Path:** `src/hooks/use-toggle-list.hook.ts`
- **Description:** Generic toggle list hook for managing selected string values. Returns `{ items, toggle }`.
- **Used by:** Add DSR page, Add Weekly Report page

### useTableFilters

- **Path:** `src/hooks/useTableFilters.hook.ts`
- **Description:** Generic client-side filtering + pagination. Filters by substring match on `Record<string, unknown>` keys. Returns `{ applied, applyFilters, rows, from, to, total, page, setPage, pageCount, rowsPerPage, changeRowsPerPage }`.
- **Used by:** TableExplorer, components showcase DemoTable.

## Rules

- If a hook is used in 2+ routes → place here
- If a hook is route-specific → place in `src/app/<route>/<hookName>.hook.ts`
- Extract side effects, API calls, and complex state into hooks
