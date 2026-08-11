import type { NavItem } from "./admin.types";

export const navItems: NavItem[] = [{ label: "Dashboard", href: "/admin/dashboard" }];

export const dsrSubItems: NavItem[] = [
    { label: "Add DSR", href: "/admin/dsr/add" },
    { label: "Sent DSR", href: "/admin/dsr/sent" },
    { label: "Received DSR", href: "/admin/dsr/received" },
];

export const weeklyReportSubItems: NavItem[] = [
    { label: "Add Report", href: "/admin/weekly-report/add" },
    { label: "Sent Report", href: "/admin/weekly-report/sent" },
    { label: "Received Report", href: "/admin/weekly-report/received" },
];
