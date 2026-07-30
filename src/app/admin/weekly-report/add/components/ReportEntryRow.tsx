"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { reportProjects } from "../../weekly-report.data";
import type { ReportEntryDraft } from "../../weekly-report.types";

interface ReportEntryRowProps {
    entry: ReportEntryDraft;
    onUpdate: (field: keyof ReportEntryDraft, value: string) => void;
    onSave: () => void;
    onEdit: () => void;
    onRemove: () => void;
}

export function ReportEntryRow({ entry, onUpdate, onSave, onEdit, onRemove }: ReportEntryRowProps) {
    if (entry.saved) {
        return (
            <div className="group relative flex items-center gap-3 border-l-2 border-emerald-500/50 py-3 pl-4 pr-2">
                <div className="min-w-0 flex-1">
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                        {entry.projectName || "N-A"}
                    </span>
                    <p className="mt-1 truncate text-sm text-muted-foreground">
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
            <Select
                value={entry.projectName}
                onValueChange={(v) => {
                    if (v !== null) onUpdate("projectName", v);
                }}
            >
                <SelectTrigger className="mb-2 w-full">
                    <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                    {reportProjects.map((p) => (
                        <SelectItem key={p} value={p}>
                            {p}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input
                value={entry.description}
                onChange={(e) => onUpdate("description", e.target.value)}
                placeholder="What did you work on this week?"
                className="mb-2"
            />
            <div className="flex justify-end">
                <Button size="sm" onClick={onSave}>
                    Save
                </Button>
            </div>
        </div>
    );
}
