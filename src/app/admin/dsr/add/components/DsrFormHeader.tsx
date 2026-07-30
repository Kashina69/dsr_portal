"use client";

import { CalendarDays, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle } from "@/components/ui/card";

interface DsrFormHeaderProps {
    date: string;
    entryCount: number;
}

export function DsrFormHeader({ date, entryCount }: DsrFormHeaderProps) {
    const formatted = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <CardHeader className="flex flex-row items-center justify-between pb-0">
            <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <CalendarDays className="size-4 text-primary" />
                </div>
                <div>
                    <CardTitle className="text-lg">Daily Status Report</CardTitle>
                    <p className="text-sm text-muted-foreground">{formatted}</p>
                </div>
            </div>
            <Badge variant="secondary" className="gap-1.5">
                <Plus className="size-3" />
                {entryCount} {entryCount === 1 ? "Entry" : "Entries"}
            </Badge>
        </CardHeader>
    );
}
