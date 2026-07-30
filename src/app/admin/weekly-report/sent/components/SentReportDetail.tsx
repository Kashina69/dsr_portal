"use client";

import { CalendarDays } from "lucide-react";

import { Card } from "@/components/ui/card";

import { WeeklyReportDetail } from "../../components/WeeklyReportDetail";
import type { WeeklyReport } from "../../weekly-report.types";

interface SentReportDetailProps {
    report: WeeklyReport | null;
}

export function SentReportDetail({ report }: SentReportDetailProps) {
    if (!report) {
        return (
            <div className="flex size-full flex-col items-center justify-center text-center">
                <CalendarDays className="mb-3 size-10 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground">Select a report to view details</p>
            </div>
        );
    }

    return (
        <Card className="flex size-full flex-col border-none shadow-none">
            <WeeklyReportDetail
                weekLabel={report.weekLabel}
                status={report.status}
                submittedAt={report.submittedAt}
                entries={report.entries}
                sendTo={report.sendTo}
                ccTo={report.ccTo}
                rejectionReason={report.rejectionReason}
            />
        </Card>
    );
}
