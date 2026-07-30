"use client";

import { FileText, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { AppPagination } from "@/components/global/AppPagination";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

import { mockSentReports } from "../../weekly-report.data";
import type { WeeklyReport, WeeklyReportStatus } from "../../weekly-report.types";

const ITEMS_PER_PAGE = 5;

interface SentReportListProps {
    selectedId: string | null;
    onSelect: (report: WeeklyReport) => void;
}

const filterTabs: { label: string; value: WeeklyReportStatus | "All" }[] = [
    { label: "All", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Approved", value: "Approved" },
    { label: "Rejected", value: "Rejected" },
];

export function SentReportList({ selectedId, onSelect }: SentReportListProps) {
    const [search, setSearch] = useState("");
    const [tab, setTab] = useState<WeeklyReportStatus | "All">("All");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        let result =
            tab === "All" ? mockSentReports : mockSentReports.filter((r) => r.status === tab);
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(
                (r) =>
                    r.weekLabel.toLowerCase().includes(q) ||
                    r.entries.some(
                        (e) =>
                            e.description.toLowerCase().includes(q) ||
                            e.projectName.toLowerCase().includes(q),
                    ),
            );
        }
        return result;
    }, [search, tab]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <div className="flex h-full flex-col">
            <div className="space-y-3 p-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                    <Input
                        placeholder="Search reports..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="pl-8"
                    />
                </div>
                <div className="flex gap-1.5">
                    {filterTabs.map((t) => (
                        <button
                            key={t.value}
                            onClick={() => {
                                setTab(t.value);
                                setPage(1);
                            }}
                            className={cn(
                                "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                                tab === t.value
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                            )}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1 space-y-2 overflow-auto px-4">
                {paged.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <FileText className="mb-3 size-8 text-muted-foreground/30" />
                        <p className="text-sm text-muted-foreground">No reports found</p>
                        <a
                            href="/admin/weekly-report/add"
                            className="mt-1 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            <Plus className="size-3" />
                            Create your first weekly report
                        </a>
                    </div>
                ) : (
                    paged.map((report) => {
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
                                    <StatusBadge status={report.status} />
                                </div>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                    {report.entries[0]?.description || "No entries"}
                                </p>
                                {report.submittedAt && (
                                    <p className="mt-1 text-xs text-muted-foreground/60">
                                        {new Date(report.submittedAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>
                                )}
                            </button>
                        );
                    })
                )}
            </div>
            <div className="border-t p-3">
                <AppPagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </div>
    );
}
