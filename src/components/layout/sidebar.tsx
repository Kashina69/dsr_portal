"use client";

import {
    CalendarDays,
    ChevronRight,
    ClipboardList,
    FileText,
    FolderTree,
    LayoutDashboard,
    ListTodo,
    MonitorSmartphone,
    Music,
    Network,
    ServerCog,
    Star,
    Ticket,
    Umbrella,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Attendance Report", href: "#", icon: ClipboardList },
    { name: "DSR", href: "#", icon: FileText, expandable: true },
    { name: "Weekly Report", href: "#", icon: CalendarDays, expandable: true },
    { name: "Manage Leaves", href: "#", icon: Umbrella, expandable: true },
    { name: "Harmony Tickets", href: "#", icon: Ticket },
    { name: "IT Tickets", href: "#", icon: MonitorSmartphone },
    { name: "Devops Tickets", href: "#", icon: ServerCog },
    { name: "Rapper", href: "#", icon: Music },
    { name: "Tasks Mangement", href: "#", icon: ListTodo },
    { name: "DMS", href: "#", icon: FolderTree },
    { name: "IPM", href: "#", icon: Network },
    { name: "Cheer Points", href: "#", icon: Star },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-[155px] shrink-0 bg-white border-r border-[#0f2142] flex flex-col h-full z-10">
            <div className="pt-8 pb-4 px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#00e1ff] text-white font-bold text-lg">
                        T
                    </div>
                    <span className="font-bold text-sm tracking-tight text-[#0f2142]">
                        TalentOne
                    </span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5 custom-scrollbar">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-2 px-2.5 py-2 text-[11px] rounded-md transition-colors group relative",
                                isActive
                                    ? "bg-slate-100 text-[#0f2142] font-medium"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-[#0f2142]",
                            )}
                        >
                            <item.icon className="h-3.5 w-3.5 text-[#00c8ff] shrink-0" />
                            <span className="truncate flex-1 leading-tight">{item.name}</span>
                            {item.expandable && (
                                <ChevronRight className="h-3 w-3 text-[#00c8ff] shrink-0" />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
