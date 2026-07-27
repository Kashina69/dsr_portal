# Global Components (large, cross-session)

> **Usage:** Grep for keyword before full read.
> These are big layout/piece components used across routes.

## Convention
- One component per file
- File max 500 lines. Split into sub-components in same folder if exceeds.
- Place in `src/components/global/<ComponentName>.tsx`
- Sub-components go in `src/components/global/<ComponentName>/` folder

## Component Index

| Component | File | Tags | Description |
|-----------|------|------|-------------|
| (empty — add as created) | | | |

## Rules
- Header, Sidebar, Footer, AppLayout, etc. go here
- If a component is used in 2+ routes and is large → place here
- If a component is used in 2+ routes but is small → place in `src/components/ui/`
- If a component is only used in 1 route → place in `src/app/<route>/components/`
