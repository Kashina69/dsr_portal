"use client";

import { DsrPagination } from "@/components/ui/DsrPagination";
import { DsrStatusBadge } from "@/components/ui/DsrStatusBadge";
import { cn } from "@/lib/utils";

import type { ReceivedWeeklyReport } from "../../weekly-report.types";

interface ReceivedReportListProps {
    reports: ReceivedWeeklyReport[];
    selectedId: string | null;
    page: number;
    totalPages: number;
    onSelect: (report: ReceivedWeeklyReport) => void;
    onPageChange: (page: number) => void;
}

export function ReceivedReportList({
    reports,
    selectedId,
    page,
    totalPages,
    onSelect,
    onPageChange,
}: ReceivedReportListProps) {
    return (
        <div className="flex h-full flex-col">
            <div className="border-b px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Reports
                </p>
            </div>
            <div className="flex-1 space-y-2 overflow-auto p-4">
                {reports.length === 0 ? (
                    <div className="flex h-full items-center justify-center">
                        <p className="text-sm text-muted-foreground">No reports found</p>
                    </div>
                ) : (
                    reports.map((report) => {
                        const isSelected = report.id === selectedId;
                        return (
                            <button
                                key={report.id}
                                onClick={() => onSelect(report)}
                                className={cn(
                                    "w-full rounded-lg border p-3 text-left transition-colors",
                                    isSelected
                                        ? "border-primary bg-primary/5"
                                        : "border-transparent bg-muted/50 hover:bg-muted",
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{report.weekLabel}</span>
                                    <DsrStatusBadge status={report.status} />
                                </div>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                    {report.entries[0]?.description || "No entries"}
                                </p>
                            </button>
                        );
                    })
                )}
            </div>
            <div className="border-t p-3">
                <DsrPagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}
