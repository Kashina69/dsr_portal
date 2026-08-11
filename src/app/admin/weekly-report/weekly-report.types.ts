import type { ReportEntry, ReportStatus, Submitter } from "@/types/report.type";

export type WeeklyReportStatus = ReportStatus;

export type WeeklyReportEntry = ReportEntry;

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

export type ReportSubmitter = Submitter;

export interface ReceivedWeeklyReport extends WeeklyReport {
    submittedBy: ReportSubmitter;
    sharedAt: string;
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
