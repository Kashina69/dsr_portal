"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useAddDsr } from "./add-dsr.hook";
import { DsrEntryRow } from "./components/DsrEntryRow";
import { DsrFormHeader } from "./components/DsrFormHeader";
import { DsrSendPanel } from "./components/DsrSendPanel";

export default function AddDsrPage() {
    const {
        formState,
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo,
        toggleCcTo,
        addAttachment,
        removeAttachment,
        submitDsr,
    } = useAddDsr();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Add DSR</h1>
                <p className="text-sm text-muted-foreground">
                    Log your daily activities and submit for approval.
                </p>
            </div>

            <div className="flex flex-col h-[calc(100vh-12rem)] gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                    <div className="lg:col-span-2 h-full min-h-0">
                        <Card className="h-full flex flex-col min-h-0">
                            <DsrFormHeader
                                date={formState.date}
                                entryCount={formState.entries.filter((e) => e.saved).length}
                            />
                            <CardContent className="flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar">
                                {formState.entries.slice(0, -1).map((entry) => (
                                    <DsrEntryRow
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
                            </CardContent>
                            <div className="p-6 pt-2 shrink-0">
                                <DsrEntryRow
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
                            </div>
                        </Card>
                    </div>
                    <div className="lg:col-span-1 h-full min-h-0">
                        <Card className="h-full flex flex-col overflow-y-auto custom-scrollbar min-h-0">
                            <DsrSendPanel
                                sendTo={formState.sendTo}
                                ccTo={formState.ccTo}
                                attachments={formState.attachments}
                                onToggleSendTo={toggleSendTo}
                                onToggleCcTo={toggleCcTo}
                                onAddAttachment={addAttachment}
                                onRemoveAttachment={removeAttachment}
                                onSubmit={submitDsr}
                                hideSubmit={true}
                            />
                        </Card>
                    </div>
                </div>

                <div className="flex justify-end shrink-0 pt-2">
                    <Button onClick={submitDsr} className="gap-2 px-8">
                        <Send className="size-4" />
                        Submit DSR
                    </Button>
                </div>
            </div>
        </div>
    );
}
