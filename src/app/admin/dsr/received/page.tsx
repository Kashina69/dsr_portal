"use client";

import { useMemo, useState } from "react";

import { AppPagination } from "@/components/global/AppPagination";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

import { mockReceivedDsrs } from "../dsr.data";
import type { DsrSubmitter, ReceivedDsr } from "../dsr.types";
import { ReceivedDsrDetail } from "./components/ReceivedDsrDetail";
import { ReceivedDsrList } from "./components/ReceivedDsrList";
import { ReceivedDsrStatusBar } from "./components/ReceivedDsrStatusBar";

const ITEMS_PER_PAGE = 5;

export default function ReceivedDsrPage() {
    const [selectedSubmitter, setSelectedSubmitter] = useState<DsrSubmitter | null>(null);
    const [selectedDsr, setSelectedDsr] = useState<ReceivedDsr | null>(null);
    const [page, setPage] = useState(1);

    const submitters = useMemo(() => {
        const map = new Map<
            string,
            { submitter: DsrSubmitter; pendingCount: number; totalCount: number }
        >();
        for (const dsr of mockReceivedDsrs) {
            const existing = map.get(dsr.submittedBy.id);
            if (existing) {
                existing.totalCount++;
                if (dsr.status === "Pending") existing.pendingCount++;
            } else {
                map.set(dsr.submittedBy.id, {
                    submitter: dsr.submittedBy,
                    pendingCount: dsr.status === "Pending" ? 1 : 0,
                    totalCount: 1,
                });
            }
        }
        return Array.from(map.values());
    }, []);

    const submitterDsrs = useMemo(() => {
        if (!selectedSubmitter) return [];
        return mockReceivedDsrs.filter((d) => d.submittedBy.id === selectedSubmitter.id);
    }, [selectedSubmitter]);

    const totalPages = Math.max(1, Math.ceil(submitterDsrs.length / ITEMS_PER_PAGE));
    const paged = submitterDsrs.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const stats = useMemo(() => {
        const all = selectedSubmitter ? submitterDsrs : mockReceivedDsrs;
        return {
            total: all.length,
            pending: all.filter((d) => d.status === "Pending").length,
            approved: all.filter((d) => d.status === "Approved").length,
            rejected: all.filter((d) => d.status === "Rejected").length,
        };
    }, [selectedSubmitter, submitterDsrs]);

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Received DSR</h1>
                <p className="text-sm text-muted-foreground">
                    Review daily status reports submitted by your team.
                </p>
            </div>
            <ReceivedDsrStatusBar stats={stats} />
            <div className="flex h-[calc(100vh-22rem)] gap-4">
                <div className="w-64 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <ReceivedDsrList
                        submitters={submitters}
                        selectedId={selectedSubmitter?.id ?? null}
                        onSelect={(s) => {
                            setSelectedSubmitter(s);
                            setSelectedDsr(null);
                            setPage(1);
                        }}
                    />
                </div>
                <div className="w-80 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <div className="flex h-full flex-col">
                        <div className="border-b px-4 py-3">
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {selectedSubmitter ? `${selectedSubmitter.name}'s DSRs` : "DSRs"}
                            </p>
                        </div>
                        <div className="flex-1 space-y-2 overflow-auto p-4">
                            {!selectedSubmitter ? (
                                <div className="flex h-full items-center justify-center">
                                    <p className="text-sm text-muted-foreground">
                                        Select a submitter
                                    </p>
                                </div>
                            ) : paged.length === 0 ? (
                                <div className="flex h-full items-center justify-center">
                                    <p className="text-sm text-muted-foreground">No DSRs found</p>
                                </div>
                            ) : (
                                paged.map((dsr) => {
                                    const isSelected = dsr.id === selectedDsr?.id;
                                    const dateStr = new Date(
                                        dsr.date + "T00:00:00",
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    });
                                    return (
                                        <button
                                            key={dsr.id}
                                            onClick={() => setSelectedDsr(dsr)}
                                            className={cn(
                                                "w-full rounded-lg border p-3 text-left transition-colors",
                                                isSelected
                                                    ? "border-primary bg-primary/5"
                                                    : "border-transparent bg-muted/50 hover:bg-muted",
                                            )}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">
                                                    {dateStr}
                                                </span>
                                                <StatusBadge status={dsr.status} />
                                            </div>
                                            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                                {dsr.entries[0]?.description || "No entries"}
                                            </p>
                                        </button>
                                    );
                                })
                            )}
                        </div>
                        <div className="border-t p-3">
                            <AppPagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={setPage}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border bg-card">
                    <ReceivedDsrDetail dsr={selectedDsr} />
                </div>
            </div>
        </div>
    );
}
