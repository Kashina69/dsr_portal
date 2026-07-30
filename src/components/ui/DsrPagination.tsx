"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DsrPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function DsrPagination({ currentPage, totalPages, onPageChange }: DsrPaginationProps) {
    if (totalPages <= 1) return null;

    const pages: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            pages.push(i);
        } else if (pages[pages.length - 1] !== "...") {
            pages.push("...");
        }
    }

    return (
        <div className="flex items-center justify-center gap-1">
            <Button
                variant="ghost"
                size="icon-sm"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ChevronLeft className="size-4" />
            </Button>
            {pages.map((page, i) =>
                page === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-1 text-sm text-muted-foreground">
                        ...
                    </span>
                ) : (
                    <Button
                        key={page}
                        variant={page === currentPage ? "default" : "ghost"}
                        size="icon-sm"
                        className={cn(
                            "size-8 text-sm",
                            page === currentPage && "pointer-events-none",
                        )}
                        onClick={() => onPageChange(page as number)}
                    >
                        {page}
                    </Button>
                ),
            )}
            <Button
                variant="ghost"
                size="icon-sm"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
}
