"use client";

import {
    CalendarDays,
    ChevronRight,
    ClipboardList,
    Database,
    FileText,
    FolderTree,
    LayoutDashboard,
    ListTodo,
    MonitorSmartphone,
    Music,
    Network,
    Plus,
    Send,
    ServerCog,
    Star,
    Ticket,
    Umbrella,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SubItem = { name: string; href: string; icon?: React.ElementType };
type NavItem = {
    name: string;
    href: string;
    icon: React.ElementType;
    expandable?: boolean;
    subItems?: SubItem[];
};

const navigation: NavItem[] = [
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

function SidebarItem({ item, pathname }: { item: NavItem; pathname: string }) {
    const isSubActive = item.subItems?.some((sub) => pathname.startsWith(sub.href)) ?? false;
    const isActive = pathname === item.href || isSubActive;
    const [isOpen, setIsOpen] = useState(isActive);

    if (item.expandable && item.subItems) {
        return (
            <div className="flex flex-col px-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "flex items-center gap-2 px-2.5 py-2 text-sm font-medium rounded-md transition-colors group relative w-full text-left",
                        isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="truncate flex-1">{item.name}</span>
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-200",
                            isOpen ? "rotate-90" : "",
                        )}
                    />
                </button>

                <div
                    className={cn(
                        "flex flex-col overflow-hidden transition-all duration-200 mt-1 space-y-1",
                        isOpen ? "max-h-96" : "max-h-0",
                    )}
                >
                    {item.subItems.map((sub) => {
                        const isChildActive = pathname === sub.href;
                        return (
                            <Link
                                key={sub.name}
                                href={sub.href}
                                className={cn(
                                    "flex items-center gap-2 px-2.5 py-2 pl-9 text-sm font-medium rounded-md transition-colors group relative",
                                    isChildActive
                                        ? "bg-accent/50 text-accent-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                )}
                            >
                                {sub.icon && <sub.icon className="h-3.5 w-3.5 shrink-0" />}
                                <span className="truncate flex-1">{sub.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="px-2">
            <Link
                href={item.href}
                className={cn(
                    "flex items-center gap-2 px-2.5 py-2 text-sm font-medium rounded-md transition-colors group relative",
                    isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
            >
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="truncate flex-1">{item.name}</span>
            </Link>
        </div>
    );
}

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-full shrink-0 bg-background border-r border-border flex flex-col h-full z-10">
            <div className="pt-8 pb-4 px-4 bg-background">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-lg">
                        T
                    </div>
                    <span className="font-bold text-sm tracking-tight text-foreground">
                        TalentOne
                    </span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto space-y-1 py-4 custom-scrollbar bg-background">
                {navigation.map((item) => (
                    <SidebarItem key={item.name} item={item} pathname={pathname} />
                ))}
            </nav>
        </aside>
    );
}
