"use client";

import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { mockReceivedReports } from "../weekly-report.data";
import type { ReceivedWeeklyReport, ReportSubmitter } from "../weekly-report.types";
import { ReceivedReportDetail } from "./components/ReceivedReportDetail";
import { ReceivedReportList } from "./components/ReceivedReportList";
import type { SubmitterInfo } from "./components/ReceivedSubmitterList";
import { ReceivedSubmitterList } from "./components/ReceivedSubmitterList";

const ITEMS_PER_PAGE = 5;

interface StatusStats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
}

const statItems = [
    { key: "total" as const, label: "Total", color: "bg-indigo-500/10 text-indigo-600" },
    {
        key: "pending" as const,
        label: "Pending",
        icon: Clock,
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        key: "approved" as const,
        label: "Approved",
        icon: CheckCircle2,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        key: "rejected" as const,
        label: "Rejected",
        icon: XCircle,
        color: "bg-destructive/10 text-destructive",
    },
];

function StatusBar({ stats }: { stats: StatusStats }) {
    return (
        <div className="grid grid-cols-4 gap-3">
            {statItems.map(({ key, label, icon: Icon, color }) => (
                <div
                    key={key}
                    className="motion-safe:animate-fade-up flex items-center gap-3 rounded-xl border bg-card p-3"
                >
                    <div
                        className={cn("flex size-9 items-center justify-center rounded-lg", color)}
                    >
                        {Icon ? (
                            <Icon className="size-4" />
                        ) : (
                            <span className="text-sm font-bold">{stats[key]}</span>
                        )}
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{stats[key]}</p>
                        <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

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
