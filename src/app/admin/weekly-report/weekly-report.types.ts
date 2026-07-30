export type WeeklyReportStatus = "Pending" | "Approved" | "Rejected";

export interface WeeklyReportEntry {
    id: string;
    projectName: string;
    description: string;
}

export interface WeeklyReport {
    id: string;
    weekOf: string;
    weekLabel: string;
    status: WeeklyReportStatus;
    entries: WeeklyReportEntry[];
    sendTo: string[];
    ccTo: string[];
    submittedAt?: string;
    rejectionReason?: string;
}

export interface ReceivedWeeklyReport extends WeeklyReport {
    submittedBy: ReportSubmitter;
    sharedAt: string;
}

export interface ReportSubmitter {
    id: string;
    name: string;
    email: string;
    avatar: string;
    department: string;
}

export interface ReportEntryDraft {
    id: string;
    projectName: string;
    description: string;
    saved: boolean;
}

export interface AddReportFormState {
    weekOf: string;
    entries: ReportEntryDraft[];
    sendTo: string[];
    ccTo: string[];
}
