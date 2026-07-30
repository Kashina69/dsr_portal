import type { Metadata } from "next";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { navItems } from "./dashboard.data";

export const metadata: Metadata = {
    title: "DSR Listing — DSR Portal",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
                                        isActive={item.active}
                                        render={<a href={item.href} />}
                                    >
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main className="flex-1">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
                    <SidebarTrigger />
                    <p className="text-sm font-medium">DSR Portal</p>
                    <div className="flex-1" />
                    <div className="flex items-center gap-3">
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
