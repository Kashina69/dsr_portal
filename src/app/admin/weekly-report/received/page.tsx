"use client";

import { useMemo, useState } from "react";

import { StatusBar, type StatusStats } from "@/components/ui/StatusBar";

import { mockReceivedReports } from "../weekly-report.data";
import type { ReceivedWeeklyReport, ReportSubmitter } from "../weekly-report.types";
import { ReceivedReportDetail } from "./components/ReceivedReportDetail";
import { ReceivedReportList } from "./components/ReceivedReportList";
import { ReceivedSubmitterList, type SubmitterInfo } from "./components/ReceivedSubmitterList";

const ITEMS_PER_PAGE = 5;

export default function ReceivedReportPage() {
    const [selectedSubmitter, setSelectedSubmitter] = useState<ReportSubmitter | null>(null);
    const [selectedReport, setSelectedReport] = useState<ReceivedWeeklyReport | null>(null);
    const [page, setPage] = useState(1);

    const submitters = useMemo(() => {
        const map = new Map<string, SubmitterInfo>();
        for (const r of mockReceivedReports) {
            const existing = map.get(r.submittedBy.id);
            if (existing) {
                if (r.status === "Pending") existing.pendingCount++;
            } else {
                map.set(r.submittedBy.id, {
                    submitter: r.submittedBy,
                    pendingCount: r.status === "Pending" ? 1 : 0,
                });
            }
        }
        return Array.from(map.values());
    }, []);

    const submitterReports = useMemo(() => {
        if (!selectedSubmitter) return [];
        return mockReceivedReports.filter((r) => r.submittedBy.id === selectedSubmitter.id);
    }, [selectedSubmitter]);

    const totalPages = Math.max(1, Math.ceil(submitterReports.length / ITEMS_PER_PAGE));
    const paged = submitterReports.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const stats = useMemo((): StatusStats => {
        const all = selectedSubmitter ? submitterReports : mockReceivedReports;
        return {
            total: all.length,
            pending: all.filter((r) => r.status === "Pending").length,
            approved: all.filter((r) => r.status === "Approved").length,
            rejected: all.filter((r) => r.status === "Rejected").length,
        };
    }, [selectedSubmitter, submitterReports]);

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Received Reports</h1>
                <p className="text-sm text-muted-foreground">
                    Review weekly reports submitted by your team.
                </p>
            </div>
            <StatusBar stats={stats} />
            <div className="flex h-[calc(100vh-22rem)] gap-4">
                <div className="w-64 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <ReceivedSubmitterList
                        submitters={submitters}
                        selectedId={selectedSubmitter?.id ?? null}
                        onSelect={(s) => {
                            setSelectedSubmitter(s);
                            setSelectedReport(null);
                            setPage(1);
                        }}
                    />
                </div>
                <div className="w-80 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <ReceivedReportList
                        reports={paged}
                        selectedId={selectedReport?.id ?? null}
                        page={page}
                        totalPages={totalPages}
                        onSelect={setSelectedReport}
                        onPageChange={setPage}
                    />
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border bg-card">
                    <ReceivedReportDetail report={selectedReport} />
                </div>
            </div>
        </div>
    );
}
