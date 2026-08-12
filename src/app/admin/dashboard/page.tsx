import { FileText, Home, PieChart, ThumbsUp } from "lucide-react";

import { AnniversaryCard } from "@/components/dashboard/anniversary-card";
import { BirthdayCard } from "@/components/dashboard/birthday-card";
import { QuoteCard } from "@/components/dashboard/quote-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <>
            <div className="flex-1 max-w-7xl w-full mx-auto z-10 relative">
                {/* Breadcrumbs */}
                <div className="bg-card border rounded-full px-3 py-1.5 inline-flex items-center gap-1.5 shadow-sm mb-5">
                    <Home className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-slate-300 mx-0.5">/</span>
                    <span className="text-xs font-medium text-slate-500">Dashboard</span>
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <StatCard
                        title="TOTAL ASSIGNED PROJECTS"
                        value="0"
                        icon={<ThumbsUp className="h-5 w-5" />}
                        iconBgColor="bg-[#ff4d79]"
                    />

                    <StatCard
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-[#ff9933]"
                        customContent={
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL LEAVE ASSIGNED:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">11</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL APPROVED LEAVE:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">5.25</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL FLOATING LEAVE:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">1</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        EXTRA LEAVE:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">0</span>
                                </div>
                            </div>
                        }
                    />

                    <StatCard
                        title="TOTAL DSR RECEIVED"
                        value="0"
                        icon={<FileText className="h-5 w-5" />}
                        iconBgColor="bg-primary"
                    />
                </div>

                {/* Quote Card */}
                <QuoteCard />

                {/* Holidays Card */}
                <Card className="bg-card rounded-lg p-5 shadow-sm border mt-4 h-32 flex flex-col">
                    <h3 className="font-bold text-foreground text-sm">Current Month Holidays</h3>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">No Holidays in this month.</p>
                    </div>
                </Card>

                {/* Work Anniversary Card */}
                <AnniversaryCard />

                {/* Birthday Card */}
                <BirthdayCard />
            </div>
        </>
    );
}
