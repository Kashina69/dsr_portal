import { FileText, Home, PieChart, ThumbsUp } from "lucide-react";

import { AnniversaryCard } from "@/app/admin/dashboard/components/anniversary-card";
import { BirthdayCard } from "@/app/admin/dashboard/components/birthday-card";
import { QuoteCard } from "@/app/admin/dashboard/components/quote-card";
import { StatCard } from "@/components/global/stat-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <>
            <div className="flex-1 max-w-7xl w-full mx-auto z-10 relative">
                {/* Breadcrumbs */}
                <div className="flex justify-between items-center mb-3">
                    <div className="bg-card border rounded-full px-3 py-1.5 inline-flex items-center gap-1.5 shadow-sm mb-5 h-min">
                        <Home className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-slate-300 mx-0.5">/</span>
                        <span className="text-xs font-medium text-slate-500">Dashboard</span>
                    </div>
                    {/* Time tracking floating card */}
                    <div className="">
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
