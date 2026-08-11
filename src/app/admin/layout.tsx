"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-provider";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { dsrSubItems, navItems, weeklyReportSubItems } from "./admin.data";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [dsrOpen, setDsrOpen] = useState(false);
    const [weeklyOpen, setWeeklyOpen] = useState(false);

    const isWeeklyActive = pathname.startsWith("/admin/weekly-report");

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>DSR Portal</SidebarGroupLabel>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton
                                        isActive={pathname === item.href}
                                        render={<a href={item.href} />}
                                    >
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setDsrOpen(!dsrOpen)}>
                                    <span>DSR</span>
                                    <ChevronDown
                                        className={cn(
                                            "ml-auto size-4 transition-transform duration-200",
                                            dsrOpen && "rotate-180",
                                        )}
                                    />
                                </SidebarMenuButton>
                                {dsrOpen && (
                                    <SidebarMenuSub>
                                        {dsrSubItems.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.label}>
                                                <SidebarMenuSubButton
                                                    isActive={pathname === subItem.href}
                                                    render={<a href={subItem.href} />}
                                                >
                                                    <span>{subItem.label}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                )}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>Reports</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setWeeklyOpen(!weeklyOpen)}>
                                    <span>Weekly Report</span>
                                    <ChevronDown
                                        className={cn(
                                            "ml-auto size-4 transition-transform duration-200",
                                            (weeklyOpen || isWeeklyActive) && "rotate-180",
                                        )}
                                    />
                                </SidebarMenuButton>
                                {(weeklyOpen || isWeeklyActive) && (
                                    <SidebarMenuSub>
                                        {weeklyReportSubItems.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.label}>
                                                <SidebarMenuSubButton
                                                    isActive={pathname === subItem.href}
                                                    render={<a href={subItem.href} />}
                                                >
                                                    <span>{subItem.label}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                )}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main className="flex-1">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
                    <SidebarTrigger />
                    <div className="flex-1" />
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                            AD
                        </div>
                        <div className="hidden text-sm md:block">
                            <p className="font-medium leading-none">Admin User</p>
                            <p className="text-xs text-muted-foreground">admin@dsr.com</p>
                        </div>
                    </div>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </SidebarProvider>
    );
}
