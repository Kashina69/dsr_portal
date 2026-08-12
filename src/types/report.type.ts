export type ReportStatus = "Pending" | "Approved" | "Rejected";

export interface Submitter {
    id: string;
    name: string;
    email: string;
    avatar: string;
    department: string;
}

export interface ReportEntry {
    id: string;
    projectName: string;
    description: string;
    startTime?: string;
    endTime?: string;
    timeEstimate?: string;
}
