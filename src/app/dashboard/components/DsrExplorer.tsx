"use client";

import { useDsrFilters } from "../useDsrFilters.hook";
import { DsrTable } from "./DsrTable";
import { FilterBar } from "./FilterBar";

export function DsrExplorer() {
    const dsr = useDsrFilters();

    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-200 overflow-hidden rounded-xl border bg-card">
            <FilterBar
                applied={dsr.applied}
                resultCount={dsr.filteredCount}
                onApply={dsr.applyFilters}
            />
            <DsrTable
                rows={dsr.rows}
                total={dsr.filteredCount}
                page={dsr.page}
                pageCount={dsr.pageCount}
                rowsPerPage={dsr.rowsPerPage}
                from={dsr.from}
                to={dsr.to}
                onPageChange={dsr.setPage}
                onRowsPerPageChange={dsr.changeRowsPerPage}
            />
        </div>
    );
}
