import type { NavItem } from "./admin.types";

export const navItems: NavItem[] = [{ label: "Dashboard", href: "/admin/dashboard" }];

export const dsrSubItems: NavItem[] = [
    { label: "Add DSR", href: "/admin/dsr/add" },
    { label: "Sent DSR", href: "/admin/dsr/sent" },
    { label: "Received DSR", href: "/admin/dsr/received" },
];

export const placeholderItems: NavItem[] = [
    { label: "Attendance Report", href: "#" },
    { label: "Weekly Report", href: "#" },
];
