# Global Components (large, cross-session)

> **Usage:** Grep for keyword before full read.

## Convention

- One component per file
- File max 500 lines. Split into sub-components in same folder if exceeds.
- Place in `src/components/global/<ComponentName>.tsx`
- Sub-components go in `src/components/global/<ComponentName>/` folder

## 1. Quick Index

| Component                | Tags | Details Reference |
| ------------------------ | ---- | ----------------- |
| (empty — add as created) |      |                   |

## 2. Deep Dives

_(empty - add as created)_

## Rules

- Header, Sidebar, Footer, AppLayout, etc. go here
- If a component is used in 2+ routes and is large → place here
- If a component is used in 2+ routes but is small → place in `src/components/ui/`
- If a component is only used in 1 route → place in `src/app/<route>/components/`
