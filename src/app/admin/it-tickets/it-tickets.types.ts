export interface ITTicket {
    id: string;
    empCode: string;
    empName: string;
    ticketNo: string;
    category: string;
    severity: string;
    createdDate: string;
    status: string;
}

export const IT_TICKET_CATEGORIES = [
    "All",
    "Networking",
    "Server",
    "Software/Hardware inquiry",
    "System",
];

export const IT_TICKET_SEVERITIES = ["All", "High", "Medium", "Low"];

export const IT_TICKET_STATUSES = ["All", "Open", "InProgress", "Closed", "Reopen", "Archive"];
