# Global Components (large, cross-session)

> **Usage:** Grep for keyword before full read.

## Convention

- One component per file
- File max 500 lines. Split into sub-components in same folder if exceeds.
- Place in `src/components/global/<ComponentName>.tsx`
- Sub-components go in `src/components/global/<ComponentName>/` folder

## 1. Quick Index

| Component     | Tags                   | Details Reference   |
| ------------- | ---------------------- | ------------------- |
| AppPagination | pagination, navigation | [Details](#L18-L21) |
| EmptyState    | empty, placeholder, fallback | `src/components/ui/EmptyState.tsx` — cross-module empty state with icon + message |
| EntryBlock    | dsr, entry, timeline      | `src/components/ui/EntryBlock.tsx` — timeline entry renderer with optional time slot |
| StatusBar     | stats, status, grid        | `src/components/ui/StatusBar.tsx` — 4-stat grid for total/pending/approved/rejected |
| SubmitterList | submitter, list, selection | `src/components/ui/SubmitterList.tsx` — submitter list with avatar, name, pending badge |
| SendPanel     | send, recipients, form     | `src/components/ui/SendPanel.tsx` — send-to/cc chip selector + optional attachments |

## 2. Deep Dives

### AppPagination

- **Path:** `src/components/global/AppPagination.tsx`
- **Description:** Cross-module pagination wrapping shadcn Pagination primitives. Numbered pages with prev/next, ellipsis for large page counts.
- **Used by:** DSR Sent list, DSR Received list, Weekly Report Sent list, Weekly Report Received list

## Rules

- Header, Sidebar, Footer, AppLayout, etc. go here
- If a component is used in 2+ routes and is large → place here
- If a component is used in 2+ routes but is small → place in `src/components/ui/`
- If a component is only used in 1 route → place in `src/app/<route>/components/`
