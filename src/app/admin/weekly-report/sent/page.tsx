"use client";

import { useState } from "react";

import type { WeeklyReport } from "../weekly-report.types";
import { SentReportDetail } from "./components/SentReportDetail";
import { SentReportList } from "./components/SentReportList";

export default function SentReportPage() {
    const [selected, setSelected] = useState<WeeklyReport | null>(null);

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Sent Reports</h1>
                <p className="text-sm text-muted-foreground">
                    View and track your submitted weekly reports.
                </p>
            </div>
            <div className="flex h-[calc(100vh-14rem)] gap-4">
                <div className="w-80 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <SentReportList selectedId={selected?.id ?? null} onSelect={setSelected} />
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border bg-card">
                    <SentReportDetail report={selected} />
                </div>
            </div>
        </div>
    );
}
