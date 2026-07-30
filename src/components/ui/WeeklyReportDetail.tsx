import { AlertCircle, Mail } from "lucide-react";

import type { WeeklyReportStatus } from "@/app/admin/weekly-report/weekly-report.types";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WeeklyReportDetailProps {
    weekLabel: string;
    status: WeeklyReportStatus;
    submittedAt?: string;
    entries: { id: string; projectName: string; description: string }[];
    sendTo: string[];
    ccTo: string[];
    rejectionReason?: string;
    submittedBy?: { name: string };
}

const statusStyles: Record<WeeklyReportStatus, string> = {
    Pending: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/10",
    Approved: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10",
    Rejected: "bg-destructive/10 text-destructive hover:bg-destructive/10",
};

export function WeeklyReportDetail({
    weekLabel,
    status,
    submittedAt,
    entries,
    sendTo,
    ccTo,
    rejectionReason,
    submittedBy,
}: WeeklyReportDetailProps) {
    return (
        <>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-lg">{weekLabel}</CardTitle>
                        {submittedBy && (
                            <p className="text-sm text-muted-foreground">
                                Submitted by {submittedBy.name}
                            </p>
                        )}
                        {submittedAt && (
                            <p className="text-xs text-muted-foreground">
                                {new Date(submittedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "2-digit",
                                })}
                            </p>
                        )}
                    </div>
                    <Badge variant="secondary" className={cn(statusStyles[status])}>
                        {status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-1">
                {status === "Rejected" && rejectionReason && (
                    <div className="mb-4 flex gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                        <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                        <p className="text-sm text-destructive">{rejectionReason}</p>
                    </div>
                )}
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Entries
                </p>
                {entries.map((entry) => (
                    <div key={entry.id} className="py-2">
                        <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                            {entry.projectName}
                        </span>
                        <p className="mt-1.5 text-sm text-muted-foreground">{entry.description}</p>
                    </div>
                ))}
            </CardContent>
            {(sendTo.length > 0 || ccTo.length > 0) && (
                <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                    {sendTo.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="size-4" />
                            <span className="font-medium text-foreground">Send To:</span>
                            {sendTo.join(", ")}
                        </div>
                    )}
                    {ccTo.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="ml-6 font-medium text-foreground">CC:</span>
                            {ccTo.join(", ")}
                        </div>
                    )}
                </CardFooter>
            )}
        </>
    );
}
