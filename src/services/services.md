# Global Services

> **Usage:** Grep for service name or keyword before full read.

## Convention

- File: `src/services/<serviceName>.service.ts`
- Named exports for each function
- Max 300 lines. Split into domain-specific services if larger.

## Index

| Service                  | File | Tags | Description |
| ------------------------ | ---- | ---- | ----------- |
| (empty — add as created) |      |      |             |

## Rules

- API calls, data transformations, business logic go here
- If used in 2+ routes → place here
- If route-specific → place in `src/app/<route>/<pageName>.service.ts`
- Services should NOT import React/hooks
