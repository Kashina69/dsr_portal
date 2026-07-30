"use client";

import { cn } from "@/lib/utils";

import type { DsrSubmitter } from "../../dsr.types";

interface SubmitterInfo {
    submitter: DsrSubmitter;
    pendingCount: number;
    totalCount: number;
}

interface ReceivedDsrListProps {
    submitters: SubmitterInfo[];
    selectedId: string | null;
    onSelect: (submitter: DsrSubmitter) => void;
}

export function ReceivedDsrList({ submitters, selectedId, onSelect }: ReceivedDsrListProps) {
    return (
        <div className="flex h-full flex-col overflow-auto">
            <div className="border-b px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Submitters
                </p>
            </div>
            <div className="flex-1 space-y-0.5 p-2">
                {submitters.map(({ submitter, pendingCount }) => {
                    const isSelected = submitter.id === selectedId;
                    return (
                        <button
                            key={submitter.id}
                            onClick={() => onSelect(submitter)}
                            className={cn(
                                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                                isSelected ? "bg-primary/10" : "hover:bg-muted",
                            )}
                        >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                                {submitter.avatar}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium">{submitter.name}</p>
                                <p className="truncate text-xs text-muted-foreground">
                                    {submitter.department}
                                </p>
                            </div>
                            {pendingCount > 0 && (
                                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-semibold text-amber-600">
                                    {pendingCount}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export { type SubmitterInfo };
