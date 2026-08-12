# Global Components (large, cross-session)

> **Usage:** Grep for keyword before full read.

## Convention

- One component per file
- File max 500 lines. Split into sub-components in same folder if exceeds.
- Place in `src/components/global/<ComponentName>.tsx`
- Sub-components go in `src/components/global/<ComponentName>/` folder

## 1. Quick Index

| Component      | Tags                         | Details Reference                                                                       |
| -------------- | ---------------------------- | --------------------------------------------------------------------------------------- |
| AppPagination  | pagination, navigation       | [Details](#L30-L33)                                                                     |
| FilterDropdown | filter, select, dropdown     | [Details](#L35-L38)                                                                     |
| FilterToolbar  | filter, toolbar, search      | [Details](#L40-L43)                                                                     |
| DataTable      | table, pagination, data      | [Details](#L45-L48)                                                                     |
| TableExplorer  | table, filter, explorer      | [Details](#L50-L53)                                                                     |
| HoursDonut     | chart, donut, hours          | [Details](#L55-L58)                                                                     |
| StatCards      | stats, cards, metrics        | [Details](#L60-L63)                                                                     |
| EmptyState     | empty, placeholder, fallback | `src/components/ui/EmptyState.tsx` — cross-module empty state with icon + message       |
| EntryBlock     | dsr, entry, timeline         | `src/components/ui/EntryBlock.tsx` — timeline entry renderer with optional time slot    |
| StatusBar      | stats, status, grid          | `src/components/ui/StatusBar.tsx` — 4-stat grid for total/pending/approved/rejected     |
| SubmitterList  | submitter, list, selection   | `src/components/ui/SubmitterList.tsx` — submitter list with avatar, name, pending badge |
| SendPanel      | send, recipients, form       | `src/components/ui/SendPanel.tsx` — send-to/cc chip selector + optional attachments     |

## 2. Deep Dives

### AppPagination

- **Path:** `src/components/global/AppPagination.tsx`
- **Description:** Cross-module pagination wrapping shadcn Pagination primitives. Numbered pages with prev/next, ellipsis for large page counts.
- **Used by:** DSR Sent list, DSR Received list, Weekly Report Sent list, Weekly Report Received list

### FilterDropdown

- **Path:** `src/components/global/FilterDropdown.tsx`
- **Description:** Single select filter with label, placeholder, and options. Generic — no domain logic. "all" is default all-pass value.
- **Used by:** FilterToolbar, any page needing a standalone filter dropdown.

### FilterToolbar

- **Path:** `src/components/global/FilterToolbar.tsx`
- **Description:** Grid of FilterDropdowns + Apply/Reset buttons with internal draft state. Receives `fields`, `onApply`, `resultLabel`. Fully generic.
- **Used by:** TableExplorer, components showcase.

### DataTable

- **Path:** `src/components/global/DataTable.tsx`
- **Description:** Generic table with column-driven rendering (`ColumnDef<T>` with `render` callbacks), empty state, and pagination footer (rows-per-page selector, prev/next). `T extends { id: string }`.
- **Used by:** TableExplorer, components showcase.

### TableExplorer

- **Path:** `src/components/global/TableExplorer.tsx`
- **Description:** All-in-one combo: FilterToolbar + DataTable wired with useTableFilters. Pass `data`, `columns`, `filterFields` and get a full filterable/paginated table. Zero domain coupling.
- **Used by:** components showcase.

### HoursDonut

- **Path:** `src/components/global/HoursDonut.tsx`
- **Description:** Conic-gradient donut chart with legend. Prop-driven: `title`, `slices: HoursSlice[]`, `delay`. Types live in the component file, re-exported via `app/components/types/`.
- **Used by:** components showcase.

### StatCards

- **Path:** `src/components/global/StatCards.tsx`
- **Description:** 4-stat card grid with icon, value, label, sub. Prop-driven: `items: StatCardItem[]`. Types live in the component file, re-exported via `app/components/types/`.
- **Used by:** components showcase.

## Rules

- Header, Sidebar, Footer, AppLayout, etc. go here
- If a component is used in 2+ routes and is large → place here
- If a component is used in 2+ routes but is small → place in `src/components/ui/`
- If a component is only used in 1 route → place in `src/app/<route>/components/`
