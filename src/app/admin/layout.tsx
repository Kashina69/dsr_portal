"use client";

import { Sidebar as AppSidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/theme-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background overflow-hidden">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={200} minSize={200} maxSize={300}>
                    <AppSidebar />
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={85}>
                    <main className="flex flex-col h-full overflow-y-auto">
                        {/* Top header from Shadcn layout */}
                        <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-4 border-b bg-background px-4">
                            <div className="flex-1" />
                            <div className="flex items-center gap-4 relative">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Date : 12-08-2026
                                </span>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="text-xs">PR</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-semibold text-foreground">
                                        Prince Rawat
                                    </span>
                                </div>
                                <ThemeToggle />
                            </div>
                        </header>

                        <div className="p-6">{children}</div>
                    </main>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
