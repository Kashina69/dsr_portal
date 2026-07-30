"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    dateOptions,
    employeeOptions,
    emptyDsrFilters,
    formatDsrDate,
    projectOptions,
    statusOptions,
    ticketOptions,
} from "../dashboard.data";
import type { DsrFilters } from "../dashboard.types";

interface FilterBarProps {
    applied: DsrFilters;
    resultCount: number;
    onApply: (filters: DsrFilters) => void;
}

interface FilterFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}

function FilterField({ id, label, value, placeholder, options, onChange }: FilterFieldProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id} className="text-xs text-muted-foreground">
                {label}
            </Label>
            <Select value={value} onValueChange={(next) => onChange(next ?? "all")}>
                <SelectTrigger id={id} className="h-8 w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">{placeholder}</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export function FilterBar({ applied, resultCount, onApply }: FilterBarProps) {
    const [draft, setDraft] = useState<DsrFilters>(applied);

    const set = (patch: Partial<DsrFilters>) => setDraft((current) => ({ ...current, ...patch }));

    const reset = () => {
        setDraft(emptyDsrFilters);
        onApply(emptyDsrFilters);
    };

    return (
        <div className="border-b p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                <FilterField
                    id="filter-date"
                    label="Date"
                    value={draft.date}
                    placeholder="All dates"
                    options={dateOptions.map((d) => ({ value: d, label: formatDsrDate(d) }))}
                    onChange={(date) => set({ date })}
                />
                <FilterField
                    id="filter-employee"
                    label="Employee"
                    value={draft.employee}
                    placeholder="All employees"
                    options={employeeOptions.map((e) => ({ value: e, label: e }))}
                    onChange={(employee) => set({ employee })}
                />
                <FilterField
                    id="filter-project"
                    label="Project"
                    value={draft.project}
                    placeholder="All projects"
                    options={projectOptions.map((p) => ({ value: p, label: p }))}
                    onChange={(project) => set({ project })}
                />
                <FilterField
                    id="filter-ticket"
                    label="Ticket"
                    value={draft.ticket}
                    placeholder="All tickets"
                    options={ticketOptions.map((t) => ({ value: t, label: t }))}
                    onChange={(ticket) => set({ ticket })}
                />
                <FilterField
                    id="filter-status"
                    label="Status"
                    value={draft.status}
                    placeholder="All statuses"
                    options={statusOptions.map((s) => ({ value: s, label: s }))}
                    onChange={(status) => set({ status: status as DsrFilters["status"] })}
                />
                <div className="flex items-end gap-2">
                    <Button size="sm" className="flex-1" onClick={() => onApply(draft)}>
                        Apply filters
                    </Button>
                    <Button size="sm" variant="ghost" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground tabular-nums">
                {resultCount} {resultCount === 1 ? "report" : "reports"} match these filters
            </p>
        </div>
    );
}
