"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { projects } from "../../dsr.data";
import type { DsrEntryDraft } from "../../dsr.types";

interface DsrEntryRowProps {
    entry: DsrEntryDraft;
    onUpdate: (field: keyof DsrEntryDraft, value: string) => void;
    onSave: () => void;
    onEdit: () => void;
    onRemove: () => void;
}

export function DsrEntryRow({ entry, onUpdate, onSave, onEdit, onRemove }: DsrEntryRowProps) {
    if (entry.saved) {
        return (
            <div className="group relative flex items-center gap-3 border-l-2 border-emerald-500/50 py-3 pl-4 pr-2">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                            {entry.projectName || "N-A"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {entry.startTime} – {entry.endTime}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {entry.timeEstimate || ""}
                        </span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        {entry.description}
                    </p>
                </div>
                <div className="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="ghost" size="icon-sm" onClick={onEdit}>
                        <Pencil className="size-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon-sm" onClick={onRemove}>
                        <Trash2 className="size-3.5 text-destructive" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg border border-primary/20 bg-background p-4 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-[1fr,2fr,auto,auto,auto]">
                <select
                    value={entry.projectName}
                    onChange={(e) => onUpdate("projectName", e.target.value)}
                    className={cn(
                        "h-9 rounded-md border border-input bg-background px-3 text-sm",
                        "ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    )}
                >
                    <option value="">Select project</option>
                    {projects.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>
                <Input
                    value={entry.description}
                    onChange={(e) => onUpdate("description", e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") onSave();
                    }}
                    placeholder="What did you work on?"
                    className="h-9"
                />
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <Input
                            type="time"
                            value={entry.startTime}
                            onChange={(e) => onUpdate("startTime", e.target.value)}
                            className="h-9 w-28"
                        />
                        <div className="flex items-center">-</div>
                        <Input
                            type="time"
                            value={entry.endTime}
                            onChange={(e) => onUpdate("endTime", e.target.value)}
                            className="h-9 w-28"
                        />
                    </div>

                    <Button onClick={onSave}>Save</Button>
                </div>
            </div>
        </div>
    );
}
