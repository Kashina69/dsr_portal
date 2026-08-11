"use client";

import { useCallback, useState } from "react";

import { useToggleList } from "@/hooks/use-toggle-list.hook";

import { today } from "../dsr.data";
import type { DsrEntryDraft } from "../dsr.types";

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
    const [entries, setEntries] = useState<DsrEntryDraft[]>([createEmptyEntry()]);
    const [attachments, setAttachments] = useState<File[]>([]);
    const sendTo = useToggleList();
    const ccTo = useToggleList();

    const updateEntry = useCallback((id: string, field: keyof DsrEntryDraft, value: string) => {
        setEntries((prev) =>
            prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)),
        );
    }, []);

    const saveEntry = useCallback((id: string) => {
        setEntries((prev) => {
            const idx = prev.findIndex((e) => e.id === id);
            if (idx === -1) return prev;
            const entry = prev[idx];
            const timeEstimate = computeTimeEstimate(entry.startTime, entry.endTime);
            const updated = prev.map((e, i) =>
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
            return nextEntries;
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

    const addAttachment = useCallback((file: File) => {
        setAttachments((prev) => [...prev, file]);
    }, []);

    const removeAttachment = useCallback((index: number) => {
        setAttachments((prev) => prev.filter((_, i) => i !== index));
    }, []);

    const submitDsr = useCallback(() => {
        const formState = {
            date: today,
            entries,
            sendTo: sendTo.items,
            ccTo: ccTo.items,
            attachments,
        };
        console.log("Submitting DSR:", formState);
    }, [entries, sendTo.items, ccTo.items, attachments]);

    return {
        formState: {
            date: today,
            entries,
            sendTo: sendTo.items,
            ccTo: ccTo.items,
            attachments,
        },
        updateEntry,
        saveEntry,
        editEntry,
        removeEntry,
        toggleSendTo: sendTo.toggle,
        toggleCcTo: ccTo.toggle,
        addAttachment,
        removeAttachment,
        submitDsr,
    };
}
