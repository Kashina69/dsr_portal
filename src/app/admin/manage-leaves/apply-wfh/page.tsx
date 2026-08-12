import { PieChart } from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";

import { LeaveRequestForm } from "../components/LeaveRequestForm";

export default function ApplyWfhPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Apply WFH Request</h1>
                    <p className="text-sm text-muted-foreground">
                        Submit a request to work from home.
                    </p>
                </div>

                <div className="w-full md:w-80">
                    <StatCard
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-[#ff9933]"
                        customContent={
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL ASSIGNED WFH:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">5</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL APPROVED WFH:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                        TOTAL AVAILABLE WFH:
                                    </span>
                                    <span className="text-xs font-bold text-foreground">5</span>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>

            <LeaveRequestForm
                title="Apply WFH Request"
                subtitle="Current Quarter ( July - September )"
                leaveTypes={["First Half", "Second Half", "Full Day"]}
            />
        </div>
    );
}
