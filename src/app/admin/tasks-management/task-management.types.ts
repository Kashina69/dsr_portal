export interface TaskEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    description?: string;
    assignedTo?: string[];
    notes?: string;
}
