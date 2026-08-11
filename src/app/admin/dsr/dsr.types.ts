import type { ReportEntry, ReportStatus, Submitter } from "@/types/report.type";

export type DsrStatus = ReportStatus;

export interface DsrEntry extends ReportEntry {
    startTime: string;
    endTime: string;
    timeEstimate: string;
}

export interface Dsr {
    id: string;
    date: string;
    status: DsrStatus;
    entries: DsrEntry[];
    sendTo: string[];
    ccTo: string[];
    attachments: string[];
    rejectionReason?: string;
}

export type DsrSubmitter = Submitter;

export interface ReceivedDsr extends Dsr {
    submittedBy: DsrSubmitter;
    sharedAt: string;
}

export interface DsrEntryDraft {
    id: string;
    projectName: string;
    description: string;
    startTime: string;
    endTime: string;
    timeEstimate?: string;
    saved: boolean;
}

export interface DsrFormState {
    date: string;
    entries: DsrEntryDraft[];
    sendTo: string[];
    ccTo: string[];
    attachments: File[];
}
