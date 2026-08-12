"use client";

import { Eye } from "lucide-react";

import type { ColumnDef } from "@/components/global/DataTable";
import { DataTable } from "@/components/global/DataTable";
import type { FilterField } from "@/components/global/FilterToolbar";
import { FilterToolbar } from "@/components/global/FilterToolbar";
import { TableExplorer } from "@/components/global/TableExplorer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTableFilters } from "@/hooks/useTableFilters.hook";

import { HoursDonut } from "../dashboard/components/HoursDonut";
import { StatCards } from "../dashboard/components/StatCards";
import { hoursByEmployee, hoursByProject } from "../dashboard/dashboard.data";
import { demoData, type DemoRow } from "./demo.data";

const demoColumns: ColumnDef<DemoRow>[] = [
    { header: "Name", accessor: "name", render: (row) => <span className="text-sm font-medium">{row.name}</span> },
    { header: "Email", accessor: "email", render: (row) => <span className="text-sm text-muted-foreground">{row.email}</span> },
    { header: "Role", accessor: "role" },
    {
        header: "Status",
        accessor: "status",
        render: (row) => (
            <Badge variant="secondary" className={row.status === "Active" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}>
                {row.status}
            </Badge>
        ),
    },
    { header: "Hours", accessor: "hours", className: "text-right", render: (row) => <span className="text-sm font-medium tabular-nums">{row.hours}</span> },
    {
        header: "Actions",
        accessor: "id",
        className: "text-right",
        render: () => (
            <Button variant="ghost" size="icon-xs" aria-label="View">
                <Eye />
            </Button>
        ),
    },
];

const demoFilterFields: FilterField[] = [
    {
        id: "name",
        label: "Name",
        placeholder: "All names",
        options: [...new Set(demoData.map((d) => d.name))].sort().map((n) => ({ value: n, label: n })),
    },
    {
        id: "role",
        label: "Role",
        placeholder: "All roles",
        options: [...new Set(demoData.map((d) => d.role))].sort().map((r) => ({ value: r, label: r })),
    },
    {
        id: "status",
        label: "Status",
        placeholder: "All statuses",
        options: [
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
        ],
    },
];

export default function Page() {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="mb-4 text-lg font-semibold">StatCards</h2>
                <StatCards />
            </section>

            <section>
                <h2 className="mb-4 text-lg font-semibold">HoursDonut</h2>
                <div className="grid gap-5 lg:grid-cols-2">
                    <HoursDonut title="Hours by Project" slices={hoursByProject} delay="delay-100" />
                    <HoursDonut title="Hours by Employee" slices={hoursByEmployee} delay="delay-150" />
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-lg font-semibold">FilterToolbar</h2>
                <div className="overflow-hidden rounded-xl border bg-card">
                    <FilterToolbar
                        fields={demoFilterFields}
                        onApply={(filters) => {
                            console.log("Filters applied:", filters);
                        }}
                        resultLabel="team members"
                    />
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-lg font-semibold">DataTable</h2>
                <DemoTable />
            </section>

            <section>
                <h2 className="mb-4 text-lg font-semibold">TableExplorer</h2>
                <TableExplorer
                    data={demoData}
                    columns={demoColumns}
                    filterFields={demoFilterFields}
                    emptyMessage="No team members match these filters"
                    emptySub="Adjust or reset the filters to see results."
                    resultLabel="team members"
                />
            </section>
        </div>
    );
}

function DemoTable() {
    const tbl = useTableFilters({ data: demoData, initialRowsPerPage: 5 });

    return (
        <div className="overflow-hidden rounded-xl border bg-card">
            <DataTable
                columns={demoColumns}
                rows={tbl.rows}
                page={tbl.page}
                pageCount={tbl.pageCount}
                rowsPerPage={tbl.rowsPerPage}
                from={tbl.from}
                to={tbl.to}
                total={tbl.total}
                onPageChange={tbl.setPage}
                onRowsPerPageChange={tbl.changeRowsPerPage}
            />
        </div>
    );
}
