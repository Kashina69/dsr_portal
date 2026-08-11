"use client";

import { SendPanel } from "@/components/ui/SendPanel";

import { reportSubmitters } from "../../weekly-report.data";

interface ReportSendPanelProps {
    sendTo: string[];
    ccTo: string[];
    onToggleSendTo: (email: string) => void;
    onToggleCcTo: (email: string) => void;
    onSubmit: () => void;
    disabled: boolean;
}

export function ReportSendPanel({
    sendTo,
    ccTo,
    onToggleSendTo,
    onToggleCcTo,
    onSubmit,
    disabled,
}: ReportSendPanelProps) {
    return (
        <SendPanel
            sendTo={sendTo}
            ccTo={ccTo}
            recipients={reportSubmitters}
            onToggleSendTo={onToggleSendTo}
            onToggleCcTo={onToggleCcTo}
            submitLabel="Submit Report"
            onSubmit={onSubmit}
            disabled={disabled}
        />
    );
}
