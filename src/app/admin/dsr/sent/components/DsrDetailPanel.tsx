"use client";

import { AlertCircle, CalendarDays, Mail } from "lucide-react";

import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatusBadge } from "@/components/ui/StatusBadge";

import { DsrEntryBlock } from "../../components/DsrEntryBlock";
import type { Dsr } from "../../dsr.types";

interface DsrDetailPanelProps {
    dsr: Dsr | null;
}

export function DsrDetailPanel({ dsr }: DsrDetailPanelProps) {
    if (!dsr) {
        return <EmptyState icon={CalendarDays} message="Select a DSR to view details" />;
    }

    const dateStr = new Date(dsr.date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex h-full flex-col overflow-auto">
            <div className="m-5 h-full">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-lg">{dateStr}</CardTitle>
                        </div>
                        <StatusBadge status={dsr.status} />
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-1">
                    {dsr.status === "Rejected" && dsr.rejectionReason && (
                        <div className="mb-4 flex gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                            <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                            <p className="text-sm text-destructive">{dsr.rejectionReason}</p>
                        </div>
                    )}
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Entries
                    </p>
                    {dsr.entries.map((entry, i) => (
                        <DsrEntryBlock
                            key={entry.id}
                            entry={entry}
                            isLast={i === dsr.entries.length - 1}
                        />
                    ))}
                </CardContent>
            </div>
            {dsr.sendTo.length > 0 && (
                <CardFooter className="flex flex-col items-start gap-2 border-t pt-4 p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-4" />
                        <span className="font-medium text-foreground">Send To:</span>
                        {dsr.sendTo.join(", ")}
                    </div>
                    {dsr.ccTo.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="ml-6 font-medium text-foreground">CC:</span>
                            {dsr.ccTo.join(", ")}
                        </div>
                    )}
                </CardFooter>
            )}
        </div>
    );
}
