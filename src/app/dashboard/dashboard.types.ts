/** Types local to the DSR dashboard module. Extract to src/types/ only when shared across modules. */

export type DsrStatus = "Submitted" | "Pending";

export interface DsrEntry {
    id: string;
    submittedBy: string;
    avatar: string;
    date: string;
    project: string;
    ticket: string;
    description: string;
    status: DsrStatus;
    totalHours: number;
}

export interface DsrFilters {
    date: string;
    employee: string;
    project: string;
    ticket: string;
    status: DsrStatus | "all";
}

export interface HoursSlice {
    label: string;
    hours: number;
    color: string;
}

export type StatIcon = "users" | "folder" | "ticket" | "clock";

export interface StatItem {
    label: string;
    value: number;
    sub: string;
    icon: StatIcon;
    color: string;
    delay: string;
}

export interface DsrStats {
    totalEmployees: number;
    totalProjects: number;
    totalTickets: number;
    totalHours: number;
}
