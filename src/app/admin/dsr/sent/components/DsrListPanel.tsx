"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { DsrPagination } from "@/components/ui/DsrPagination";
import { DsrStatusBadge } from "@/components/ui/DsrStatusBadge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import type { Dsr } from "../../dsr.types";

const ITEMS_PER_PAGE = 5;

interface DsrListPanelProps {
    dsrs: Dsr[];
    selectedId: string | null;
    onSelect: (dsr: Dsr) => void;
}

export function DsrListPanel({ dsrs, selectedId, onSelect }: DsrListPanelProps) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const filtered = dsrs.filter((dsr) => {
        if (!search) return true;
        const q = search.toLowerCase();
        return (
            dsr.date.includes(q) ||
            dsr.entries.some(
                (e) =>
                    e.description.toLowerCase().includes(q) ||
                    e.projectName.toLowerCase().includes(q),
            ) ||
            dsr.status.toLowerCase().includes(q)
        );
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <div className="flex h-full flex-col">
            <div className="p-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                    <Input
                        placeholder="Search DSRs..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="pl-8"
                    />
                </div>
            </div>
            <div className="flex-1 space-y-2 overflow-auto px-4">
                {paged.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Search className="mb-3 size-8 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground">No DSRs found</p>
                        <p className="text-xs text-muted-foreground/70">
                            Try adjusting your search
                        </p>
                    </div>
                ) : (
                    paged.map((dsr) => {
                        const isSelected = dsr.id === selectedId;
                        const dateStr = new Date(dsr.date + "T00:00:00").toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" },
                        );
                        return (
                            <button
                                key={dsr.id}
                                onClick={() => onSelect(dsr)}
                                className={cn(
                                    "w-full rounded-lg border p-3 text-left transition-colors",
                                    isSelected
                                        ? "border-primary bg-primary/5"
                                        : "border-transparent bg-muted/50 hover:bg-muted",
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{dateStr}</span>
                                    <DsrStatusBadge status={dsr.status} />
                                </div>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                    {dsr.entries[0]?.description || "No entries"}
                                </p>
                            </button>
                        );
                    })
                )}
            </div>
            <div className="border-t p-3">
                <DsrPagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </div>
    );
}
