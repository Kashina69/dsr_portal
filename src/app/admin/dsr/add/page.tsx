"use client";

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
        <div className="mx-auto max-w-4xl space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Add DSR</h1>
                <p className="text-sm text-muted-foreground">
                    Log your daily activities and submit for approval.
                </p>
            </div>

            <Card>
                <DsrFormHeader
                    date={formState.date}
                    entryCount={formState.entries.filter((e) => e.saved).length}
                />
                <CardContent className="mt-4 space-y-3">
                    {formState.entries.map((entry) => (
                        <DsrEntryRow
                            key={entry.id}
                            entry={entry}
                            onUpdate={(field, value) => updateEntry(entry.id, field, value)}
                            onSave={() => saveEntry(entry.id)}
                            onEdit={() => editEntry(entry.id)}
                            onRemove={() => removeEntry(entry.id)}
                        />
                    ))}
                </CardContent>
                <DsrSendPanel
                    sendTo={formState.sendTo}
                    ccTo={formState.ccTo}
                    attachments={formState.attachments}
                    onToggleSendTo={toggleSendTo}
                    onToggleCcTo={toggleCcTo}
                    onAddAttachment={addAttachment}
                    onRemoveAttachment={removeAttachment}
                    onSubmit={submitDsr}
                />
            </Card>
        </div>
    );
}
