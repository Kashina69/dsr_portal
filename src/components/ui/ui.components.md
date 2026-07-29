# UI Components (small, reusable)

> **Usage:** Grep this file for a keyword/tag before reading full entries.
> Tokens won't be wasted reading everything.

## Convention

- One component per file, named export
- File max 200 lines. Split if exceeds.
- Place in `src/components/ui/<ComponentName>.tsx`
- Keep focused: button, input, modal, badge, etc.

## Component Index

| Component                    | File                                                        | Tags                                | Description                                                                                       |
| ---------------------------- | ----------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| LoginForm                    | `src/app/login/components/LoginForm.tsx`                    | login, auth, form, email, password  | Login form with shadcn Card/Input/Label/Button, Zod validation, password strength (page-specific) |
| PasswordStrengthIndicator    | `src/app/login/components/PasswordStrength.tsx`             | password, strength, meter, rating   | Colored progress bar displaying password strength: too easy / fair / strong (page-specific)       |
| ForgotPasswordForm           | `src/app/forgot-password/components/ForgotPasswordForm.tsx` | forgot-password, reset, auth, email | Forgot password form with shadcn Card/Input/Label/Button, Zod validation (page-specific)          |
| StatCards                    | `src/app/dashboard/components/StatCards.tsx`                | stats, metrics, cards, dashboard    | 4 stat cards (total/present/on-leave/absent) with stagger fade-up animation (page-specific)       |
| EmployeeTable                | `src/app/dashboard/components/EmployeeTable.tsx`            | table, employee, filter, search     | Shadcn Table with search/filter, status badges, and animated rows (page-specific)                 |
| AttendanceChart              | `src/app/dashboard/components/AttendanceChart.tsx`          | chart, attendance, bar, trend       | 7-day CSS bar chart with animated bars (page-specific)                                            |
| DepartmentBreakdown          | `src/app/dashboard/components/DepartmentBreakdown.tsx`      | department, breakdown, distribution | Horizontal bar chart per department with color coding (page-specific)                             |
| RecentActivity               | `src/app/dashboard/components/RecentActivity.tsx`           | activity, feed, timeline, event     | Activity feed with unread indicators and relative timestamps (page-specific)                      |
| CardSkeleton / TableSkeleton | `src/app/dashboard/components/Skeleton.tsx`                 | skeleton, loading, placeholder      | Animated skeleton placeholders for cards and table (page-specific)                                |
| Button                       | `src/components/ui/button.tsx`                              | button, action, cva, variants       | shadcn Button with variant/size props via class-variance-authority (default/outline/ghost/etc.)   |
| Input                        | `src/components/ui/input.tsx`                               | input, text, field, form            | Styled input field with focus ring, disabled state, invalid state                                 |
| Label                        | `src/components/ui/label.tsx`                               | label, form, input-label            | Accessible form label with peer-disabled support                                                  |
| Card                         | `src/components/ui/card.tsx`                                | card, container, section, layout    | Container with CardHeader/CardTitle/CardDescription/CardContent/CardFooter sub-components         |
| Badge                        | `src/components/ui/badge.tsx`                               | badge, status, tag, label           | Status indicator badge with variant support (default/secondary/destructive)                       |
| Table                        | `src/components/ui/table.tsx`                               | table, data, rows, columns          | Shadcn table with TableHeader/TableBody/TableRow/TableCell/TableHead sub-components               |
| Avatar                       | `src/components/ui/avatar.tsx`                              | avatar, image, profile, user        | User avatar with fallback initials and size variants                                              |
| Dropdown Menu                | `src/components/ui/dropdown-menu.tsx`                       | dropdown, menu, context, action     | Dropdown menu with items, separators, and sub-triggers                                            |
| Separator                    | `src/components/ui/separator.tsx`                           | separator, divider, hr              | Horizontal/vertical divider for visual grouping                                                   |
| Tooltip                      | `src/components/ui/tooltip.tsx`                             | tooltip, hint, info, hover          | Hover tooltip with position variants                                                              |
| Select                       | `src/components/ui/select.tsx`                              | select, dropdown, picker, option    | Select dropdown with trigger, content, and item sub-components                                    |
| Sheet                        | `src/components/ui/sheet.tsx`                               | sheet, drawer, panel, slide         | Slide-in panel from any side                                                                      |
| Sidebar                      | `src/components/ui/sidebar.tsx`                             | sidebar, navigation, menu, nav      | Collapsible sidebar with Provider, Trigger, Menu, and group items                                 |
| Skeleton                     | `src/components/ui/skeleton.tsx`                            | skeleton, loading, placeholder      | Base skeleton primitive for loading states                                                        |

## Rules

- If a component is used in 2+ routes → place here
- If a component grows beyond 200 lines → split into sub-components
- If a component becomes session-specific → move to `src/app/<route>/components/`
- If a component becomes large & cross-session → move to `src/components/global/`
