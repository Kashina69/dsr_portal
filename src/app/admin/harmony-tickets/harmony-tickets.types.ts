export interface HarmonyTicket {
    id: string;
    empCode: string;
    ticketNo: string;
    categoryName: string;
    status: string;
    date: string; // for mock filtering
}

export const HARMONY_TICKET_CATEGORIES = [
    "All",
    "Bullying or Intimidation",
    "Conflict Resolution",
    "Employee Relations",
    "Ethics Violations",
    "Harrasment and Discrimination",
    "Health and Safety Concerns",
    "Leave and Accommodation Issues",
    "Other",
    "Performance Management Concerns",
    "Policy Violations",
    "Retaliation Claims",
    "Unfair Treatment",
    "Wage and Benefits",
    "Whistleblower Complaints",
    "Work Environment",
    "Workplace Safety and Security",
];

export const HARMONY_TICKET_STATUSES = ["All", "Open", "InProgress", "Closed", "Archive"];
