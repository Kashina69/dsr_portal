"use client";

import { Sidebar as AppSidebar } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/theme-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

                                {/* Time tracking floating card */}
                                <div className="absolute top-10 right-10 mt-2 z-50">
                                    <Card className="bg-background rounded-lg p-3 w-[180px] shadow-md flex flex-col items-center gap-2">
                                        <div className="text-center w-full">
                                            <h3 className="font-bold text-foreground text-sm">
                                                Time in at 9:32 am
                                            </h3>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                Timing: 04:07:06
                                            </p>
                                        </div>
                                        <Button className="w-full text-xs h-7 rounded-md font-medium">
                                            Time Out
                                        </Button>
                                    </Card>
                                </div>
                            </div>
                        </header>

                        <div className="p-6">{children}</div>
                    </main>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
