"use client";

import { useCallback, useState } from "react";

import { useToggleList } from "@/hooks/use-toggle-list.hook";

import { getCurrentWeekStart, getWeekLabel } from "../weekly-report.data";
import type { ReportEntryDraft } from "../weekly-report.types";

function createEmptyEntry(): ReportEntryDraft {
    return {
        id: crypto.randomUUID(),
        projectName: "",
        description: "",
        saved: false,
    };
}

export function useAddReport() {
    const [weekOf, setWeekOf] = useState(getCurrentWeekStart());
    const [entries, setEntries] = useState<ReportEntryDraft[]>([createEmptyEntry()]);
    const sendTo = useToggleList();
    const ccTo = useToggleList();

    const navigateWeek = useCallback((dir: "prev" | "next") => {
        setWeekOf((prev) => {
            const d = new Date(prev + "T00:00:00");
            d.setDate(d.getDate() + (dir === "next" ? 7 : -7));
            return d.toISOString().split("T")[0];
        });
    }, []);

    const updateEntry = useCallback((id: string, field: keyof ReportEntryDraft, value: string) => {
        setEntries((prev) =>
            prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)),
        );
    }, []);

    const saveEntry = useCallback((id: string) => {
        setEntries((prev) => {
            const entry = prev.find((e) => e.id === id);
            if (!entry || !entry.projectName.trim() || !entry.description.trim()) return prev;
            const updated = prev.map((e) => (e.id === id ? { ...e, saved: true } : e));
            const allSaved = updated.every((e) => e.saved);
            if (allSaved) {
                updated.push(createEmptyEntry());
            }
            return updated;
        });
    }, []);

    const editEntry = useCallback((id: string) => {
        setEntries((prev) =>
            prev.map((entry) => (entry.id === id ? { ...entry, saved: false } : entry)),
        );
    }, []);

    const removeEntry = useCallback((id: string) => {
        setEntries((prev) => {
            const filtered = prev.filter((e) => e.id !== id);
            return filtered.length === 0 ? [createEmptyEntry()] : filtered;
        });
    }, []);

    const submitReport = useCallback(() => {
        const report = {
            weekOf,
            entries,
            sendTo: sendTo.items,
            ccTo: ccTo.items,
        };
        console.log("Submitting Weekly Report:", report);
    }, [weekOf, entries, sendTo.items, ccTo.items]);

    const weekLabel = getWeekLabel(weekOf);
    const savedCount = entries.filter((e) => e.saved).length;
    const canSubmit = savedCount > 0 && sendTo.items.length > 0;

    return {
        formState: {
            weekOf,
            entries,
            sendTo: sendTo.items,
            ccTo: ccTo.items,
        },
        weekLabel,
        savedCount,
        canSubmit,
        navigateWeek,
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo: sendTo.toggle,
        toggleCcTo: ccTo.toggle,
        submitReport,
    };
}
