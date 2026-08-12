"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { FilterDropdown } from "./FilterDropdown";

export interface FilterField {
    id: string;
    label: string;
    placeholder: string;
    options: { value: string; label: string }[];
}

interface FilterToolbarProps {
    fields: FilterField[];
    initialFilters?: Record<string, string>;
    resultLabel?: string;
    onApply: (filters: Record<string, string>) => void;
}

export function FilterToolbar({
    fields,
    initialFilters,
    resultLabel = "results",
    onApply,
}: FilterToolbarProps) {
    const initial = Object.fromEntries(fields.map((f) => [f.id, "all"]));
    const defaults = { ...initial, ...initialFilters };

    const [draft, setDraft] = useState<Record<string, string>>(defaults);
    const [applied, setApplied] = useState<Record<string, string>>(defaults);

    const set = (id: string, value: string) => setDraft((current) => ({ ...current, [id]: value }));

    const apply = () => {
        setApplied(draft);
        onApply(draft);
    };

    const reset = () => {
        setDraft(initial);
        setApplied(initial);
        onApply(initial);
    };

    const activeCount = Object.values(applied).filter((v) => v !== "all").length;

    return (
        <div className="border-b p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                {fields.map((field) => (
                    <FilterDropdown
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        value={draft[field.id]}
                        placeholder={field.placeholder}
                        options={field.options}
                        onChange={(value) => set(field.id, value)}
                    />
                ))}
                <div className="flex items-end gap-2">
                    <Button size="sm" className="flex-1" onClick={apply}>
                        Apply filters
                    </Button>
                    <Button size="sm" variant="ghost" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground tabular-nums">
                {activeCount > 0
                    ? `${activeCount} active filter${activeCount > 1 ? "s" : ""}`
                    : `Showing all ${resultLabel}`}
            </p>
        </div>
    );
}
