/** Types local to the dashboard module. Extract to src/types/ only when shared across modules. */

export type Department = "Engineering" | "Design" | "HR" | "Marketing" | "Finance";

export type EmployeeStatus = "Present" | "Absent" | "On Leave";

export type LeaveType = "Sick" | "Vacation" | "Personal";

export type LeaveStatus = "Pending" | "Approved" | "Rejected";

export interface Employee {
    id: string;
    name: string;
    email: string;
    department: Department;
    status: EmployeeStatus;
    checkInTime: string | null;
    avatar: string;
}

export interface LeaveRequest {
    id: string;
    employeeName: string;
    type: LeaveType;
    from: string;
    to: string;
    status: LeaveStatus;
}

export interface ActivityItem {
    id: string;
    employeeName: string;
    action: string;
    timestamp: string;
    unread: boolean;
}

export interface AttendanceDay {
    day: string;
    present: number;
    total: number;
}
