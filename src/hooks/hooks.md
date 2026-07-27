# Global Hooks

> **Usage:** Grep for hook name or keyword before full read.

## Convention

- File: `src/hooks/<hookName>.hook.ts`
- Named export: `use<hookName>`
- Max 200 lines. Split concerns into separate hooks if larger.

## Index

| Hook                     | File | Tags | Description |
| ------------------------ | ---- | ---- | ----------- |
| (empty — add as created) |      |      |             |

## Rules

- If a hook is used in 2+ routes → place here
- If a hook is route-specific → place in `src/app/<route>/<hookName>.hook.ts`
- Extract side effects, API calls, and complex state into hooks
