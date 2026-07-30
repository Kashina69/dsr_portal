export type DsrStatus = "Pending" | "Approved" | "Rejected";

export interface DsrEntry {
    id: string;
    projectName: string;
    description: string;
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

export interface DsrSubmitter {
    id: string;
    name: string;
    email: string;
    avatar: string;
    department: string;
}

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
