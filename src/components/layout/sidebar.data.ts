import {
    CalendarDays,
    ClipboardList,
    Database,
    FileText,
    LayoutDashboard,
    ListTodo,
    MonitorSmartphone,
    Music,
    Plus,
    Send,
    ServerCog,
    Ticket,
    Umbrella,
} from "lucide-react";

import type { NavItem } from "./sidebar.type";

export const navigation: NavItem[] = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Attendance Report", href: "/admin/attendance-report", icon: ClipboardList },
    {
        name: "DSR",
        href: "/admin/dsr",
        icon: FileText,
        expandable: true,
        subItems: [
            { name: "Add DSR", href: "/admin/dsr/add", icon: Plus },
            { name: "Sent DSR", href: "/admin/dsr/sent", icon: Send },
            { name: "Received DSR", href: "/admin/dsr/received", icon: Database },
        ],
    },
    {
        name: "Weekly Report",
        href: "/admin/weekly-report",
        icon: CalendarDays,
        expandable: true,
        subItems: [
            { name: "Add Report", href: "/admin/weekly-report/add", icon: Plus },
            { name: "Sent Report", href: "/admin/weekly-report/sent", icon: Send },
            { name: "Received Report", href: "/admin/weekly-report/received", icon: Database },
        ],
    },
    {
        name: "Manage Leaves",
        href: "/admin/manage-leaves",
        icon: Umbrella,
        expandable: true,
        subItems: [
            { name: "Apply Leave", href: "/admin/manage-leaves/apply", icon: Plus },
            { name: "Apply WFH Request", href: "/admin/manage-leaves/apply-wfh", icon: Plus },
            { name: "My Leave Request", href: "/admin/manage-leaves/my-requests", icon: ListTodo },
        ],
    },
    { name: "Harmony Tickets", href: "/admin/harmony-tickets", icon: Ticket },
    { name: "IT Tickets", href: "/admin/it-tickets", icon: MonitorSmartphone },
    { name: "Devops Tickets", href: "/admin/devops-tickets", icon: ServerCog },
    { name: "Rapper", href: "/admin/rapper", icon: Music },
    { name: "Tasks Mangement", href: "/admin/tasks-management", icon: ListTodo },
];
