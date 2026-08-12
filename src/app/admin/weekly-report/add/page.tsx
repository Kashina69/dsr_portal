"use client";

import { ChevronLeft, ChevronRight, Plus, Send } from "lucide-react";

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
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Add Report</h1>
                <p className="text-sm text-muted-foreground">
                    Submit your weekly progress report for review.
                </p>
            </div>

            <div className="flex flex-col h-[calc(100vh-12rem)] gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                    <div className="lg:col-span-2 h-full min-h-0">
                        <Card className="h-full flex flex-col min-h-0">
                            <CardHeader className="flex flex-row items-center justify-between pb-0">
                                <div className="flex items-center gap-3">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={() => navigateWeek("prev")}
                                    >
                                        <ChevronLeft className="size-4" />
                                    </Button>
                                    <div className="text-center">
                                        <CardTitle className="text-lg">{weekLabel}</CardTitle>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={() => navigateWeek("next")}
                                    >
                                        <ChevronRight className="size-4" />
                                    </Button>
                                </div>
                                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                                    {savedCount} {savedCount === 1 ? "entry" : "entries"}
                                </span>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar">
                                {formState.entries.slice(0, -1).map((entry) => (
                                    <ReportEntryRow
                                        key={entry.id}
                                        entry={entry}
                                        onUpdate={(field, value) =>
                                            updateEntry(entry.id, field, value)
                                        }
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
                                        saveEntry(
                                            formState.entries[formState.entries.length - 1]?.id ??
                                                "",
                                        );
                                    }}
                                >
                                    <Plus className="size-3.5" />
                                    Add Entry
                                </Button>
                            </CardContent>
                            <div className="p-6 pt-2 shrink-0 space-y-3">
                                <ReportEntryRow
                                    key={formState.entries[formState.entries.length - 1].id}
                                    entry={formState.entries[formState.entries.length - 1]}
                                    onUpdate={(field, value) =>
                                        updateEntry(
                                            formState.entries[formState.entries.length - 1].id,
                                            field,
                                            value,
                                        )
                                    }
                                    onSave={() =>
                                        saveEntry(
                                            formState.entries[formState.entries.length - 1].id,
                                        )
                                    }
                                    onEdit={() =>
                                        editEntry(
                                            formState.entries[formState.entries.length - 1].id,
                                        )
                                    }
                                    onRemove={() =>
                                        removeEntry(
                                            formState.entries[formState.entries.length - 1].id,
                                        )
                                    }
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full gap-1.5"
                                    onClick={() => {
                                        const last = formState.entries.at(-1);
                                        if (last && !last.saved) return;
                                        saveEntry(
                                            formState.entries[formState.entries.length - 1]?.id ??
                                                "",
                                        );
                                    }}
                                >
                                    <Plus className="size-3.5" />
                                    Add Entry
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className="lg:col-span-1 h-full min-h-0">
                        <Card className="h-full flex flex-col overflow-y-auto custom-scrollbar min-h-0">
                            <ReportSendPanel
                                sendTo={formState.sendTo}
                                ccTo={formState.ccTo}
                                onToggleSendTo={toggleSendTo}
                                onToggleCcTo={toggleCcTo}
                                onSubmit={submitReport}
                                disabled={!canSubmit}
                                hideSubmit={true}
                            />
                        </Card>
                    </div>
                </div>
                <div className="flex justify-end shrink-0 pt-2">
                    <Button onClick={submitReport} disabled={!canSubmit} className="gap-2 px-8">
                        <Send className="size-4" />
                        Submit Report
                    </Button>
                </div>
            </div>
        </div>
    );
}
