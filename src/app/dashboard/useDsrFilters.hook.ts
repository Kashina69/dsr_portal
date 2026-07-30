"use client";

import { useMemo, useState } from "react";

import { dsrEntries, emptyDsrFilters } from "./dashboard.data";
import type { DsrFilters } from "./dashboard.types";

export function useDsrFilters() {
    const [applied, setApplied] = useState<DsrFilters>(emptyDsrFilters);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filtered = useMemo(
        () =>
            dsrEntries.filter(
                (entry) =>
                    (applied.date === "all" || entry.date === applied.date) &&
                    (applied.employee === "all" || entry.submittedBy === applied.employee) &&
                    (applied.project === "all" || entry.project === applied.project) &&
                    (applied.ticket === "all" || entry.ticket === applied.ticket) &&
                    (applied.status === "all" || entry.status === applied.status),
            ),
        [applied],
    );

    const pageCount = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    const currentPage = Math.min(page, pageCount);
    const from = filtered.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const to = Math.min(currentPage * rowsPerPage, filtered.length);
    const rows = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const applyFilters = (next: DsrFilters) => {
        setApplied(next);
        setPage(1);
    };

    const changeRowsPerPage = (count: number) => {
        setRowsPerPage(count);
        setPage(1);
    };

    return {
        applied,
        applyFilters,
        filteredCount: filtered.length,
        rows,
        from,
        to,
        page: currentPage,
        setPage,
        pageCount,
        rowsPerPage,
        changeRowsPerPage,
    };
}
