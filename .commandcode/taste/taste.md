## 1. Quick Index

| Section       | Reference           |
| ------------- | ------------------- |
| Global        | [Details](#L9-L34)  |
| Project level | [Details](#L35-L43) |
| Good to have  | [Details](#L44-L50) |

# Global

See [global/taste.md](global/taste.md)

# Project level

- Prefers using shadcn/ui as the component library for building application UIs. Confidence: 0.9
- Prefers keeping shadcn/ui component files (`src/components/ui/*.tsx`) pristine/stock — never manually edit them. Any customization should go in page-specific components or wrapper components, not in the shadcn-generated files. Confidence: 0.8
- Prefers modern minimalist dashboard UIs with compact data density — power-user layouts that show more data in less space, not airy/spacious designs. Confidence: 0.9
- Prefers indigo-tinted color schemes (slate-gray chrome + indigo accent) over generic blue-purple or neutral-gray SaaS palettes. Confidence: 0.9
- Prefers product-grade motion: fast, functional animations (fade-up, slide-right, scale-in at 150-300ms) applied to stat reveals, table rows, and chart bars — no page-load theater or decorative animations. Confidence: 0.9
- When given an image reference for a UI, builds a redesigned modern version that improves the layout, UX, and visual design — does not produce a direct copy. Confidence: 0.9
- When redesigning a UI from a reference image/screenshot, preserves the data fields and schema from the original accurately — the visual presentation should be modernized, but the data structure (field names, types, relationships) must map to the reference because the database schema reflects those fields. Do not invent or rename data fields during redesign. Confidence: 0.8
- Uses the design skill to guide UI decisions whenever building visual interfaces. Confidence: 0.8
- Prefers an incremental workflow: improve existing pages first before discussing or expanding to new features. Confidence: 0.8
- Prefers technical explanations in short bullet points with clear cause → effect structure (issue → fix → files changed), to quickly understand changes in the project. Confidence: 0.8
  See [project-level/taste.md](project-level/taste.md)

# Good to have

See [good-to-have/taste.md](good-to-have/taste.md)

# Good to have

- The development environment is Windows, but Git Bash must be used for all terminal commands and git operations — never cmd.exe or PowerShell. Git Bash supports heredocs, special characters, and Unix-style commands reliably. Confidence: 0.9
- Prefers keeping commits organized by file category into separate, sequential commits — taste file changes in one commit, project documentation (.md) files in another, and code/project source files in a third. Never mixes categories in a single commit. Explicitly confirmed by user ("multi step format like how i like to do it"); user also independently requests standalone taste-only commits ("commit the current taste files"). Confidence: 0.95
- Prefers deep educational explanations of tooling and configuration — wants to understand what each config file does, what each dependency is for, how CSS imports work, and how components are architected, not just how to run commands. Confidence: 0.9
- Prefers keeping dependencies clean: proactively removes unused packages rather than leaving dead dependencies in the project. Confidence: 0.7
