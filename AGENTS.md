# DSR Portal — Agent Guide

**This file is the entry point. Context docs below are graph nodes — grep before full read.**

---

## Token-Efficient Context Retrieval

To maintain token efficiency, this project keeps detailed specifications in `PROJECT.md`. **Be surgical in your searches.** DO NOT read `PROJECT.md` in its entirety. Instead, use your file viewing tools to fetch ONLY the exact line ranges below when you need specific context:

- **Stack Details**: [PROJECT.md#L3-L14](./PROJECT.md#L3-L14)
- **Commands**: [PROJECT.md#L15-L29](./PROJECT.md#L15-L29)
- **Folder Structure**: [PROJECT.md#L30-L60](./PROJECT.md#L30-L60)
- **Code Conventions & Best Practices**: [PROJECT.md#L61-L104](./PROJECT.md#L61-L104)

Only retrieve these sections if they are directly relevant to your current task.

---

## 1. Reference Docs (Context Graph)

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
| Types             | `src/types/<feature>.type.ts`                | shared TypeScript types            |
| Data              | `src/data/<feature>.data.ts`                 | dummy/mock data                    |
| Project Memory    | `src/context/memory.md`                      | business logic, decisions, taste   |
| This file         | `AGENTS.md`                                  | entry point, conventions, workflow |

Each doc has an index table with: **Name, File, Tags (keywords), Description**.
Tags include alternative names so agents find components even with different search terms.

---

## 2. Agent Workflow

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

## 3. Self-Improving System

This is a **living context graph**. Every agent session should:

1. **Read** AGENTS.md (entry node)
2. **Traverse** only relevant doc nodes (grep, don't read all)
3. **Update** docs with new entries, tags, decisions
4. **Log taste** in memory.md — user preferences for style, patterns, approach
5. **Split** files that grow stale — if a .md becomes long, refactor into sub-docs

This creates a flywheel: each session enriches the graph, making future agents faster.

---

## 4. Important Reminders

- BE CONCISE. Sacrifice grammar for brevity.
- No emojis.
- No comments in code files.
- Every file max 200-500 lines.
- Think about reuse BEFORE you write.
- When in doubt, ask the user.
