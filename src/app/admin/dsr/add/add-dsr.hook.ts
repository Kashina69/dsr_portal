"use client";

import { useCallback, useState } from "react";

import { today } from "../dsr.data";
import type { DsrEntryDraft, DsrFormState } from "../dsr.types";

function createEmptyEntry(): DsrEntryDraft {
    return {
        id: crypto.randomUUID(),
        projectName: "",
        description: "",
        startTime: "09:00",
        endTime: "10:00",
        saved: false,
    };
}

function computeTimeEstimate(startTime: string, endTime: string): string {
    const [sh, sm] = startTime.split(":").map(Number);
    const [eh, em] = endTime.split(":").map(Number);
    const totalMin = eh * 60 + em - (sh * 60 + sm);
    if (totalMin <= 0) return "0 Min";
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    if (hours === 0) return `${minutes} Min`;
    if (minutes === 0) return `${hours} Hr`;
    return `${hours} Hr ${minutes} Min`;
}

export function useAddDsr() {
    const [formState, setFormState] = useState<DsrFormState>({
        date: today,
        entries: [createEmptyEntry()],
        sendTo: [],
        ccTo: [],
        attachments: [],
    });

    const updateEntry = useCallback((id: string, field: keyof DsrEntryDraft, value: string) => {
        setFormState((prev) => ({
            ...prev,
            entries: prev.entries.map((entry) =>
                entry.id === id ? { ...entry, [field]: value } : entry,
            ),
        }));
    }, []);

    const saveEntry = useCallback((id: string) => {
        setFormState((prev) => {
            const idx = prev.entries.findIndex((e) => e.id === id);
            if (idx === -1) return prev;
            const entry = prev.entries[idx];
            const timeEstimate = computeTimeEstimate(entry.startTime, entry.endTime);
            const updated = prev.entries.map((e, i) =>
                i === idx ? { ...e, saved: true, timeEstimate } : e,
            );
            const lastEntry = updated[updated.length - 1];
            const allSaved = updated.every((e) => e.saved);
            const nextEntries = allSaved
                ? [
                      ...updated,
                      {
                          ...createEmptyEntry(),
                          startTime: lastEntry.endTime,
                          endTime: lastEntry.endTime,
                      },
                  ]
                : [...updated, createEmptyEntry()];
            return { ...prev, entries: nextEntries };
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
            return { ...prev, entries: filtered.length === 0 ? [createEmptyEntry()] : filtered };
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

    const addAttachment = useCallback((file: File) => {
        setFormState((prev) => ({
            ...prev,
            attachments: [...prev.attachments, file],
        }));
    }, []);

    const removeAttachment = useCallback((index: number) => {
        setFormState((prev) => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index),
        }));
    }, []);

    const submitDsr = useCallback(() => {
        console.log("Submitting DSR:", formState);
    }, [formState]);

    return {
        formState,
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo,
        toggleCcTo,
        addAttachment,
        removeAttachment,
        submitDsr,
    };
}
