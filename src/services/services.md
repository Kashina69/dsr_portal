# Global Services

> **Usage:** Grep for service name or keyword before full read.

## Convention

- File: `src/services/<serviceName>.service.ts`
- Named exports for each function
- Max 300 lines. Split into domain-specific services if larger.

## 1. Quick Index

| Service                  | Tags | Details Reference |
| ------------------------ | ---- | ----------------- |
| (empty — add as created) |      |                   |

## 2. Deep Dives

_(empty - add as created)_

## Rules

- API calls, data transformations, business logic go here
- If used in 2+ routes → place here
- If route-specific → place in `src/app/<route>/<pageName>.service.ts`
- Services should NOT import React/hooks
