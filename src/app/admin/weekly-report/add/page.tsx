"use client";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useAddReport } from "./add-report.hook";
import { ReportEntryRow } from "./components/ReportEntryRow";
import { ReportSendPanel } from "./components/ReportSendPanel";

export default function AddReportPage() {
    const {
        formState,
        weekLabel,
        savedCount,
        canSubmit,
        navigateWeek,
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo,
        toggleCcTo,
        submitReport,
    } = useAddReport();

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Add Report</h1>
                <p className="text-sm text-muted-foreground">
                    Submit your weekly progress report for review.
                </p>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-0">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon-sm" onClick={() => navigateWeek("prev")}>
                            <ChevronLeft className="size-4" />
                        </Button>
                        <div className="text-center">
                            <CardTitle className="text-lg">{weekLabel}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon-sm" onClick={() => navigateWeek("next")}>
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {savedCount} {savedCount === 1 ? "entry" : "entries"}
                    </span>
                </CardHeader>
                <CardContent className="mt-4 space-y-3">
                    {formState.entries.map((entry) => (
                        <ReportEntryRow
                            key={entry.id}
                            entry={entry}
                            onUpdate={(field, value) => updateEntry(entry.id, field, value)}
                            onSave={() => saveEntry(entry.id)}
                            onEdit={() => editEntry(entry.id)}
                            onRemove={() => removeEntry(entry.id)}
                        />
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-1.5"
                        onClick={() => {
                            const last = formState.entries.at(-1);
                            if (last && !last.saved) return;
                            saveEntry(formState.entries[formState.entries.length - 1]?.id ?? "");
                        }}
                    >
                        <Plus className="size-3.5" />
                        Add Entry
                    </Button>
                </CardContent>
                <ReportSendPanel
                    sendTo={formState.sendTo}
                    ccTo={formState.ccTo}
                    onToggleSendTo={toggleSendTo}
                    onToggleCcTo={toggleCcTo}
                    onSubmit={submitReport}
                    disabled={!canSubmit}
                />
            </Card>
        </div>
    );
}
