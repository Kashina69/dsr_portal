"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export interface ColumnDef<T> {
    header: string;
    accessor: keyof T;
    className?: string;
    render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
    columns: ColumnDef<T>[];
    rows: T[];
    emptyMessage?: string;
    emptySub?: string;
    colSpanFallback?: number;
    page: number;
    pageCount: number;
    rowsPerPage: number;
    from: number;
    to: number;
    total: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (count: number) => void;
}

export function DataTable<T extends { id: string }>({
    columns,
    rows,
    emptyMessage = "No data found",
    emptySub = "Try adjusting your filters.",
    colSpanFallback,
    page,
    pageCount,
    rowsPerPage,
    from,
    to,
    total,
    onPageChange,
    onRowsPerPageChange,
}: DataTableProps<T>) {
    const colSpan = colSpanFallback ?? columns.length;

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col) => (
                            <TableHead key={String(col.accessor)} className={col.className}>
                                {col.header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={colSpan} className="h-32 text-center">
                                <p className="text-sm font-medium">{emptyMessage}</p>
                                <p className="mt-1 text-xs text-muted-foreground">{emptySub}</p>
                            </TableCell>
                        </TableRow>
                    )}
                    {rows.map((row, i) => (
                        <TableRow
                            key={row.id}
                            className="motion-safe:animate-fade-up transition-colors hover:bg-muted/50"
                            style={{ animationDelay: `${i * 30}ms` }}
                        >
                            {columns.map((col) => (
                                <TableCell key={String(col.accessor)} className={col.className}>
                                    {col.render
                                        ? col.render(row)
                                        : (row[col.accessor] as ReactNode)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex flex-wrap items-center gap-3 border-t px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Rows per page</span>
                    <Select
                        value={String(rowsPerPage)}
                        onValueChange={(value) => onRowsPerPageChange(Number(value))}
                    >
                        <SelectTrigger className="h-7 w-16" aria-label="Rows per page">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <p className="ml-auto text-xs text-muted-foreground tabular-nums">
                    {from}-{to} of {total}
                </p>
                <div className="flex gap-1">
                    <Button
                        variant="outline"
                        size="icon-xs"
                        disabled={page <= 1}
                        onClick={() => onPageChange(page - 1)}
                        aria-label="Previous page"
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon-xs"
                        disabled={page >= pageCount}
                        onClick={() => onPageChange(page + 1)}
                        aria-label="Next page"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
