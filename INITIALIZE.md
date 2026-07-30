---
name: initialize-project
description: Initializes a new project by scaffolding AGENTS.md, PROJECT.md, and context registry files using the token-efficient 3-Level Context Graph architecture to maintain replicable context quality across any new project.
---

When the user asks to initialize a project or scaffold agent docs, you must follow these steps to set up the **3-Level Context Graph**.

### 1. Design Philosophy: The 3-Level Context Graph

This architecture is designed to be **context-rich but token-efficient**. The AI should never read an entire markdown file to find one piece of information. Instead, it navigates a strict 3-level reference graph:

- **Level 1: The Entry Node (`AGENTS.md`)** — Acts as a pure router. It contains exact line-number pointers to the `Quick Index` sections of all other documentation files.
- **Level 2: The Quick Index & Deep Dives (Registry Files)** — Every file (like `ui.components.md`, `memory.md`) is split into two sections:
    1. `## 1. Quick Index`: A table mapping items/sections to local line numbers (e.g., `[Details](#L50-L65)`).
    2. `## 2. Deep Dives`: Detailed documentation for each item.
- **Level 3: Source Code Links** — Inside the "Deep Dive" section, there is a direct pointer to the actual source code line numbers (e.g., `[Source Code](../../src/components/Button.tsx#L1-L150)`).

**Self-Improving Workflow:** As you work on the project, you must automatically maintain this index. If you add a component, you MUST add it to the Quick Index, append its Deep Dive, and if line numbers shift, you MUST proactively calculate the new line numbers and update `AGENTS.md` and the Quick Indexes. This ensures the indexing stays 100% accurate and self-improving.

**Strict Single Source of Truth (SSOT):** Never duplicate information across files. `PROJECT.md` is the absolute single source of truth for the Tech Stack, Code Conventions, File Size Limits, and Linting Rules. Do not duplicate these in `memory.md` or elsewhere.

**No Conversational Fluff:** Keep documentation ruthlessly concise. Do not include chatty filler text (e.g., "> Usage: Grep this file..."). Rely entirely on the 3-level graph for navigation.

---

### 2. Scaffold `PROJECT.md`

Create a file named `PROJECT.md` in the workspace root. Fill in the specifics based on the project's actual stack, but strictly use the Quick Index pattern.

```markdown
# Project Information

## 1. Quick Index

| Section             | Reference                   |
| ------------------- | --------------------------- |
| 1. Stack            | [Details](#L[START]-L[END]) |
| 2. Commands         | [Details](#L[START]-L[END]) |
| 3. Folder Structure | [Details](#L[START]-L[END]) |
| 4. Code Conventions | [Details](#L[START]-L[END]) |

## 1. Stack

- **[Framework]** — [Details]
- **[Styling]** — [Details]

## 2. Commands

| Command         | Action     |
| --------------- | ---------- |
| `[dev command]` | Dev server |

## 3. Folder Structure

\`\`\`
[root]/
├── src/
│ ├── components/  
│ └── context/
\`\`\`

## 4. Code Conventions

- **Max 200 lines** for simple files
- **Max 500 lines** for complex files
```

_(Calculate the exact line ranges for the Details links after generating the file)._

---

### 3. Scaffold Registry Files

Create the core registry files (e.g., `src/components/ui/ui.components.md`, `src/context/memory.md`, etc.) using this exact structure:

```markdown
# [Domain Name] Registry

## 1. Quick Index

| Item                     | Tags | Details Reference |
| ------------------------ | ---- | ----------------- |
| (empty — add as created) |      |                   |

## 2. Deep Dives

_(empty - add as created)_
```

---

### 4. Scaffold `AGENTS.md` (The Entry Node)

After all files are created and their Quick Index line numbers are finalized, create `AGENTS.md` in the workspace root:

```markdown
# Agent Guide

**This file is the entry point. Context docs below are graph nodes — follow line pointers before full reads.**
---

## 1. Reference Docs (Context Graph)

| Doc               | Path                                                                                             | What it tracks                     |
| ----------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------- |
| UI Components     | [ui.components.md Quick Index](./src/components/ui/ui.components.md#L[START]-L[END])             | small reusable components          |
| Global Components | [global.components.md Quick Index](./src/components/global/global.components.md#L[START]-L[END]) | large cross-session components     |
| Hooks             | [hooks.md Quick Index](./src/hooks/hooks.md#L[START]-L[END])                                     | global hooks                       |
| Services          | [services.md Quick Index](./src/services/services.md#L[START]-L[END])                            | global services                    |
| Project Memory    | [memory.md Quick Index](./src/context/memory.md#L[START]-L[END])                                 | business logic, decisions, taste   |
| This file         | `AGENTS.md`                                                                                      | entry point, conventions, workflow |

Each doc has a **Quick Index** linking to a **Deep Dive**. Always read the Quick Index first.

---

## 2. Agent Workflow

1. **Read this file** (done — you're here)
2. **Follow Level 1 pointers** to the Quick Index of relevant registry files.
3. **Follow Level 2 pointers** from the Quick Index to the Deep Dive.
4. **Follow Level 3 pointers** from the Deep Dive to the source code.
5. **Update docs** — whenever you add a component/hook/service, you MUST append it to the Quick Index and Deep Dives, and re-calculate line numbers if they shift.

---

## 3. Self-Improving System

This is a **living context graph**. Every agent session must:

1. **Traverse** only relevant doc nodes using exact line numbers.
2. **Auto-correct** line numbers in `AGENTS.md` and Quick Indexes if document edits cause them to shift.
3. **Split** files that grow stale or too long (max 200-500 lines).

---

## 4. Important Reminders

- BE CONCISE. Sacrifice grammar for brevity.
- No emojis. No comments in code files.
- Think about reuse BEFORE you write.
```

_(Replace `L[START]-L[END]` with the actual line numbers calculated from the newly generated files)._

---

### 5. Finalization

Notify the user that the project has been initialized with the 3-Level Context Graph.
