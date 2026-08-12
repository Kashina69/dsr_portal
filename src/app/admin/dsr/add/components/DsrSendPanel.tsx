"use client";

import { SendPanel } from "@/components/ui/SendPanel";

import { ccOptions, teamMembers } from "../../dsr.data";

interface DsrSendPanelProps {
    sendTo: string[];
    ccTo: string[];
    attachments: File[];
    onToggleSendTo: (email: string) => void;
    onToggleCcTo: (email: string) => void;
    onAddAttachment: (file: File) => void;
    onRemoveAttachment: (index: number) => void;
    onSubmit: () => void;
    hideSubmit?: boolean;
}

export function DsrSendPanel({
    sendTo,
    ccTo,
    attachments,
    onToggleSendTo,
    onToggleCcTo,
    onAddAttachment,
    onRemoveAttachment,
    onSubmit,
    hideSubmit,
}: DsrSendPanelProps) {
    return (
        <SendPanel
            sendTo={sendTo}
            ccTo={ccTo}
            recipients={teamMembers}
            ccOptions={ccOptions}
            attachments={attachments}
            onToggleSendTo={onToggleSendTo}
            onToggleCcTo={onToggleCcTo}
            onAddAttachment={onAddAttachment}
            onRemoveAttachment={onRemoveAttachment}
            submitLabel="Submit DSR"
            onSubmit={onSubmit}
            hideSubmit={hideSubmit}
        />
    );
}
