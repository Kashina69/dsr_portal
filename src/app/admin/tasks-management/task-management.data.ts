import type { TaskEvent } from "./task-management.types";

export const MOCK_TASK_EVENTS: TaskEvent[] = [
    {
        id: "1",
        title: "Birthday: Vivek Bora 🎂",
        start: new Date(2026, 7, 9), // August is month 7 (0-indexed)
        end: new Date(2026, 7, 9),
        allDay: true,
    },
    {
        id: "2",
        title: "Work Anniversary: Avani Mahajan",
        start: new Date(2026, 7, 10),
        end: new Date(2026, 7, 10),
        allDay: true,
    },
    {
        id: "3",
        title: "Work Anniversary: Shiv Kumar",
        start: new Date(2026, 7, 10),
        end: new Date(2026, 7, 10),
        allDay: true,
    },
    {
        id: "4",
        title: "Birthday: Aditya Sharma 🎂",
        start: new Date(2026, 7, 12),
        end: new Date(2026, 7, 12),
        allDay: true,
    },
    {
        id: "5",
        title: "Birthday: Amaltas Singh 🎂",
        start: new Date(2026, 7, 13),
        end: new Date(2026, 7, 13),
        allDay: true,
    },
    {
        id: "6",
        title: "Birthday: Sidhant Uppal 🎂",
        start: new Date(2026, 7, 15),
        end: new Date(2026, 7, 15),
        allDay: true,
    },
];
