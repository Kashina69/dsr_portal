"use client";

import { useCallback, useState } from "react";

import { getCurrentWeekStart, getWeekLabel } from "../weekly-report.data";
import type { AddReportFormState, ReportEntryDraft } from "../weekly-report.types";

function createEmptyEntry(): ReportEntryDraft {
    return {
        id: crypto.randomUUID(),
        projectName: "",
        description: "",
        saved: false,
    };
}

export function useAddReport() {
    const [formState, setFormState] = useState<AddReportFormState>({
        weekOf: getCurrentWeekStart(),
        entries: [createEmptyEntry()],
        sendTo: [],
        ccTo: [],
    });

    const navigateWeek = useCallback((dir: "prev" | "next") => {
        setFormState((prev) => {
            const d = new Date(prev.weekOf + "T00:00:00");
            d.setDate(d.getDate() + (dir === "next" ? 7 : -7));
            return { ...prev, weekOf: d.toISOString().split("T")[0] };
        });
    }, []);

    const updateEntry = useCallback((id: string, field: keyof ReportEntryDraft, value: string) => {
        setFormState((prev) => ({
            ...prev,
            entries: prev.entries.map((entry) =>
                entry.id === id ? { ...entry, [field]: value } : entry,
            ),
        }));
    }, []);

    const saveEntry = useCallback((id: string) => {
        setFormState((prev) => {
            const entry = prev.entries.find((e) => e.id === id);
            if (!entry || !entry.projectName.trim() || !entry.description.trim()) return prev;
            const updated = prev.entries.map((e) => (e.id === id ? { ...e, saved: true } : e));
            const allSaved = updated.every((e) => e.saved);
            if (allSaved) {
                updated.push(createEmptyEntry());
            }
            return { ...prev, entries: updated };
        });
    }, []);

    const editEntry = useCallback((id: string) => {
        setFormState((prev) => ({
            ...prev,
            entries: prev.entries.map((entry) =>
                entry.id === id ? { ...entry, saved: false } : entry,
            ),
        }));
    }, []);

    const removeEntry = useCallback((id: string) => {
        setFormState((prev) => {
            const filtered = prev.entries.filter((e) => e.id !== id);
            return {
                ...prev,
                entries: filtered.length === 0 ? [createEmptyEntry()] : filtered,
            };
        });
    }, []);

    const toggleSendTo = useCallback((email: string) => {
        setFormState((prev) => ({
            ...prev,
            sendTo: prev.sendTo.includes(email)
                ? prev.sendTo.filter((e) => e !== email)
                : [...prev.sendTo, email],
        }));
    }, []);

    const toggleCcTo = useCallback((email: string) => {
        setFormState((prev) => ({
            ...prev,
            ccTo: prev.ccTo.includes(email)
                ? prev.ccTo.filter((e) => e !== email)
                : [...prev.ccTo, email],
        }));
    }, []);

    const submitReport = useCallback(() => {
        console.log("Submitting Weekly Report:", formState);
    }, [formState]);

    const weekLabel = getWeekLabel(formState.weekOf);
    const savedCount = formState.entries.filter((e) => e.saved).length;
    const canSubmit = savedCount > 0 && formState.sendTo.length > 0;

    return {
        formState,
        weekLabel,
        savedCount,
        canSubmit,
        navigateWeek,
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo,
        toggleCcTo,
        submitReport,
    };
}
