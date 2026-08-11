"use client";

import { CalendarDays } from "lucide-react";

import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/EmptyState";

import { WeeklyReportDetail } from "../../components/WeeklyReportDetail";
import type { WeeklyReport } from "../../weekly-report.types";

interface SentReportDetailProps {
    report: WeeklyReport | null;
}

export function SentReportDetail({ report }: SentReportDetailProps) {
    if (!report) {
        return <EmptyState icon={CalendarDays} message="Select a report to view details" />;
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
