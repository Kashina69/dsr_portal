## 1. Quick Index

| Section       | Reference           |
| ------------- | ------------------- |
| Global        | [Details](#L9-L34)  |
| Project level | [Details](#L35-L43) |
| Good to have  | [Details](#L44-L50) |

# Global
See [global/taste.md](global/taste.md)
# Project level
See [project-level/taste.md](project-level/taste.md)
# Good to have
See [good-to-have/taste.md](good-to-have/taste.md)
# Good to have

- The development environment is Windows, but Git Bash must be used for all terminal commands and git operations — never cmd.exe or PowerShell. Git Bash supports heredocs, special characters, and Unix-style commands reliably. Confidence: 0.9
- Prefers keeping commits organized by file category into separate, sequential commits — taste file changes in one commit, project documentation (.md) files in another, and code/project source files in a third. Never mixes categories in a single commit. Explicitly confirmed by user ("multi step format like how i like to do it"). Confidence: 0.9
- Prefers deep educational explanations of tooling and configuration — wants to understand what each config file does, what each dependency is for, how CSS imports work, and how components are architected, not just how to run commands. Confidence: 0.9
- Prefers keeping dependencies clean: proactively removes unused packages rather than leaving dead dependencies in the project. Confidence: 0.7
