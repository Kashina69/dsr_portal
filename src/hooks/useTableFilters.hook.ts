"use client";

import { useMemo, useState } from "react";

interface UseTableFiltersOptions<T> {
    data: T[];
    initialRowsPerPage?: number;
}

/**
 * Returns true if `search` is a substring of `value`, case-insensitive.
 */
function matchesText(value: unknown, search: string): boolean {
    if (search === "all" || search === "") return true;
    return String(value ?? "").toLowerCase().includes(search.toLowerCase());
}

/**
 * Generic server-side or client-side filtering + pagination hook.
 *
 * If you use client-side filtering (the default), pass `data` and it returns
 * pre-sliced `rows`. For server-side, ignore `data` and manage rows yourself.
 */
export function useTableFilters<T extends Record<string, unknown>>(
    options: UseTableFiltersOptions<T>,
) {
    const { data, initialRowsPerPage = 10 } = options;

    const [applied, setApplied] = useState<Record<string, string>>({});
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

    const filtered = useMemo(
        () =>
            data.filter((row) =>
                Object.entries(applied).every(([key, search]) => matchesText(row[key], search)),
            ),
        [data, applied],
    );

    const pageCount = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    const currentPage = Math.min(page, pageCount);
    const from = filtered.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
    const to = Math.min(currentPage * rowsPerPage, filtered.length);
    const rows = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const applyFilters = (next: Record<string, string>) => {
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
        rows,
        from,
        to,
        total: filtered.length,
        page: currentPage,
        setPage,
        pageCount,
        rowsPerPage,
        changeRowsPerPage,
    };
}
