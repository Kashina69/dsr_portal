"use client";

import { Eye } from "lucide-react";

import type { ColumnDef } from "@/components/global/DataTable";
import type { FilterField } from "@/components/global/FilterToolbar";
import { TableExplorer } from "@/components/global/TableExplorer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { dateOptions, dsrEntries, employeeOptions, formatDsrDate,projectOptions, statusOptions, ticketOptions } from "../dashboard.data";
import type { DsrEntry, DsrStatus } from "../dashboard.types";

const statusStyles: Record<DsrStatus, string> = {
    Submitted: "bg-emerald-500/10 text-emerald-600",
    Pending: "bg-amber-500/10 text-amber-600",
};

const columns: ColumnDef<DsrEntry>[] = [
    {
        header: "Submitted By",
        accessor: "submittedBy",
        render: (row) => (
            <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {row.avatar}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{row.submittedBy}</span>
            </div>
        ),
    },
    {
        header: "Date",
        accessor: "date",
        render: (row) => (
            <span className="text-sm whitespace-nowrap tabular-nums">
                {formatDsrDate(row.date)}
            </span>
        ),
    },
    {
        header: "Project",
        accessor: "project",
        render: (row) => <span className="text-sm whitespace-nowrap">{row.project}</span>,
    },
    {
        header: "Ticket",
        accessor: "ticket",
        render: (row) => (
            <span className="font-mono text-xs text-muted-foreground">{row.ticket}</span>
        ),
    },
    {
        header: "Description",
        accessor: "description",
        className: "max-w-64",
        render: (row) => (
            <span
                className="block truncate text-sm text-muted-foreground"
                title={row.description}
            >
                {row.description}
            </span>
        ),
    },
    {
        header: "Status",
        accessor: "status",
        render: (row) => (
            <Badge variant="secondary" className={statusStyles[row.status]}>
                {row.status}
            </Badge>
        ),
    },
    {
        header: "Total Hours",
        accessor: "totalHours",
        className: "text-right",
        render: (row) => (
            <span className="text-sm font-medium tabular-nums">{row.totalHours}</span>
        ),
    },
    {
        header: "Actions",
        accessor: "id",
        className: "text-right",
        render: () => (
            <Button variant="ghost" size="icon-xs" aria-label="View DSR">
                <Eye />
            </Button>
        ),
    },
];

const filterFields: FilterField[] = [
    {
        id: "date",
        label: "Date",
        placeholder: "All dates",
        options: dateOptions.map((d) => ({ value: d, label: formatDsrDate(d) })),
    },
    {
        id: "submittedBy",
        label: "Employee",
        placeholder: "All employees",
        options: employeeOptions.map((e) => ({ value: e, label: e })),
    },
    {
        id: "project",
        label: "Project",
        placeholder: "All projects",
        options: projectOptions.map((p) => ({ value: p, label: p })),
    },
    {
        id: "ticket",
        label: "Ticket",
        placeholder: "All tickets",
        options: ticketOptions.map((t) => ({ value: t, label: t })),
    },
    {
        id: "status",
        label: "Status",
        placeholder: "All statuses",
        options: statusOptions.map((s) => ({ value: s, label: s })),
    },
];

export function DsrExplorer() {
    return (
        <TableExplorer
            data={dsrEntries}
            columns={columns}
            filterFields={filterFields}
            emptyMessage="No DSRs match these filters"
            emptySub="Adjust or reset the filters to see reports."
            resultLabel="reports"
        />
    );
}
