"use client";

import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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

import { formatDsrDate } from "../dashboard.data";
import type { DsrEntry, DsrStatus } from "../dashboard.types";

const statusStyles: Record<DsrStatus, string> = {
    Submitted: "bg-emerald-500/10 text-emerald-600",
    Pending: "bg-amber-500/10 text-amber-600",
};

interface DsrTableProps {
    rows: DsrEntry[];
    total: number;
    page: number;
    pageCount: number;
    rowsPerPage: number;
    from: number;
    to: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (count: number) => void;
}

export function DsrTable({
    rows,
    total,
    page,
    pageCount,
    rowsPerPage,
    from,
    to,
    onPageChange,
    onRowsPerPageChange,
}: DsrTableProps) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Submitted By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Ticket</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Total Hours</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={8} className="h-32 text-center">
                                <p className="text-sm font-medium">No DSRs match these filters</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Adjust or reset the filters to see reports.
                                </p>
                            </TableCell>
                        </TableRow>
                    )}
                    {rows.map((entry, i) => (
                        <TableRow
                            key={entry.id}
                            className="motion-safe:animate-fade-up transition-colors hover:bg-muted/50"
                            style={{ animationDelay: `${i * 30}ms` }}
                        >
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                                        {entry.avatar}
                                    </div>
                                    <span className="text-sm font-medium whitespace-nowrap">
                                        {entry.submittedBy}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm whitespace-nowrap tabular-nums">
                                    {formatDsrDate(entry.date)}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm whitespace-nowrap">{entry.project}</span>
                            </TableCell>
                            <TableCell>
                                <span className="font-mono text-xs text-muted-foreground">
                                    {entry.ticket}
                                </span>
                            </TableCell>
                            <TableCell className="max-w-64">
                                <span
                                    className="block truncate text-sm text-muted-foreground"
                                    title={entry.description}
                                >
                                    {entry.description}
                                </span>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary" className={statusStyles[entry.status]}>
                                    {entry.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <span className="text-sm font-medium tabular-nums">
                                    {entry.totalHours}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon-xs" aria-label="View DSR">
                                    <Eye />
                                </Button>
                            </TableCell>
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
