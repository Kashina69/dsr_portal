# UI Components (small, reusable)

> **Usage:** Grep for keyword/tag before reading full entries.

## Convention

- One component per file, named export
- File max 200 lines. Split if exceeds.
- Place in `src/components/ui/<ComponentName>.tsx`
- Keep focused: button, input, modal, badge, etc.

## 1. Quick Index

| Component                    | Tags                                | Details Reference     |
| ---------------------------- | ----------------------------------- | --------------------- |
| LoginForm                    | login, auth, form, email, password  | [Details](#L41-L44)   |
| PasswordStrengthIndicator    | password, strength, meter, rating   | [Details](#L46-L49)   |
| ForgotPasswordForm           | forgot-password, reset, auth, email | [Details](#L51-L54)   |
| StatCards                    | stats, metrics, cards, dashboard    | [Details](#L56-L59)   |
| EmployeeTable                | table, employee, filter, search     | [Details](#L61-L64)   |
| AttendanceChart              | chart, attendance, bar, trend       | [Details](#L66-L69)   |
| DepartmentBreakdown          | department, breakdown, distribution | [Details](#L71-L74)   |
| RecentActivity               | activity, feed, timeline, event     | [Details](#L76-L79)   |
| CardSkeleton / TableSkeleton | skeleton, loading, placeholder      | [Details](#L81-L84)   |
| Button                       | button, action, cva, variants       | [Details](#L86-L89)   |
| Input                        | input, text, field, form            | [Details](#L91-L94)   |
| Label                        | label, form, input-label            | [Details](#L96-L99)   |
| Card                         | card, container, section, layout    | [Details](#L101-L104) |
| Badge                        | badge, status, tag, label           | [Details](#L106-L109) |
| Table                        | table, data, rows, columns          | [Details](#L111-L114) |
| Avatar                       | avatar, image, profile, user        | [Details](#L116-L119) |
| Dropdown Menu                | dropdown, menu, context, action     | [Details](#L121-L124) |
| Separator                    | separator, divider, hr              | [Details](#L126-L129) |
| Tooltip                      | tooltip, hint, info, hover          | [Details](#L131-L134) |
| Select                       | select, dropdown, picker, option    | [Details](#L136-L139) |
| Sheet                        | sheet, drawer, panel, slide         | [Details](#L141-L144) |
| Sidebar                      | sidebar, navigation, menu, nav      | [Details](#L146-L149) |
| Skeleton                     | skeleton, loading, placeholder      | [Details](#L151-L154) |
| DsrEntryBlock                | dsr, entry, timeline, block         | [Details](#L156-L159) |
| DsrStatusBadge               | dsr, status, badge, tag             | [Details](#L161-L164) |
| DsrPagination                | dsr, pagination, navigation         | [Details](#L166-L169) |

## 2. Deep Dives

### LoginForm

- **Path:** `src/app/login/components/LoginForm.tsx`
- **Description:** Login form with shadcn Card/Input/Label/Button, Zod validation, password strength (page-specific)
- **Source Code:** [src/app/login/components/LoginForm.tsx#L1-L150](../../../../src/app/login/components/LoginForm.tsx#L1-L150)

### PasswordStrengthIndicator

- **Path:** `src/app/login/components/PasswordStrength.tsx`
- **Description:** Colored progress bar displaying password strength: too easy / fair / strong (page-specific)
- **Source Code:** [src/app/login/components/PasswordStrength.tsx#L1-L150](../../../../src/app/login/components/PasswordStrength.tsx#L1-L150)

### ForgotPasswordForm

- **Path:** `src/app/forgot-password/components/ForgotPasswordForm.tsx`
- **Description:** Forgot password form with shadcn Card/Input/Label/Button, Zod validation (page-specific)
- **Source Code:** [src/app/forgot-password/components/ForgotPasswordForm.tsx#L1-L150](../../../../src/app/forgot-password/components/ForgotPasswordForm.tsx#L1-L150)

### StatCards

- **Path:** `src/app/dashboard/components/StatCards.tsx`
- **Description:** 4 stat cards (total/present/on-leave/absent) with stagger fade-up animation (page-specific)
- **Source Code:** [src/app/dashboard/components/StatCards.tsx#L1-L150](../../../../src/app/dashboard/components/StatCards.tsx#L1-L150)

### EmployeeTable

- **Path:** `src/app/dashboard/components/EmployeeTable.tsx`
- **Description:** Shadcn Table with search/filter, status badges, and animated rows (page-specific)
- **Source Code:** [src/app/dashboard/components/EmployeeTable.tsx#L1-L150](../../../../src/app/dashboard/components/EmployeeTable.tsx#L1-L150)

### AttendanceChart

- **Path:** `src/app/dashboard/components/AttendanceChart.tsx`
- **Description:** 7-day CSS bar chart with animated bars (page-specific)
- **Source Code:** [src/app/dashboard/components/AttendanceChart.tsx#L1-L150](../../../../src/app/dashboard/components/AttendanceChart.tsx#L1-L150)

### DepartmentBreakdown

- **Path:** `src/app/dashboard/components/DepartmentBreakdown.tsx`
- **Description:** Horizontal bar chart per department with color coding (page-specific)
- **Source Code:** [src/app/dashboard/components/DepartmentBreakdown.tsx#L1-L150](../../../../src/app/dashboard/components/DepartmentBreakdown.tsx#L1-L150)

### RecentActivity

- **Path:** `src/app/dashboard/components/RecentActivity.tsx`
- **Description:** Activity feed with unread indicators and relative timestamps (page-specific)
- **Source Code:** [src/app/dashboard/components/RecentActivity.tsx#L1-L150](../../../../src/app/dashboard/components/RecentActivity.tsx#L1-L150)

### CardSkeleton / TableSkeleton

- **Path:** `src/app/dashboard/components/Skeleton.tsx`
- **Description:** Animated skeleton placeholders for cards and table (page-specific)
- **Source Code:** [src/app/dashboard/components/Skeleton.tsx#L1-L150](../../../../src/app/dashboard/components/Skeleton.tsx#L1-L150)

### Button

- **Path:** `src/components/ui/button.tsx`
- **Description:** shadcn Button with variant/size props via class-variance-authority (default/outline/ghost/etc.)
- **Source Code:** [src/components/ui/button.tsx#L1-L150](../../../../src/components/ui/button.tsx#L1-L150)

### Input

- **Path:** `src/components/ui/input.tsx`
- **Description:** Styled input field with focus ring, disabled state, invalid state
- **Source Code:** [src/components/ui/input.tsx#L1-L150](../../../../src/components/ui/input.tsx#L1-L150)

### Label

- **Path:** `src/components/ui/label.tsx`
- **Description:** Accessible form label with peer-disabled support
- **Source Code:** [src/components/ui/label.tsx#L1-L150](../../../../src/components/ui/label.tsx#L1-L150)

### Card

- **Path:** `src/components/ui/card.tsx`
- **Description:** Container with CardHeader/CardTitle/CardDescription/CardContent/CardFooter sub-components
- **Source Code:** [src/components/ui/card.tsx#L1-L150](../../../../src/components/ui/card.tsx#L1-L150)

### Badge

- **Path:** `src/components/ui/badge.tsx`
- **Description:** Status indicator badge with variant support (default/secondary/destructive)
- **Source Code:** [src/components/ui/badge.tsx#L1-L150](../../../../src/components/ui/badge.tsx#L1-L150)

### Table

- **Path:** `src/components/ui/table.tsx`
- **Description:** Shadcn table with TableHeader/TableBody/TableRow/TableCell/TableHead sub-components
- **Source Code:** [src/components/ui/table.tsx#L1-L150](../../../../src/components/ui/table.tsx#L1-L150)

### Avatar

- **Path:** `src/components/ui/avatar.tsx`
- **Description:** User avatar with fallback initials and size variants
- **Source Code:** [src/components/ui/avatar.tsx#L1-L150](../../../../src/components/ui/avatar.tsx#L1-L150)

### Dropdown Menu

- **Path:** `src/components/ui/dropdown-menu.tsx`
- **Description:** Dropdown menu with items, separators, and sub-triggers
- **Source Code:** [src/components/ui/dropdown-menu.tsx#L1-L150](../../../../src/components/ui/dropdown-menu.tsx#L1-L150)

### Separator

- **Path:** `src/components/ui/separator.tsx`
- **Description:** Horizontal/vertical divider for visual grouping
- **Source Code:** [src/components/ui/separator.tsx#L1-L150](../../../../src/components/ui/separator.tsx#L1-L150)

### Tooltip

- **Path:** `src/components/ui/tooltip.tsx`
- **Description:** Hover tooltip with position variants
- **Source Code:** [src/components/ui/tooltip.tsx#L1-L150](../../../../src/components/ui/tooltip.tsx#L1-L150)

### Select

- **Path:** `src/components/ui/select.tsx`
- **Description:** Select dropdown with trigger, content, and item sub-components
- **Source Code:** [src/components/ui/select.tsx#L1-L150](../../../../src/components/ui/select.tsx#L1-L150)

### Sheet

- **Path:** `src/components/ui/sheet.tsx`
- **Description:** Slide-in panel from any side
- **Source Code:** [src/components/ui/sheet.tsx#L1-L150](../../../../src/components/ui/sheet.tsx#L1-L150)

### Sidebar

- **Path:** `src/components/ui/sidebar.tsx`
- **Description:** Collapsible sidebar with Provider, Trigger, Menu, and group items
- **Source Code:** [src/components/ui/sidebar.tsx#L1-L150](../../../../src/components/ui/sidebar.tsx#L1-L150)

### Skeleton

- **Path:** `src/components/ui/skeleton.tsx`
- **Description:** Base skeleton primitive for loading states
- **Source Code:** [src/components/ui/skeleton.tsx#L1-L150](../../../../src/components/ui/skeleton.tsx#L1-L150)

### DsrEntryBlock

- **Path:** `src/components/ui/DsrEntryBlock.tsx`
- **Description:** Timeline-style DSR entry block with project chip, time range pill, description, and connecting vertical line
- **Used by:** Sent DSR detail panel, Received DSR detail panel

### DsrStatusBadge

- **Path:** `src/components/ui/DsrStatusBadge.tsx`
- **Description:** Color-coded status badge — amber for Pending, emerald for Approved, destructive for Rejected
- **Used by:** Add DSR page, Sent DSR list/detail, Received DSR list/detail

### DsrPagination

- **Path:** `src/components/ui/DsrPagination.tsx`
- **Description:** Numbered pagination with prev/next arrows and ellipsis for large page counts
- **Used by:** Sent DSR list, Received DSR list

## Rules

- If a component is used in 2+ routes → place here
- If a component grows beyond 200 lines → split into sub-components
- If a component becomes session-specific → move to `src/app/<route>/components/`
- If a component becomes large & cross-session → move to `src/components/global/`
