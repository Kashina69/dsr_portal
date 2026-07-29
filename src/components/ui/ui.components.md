# UI Components (small, reusable)

> **Usage:** Grep this file for a keyword/tag before reading full entries.
> Tokens won't be wasted reading everything.

## Convention

- One component per file, named export
- File max 200 lines. Split if exceeds.
- Place in `src/components/ui/<ComponentName>.tsx`
- Keep focused: button, input, modal, badge, etc.

## Component Index

| Component                 | File                                                        | Tags                                | Description                                                                                         |
| ------------------------- | ----------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| LoginForm                 | `src/app/login/components/LoginForm.tsx`                    | login, auth, form, email, password  | Login form with shadcn Card/Input/Label/Button, Zod validation, password strength (page-specific)   |
| PasswordStrengthIndicator | `src/app/login/components/PasswordStrength.tsx`             | password, strength, meter, rating   | Colored progress bar displaying password strength: too easy / fair / strong (page-specific)          |
| ForgotPasswordForm        | `src/app/forgot-password/components/ForgotPasswordForm.tsx` | forgot-password, reset, auth, email | Forgot password form with shadcn Card/Input/Label/Button, Zod validation (page-specific)            |
| Button                    | `src/components/ui/button.tsx`                              | button, action, cva, variants       | shadcn Button with variant/size props via class-variance-authority (default/outline/ghost/etc.)     |
| Input                     | `src/components/ui/input.tsx`                               | input, text, field, form            | Styled input field with focus ring, disabled state, invalid state                                   |
| Label                     | `src/components/ui/label.tsx`                               | label, form, input-label            | Accessible form label with peer-disabled support                                                    |
| Card                      | `src/components/ui/card.tsx`                                | card, container, section, layout    | Container with CardHeader/CardTitle/CardDescription/CardContent/CardFooter sub-components          |

## Rules

- If a component is used in 2+ routes → place here
- If a component grows beyond 200 lines → split into sub-components
- If a component becomes session-specific → move to `src/app/<route>/components/`
- If a component becomes large & cross-session → move to `src/components/global/`
