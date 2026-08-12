"use client";

import type { ColumnDef } from "@/components/global/DataTable";
import { DataTable } from "@/components/global/DataTable";
import type { FilterField } from "@/components/global/FilterToolbar";
import { FilterToolbar } from "@/components/global/FilterToolbar";
import { useTableFilters } from "@/hooks/useTableFilters.hook";

interface TableExplorerProps<T extends { id: string }> {
    data: T[];
    columns: ColumnDef<T>[];
    filterFields: FilterField[];
    emptyMessage?: string;
    emptySub?: string;
    resultLabel?: string;
}

export function TableExplorer<T extends { id: string }>({
    data,
    columns,
    filterFields,
    emptyMessage,
    emptySub,
    resultLabel,
}: TableExplorerProps<T>) {
    const tbl = useTableFilters({ data });

    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-200 overflow-hidden rounded-xl border bg-card">
            <FilterToolbar
                fields={filterFields}
                onApply={tbl.applyFilters}
                resultLabel={resultLabel}
            />
            <DataTable
                columns={columns}
                rows={tbl.rows}
                emptyMessage={emptyMessage}
                emptySub={emptySub}
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
