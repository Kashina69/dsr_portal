# UI Components (small, reusable)

> **Usage:** Grep this file for a keyword/tag before reading full entries.
> Tokens won't be wasted reading everything.

## Convention
- One component per file, named export
- File max 200 lines. Split if exceeds.
- Place in `src/components/ui/<ComponentName>.tsx`
- Keep focused: button, input, modal, badge, etc.

## Component Index

| Component | File | Tags | Description |
|-----------|------|------|-------------|
| (empty — add as created) | | | |

## Rules
- If a component is used in 2+ routes → place here
- If a component grows beyond 200 lines → split into sub-components
- If a component becomes session-specific → move to `src/app/<route>/components/`
- If a component becomes large & cross-session → move to `src/components/global/`
