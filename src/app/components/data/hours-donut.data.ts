import type { HoursSlice } from "@/components/global/HoursDonut";

export const demoHoursByProject: HoursSlice[] = [
    { label: "Samwad App", hours: 45, color: "#6366f1" },
    { label: "DSR Portal", hours: 40, color: "#0ea5e9" },
    { label: "CCA Dashboard", hours: 35, color: "#10b981" },
    { label: "HRMS Suite", hours: 30, color: "#f59e0b" },
    { label: "Orion CRM", hours: 25, color: "#8b5cf6" },
];

export const demoHoursByEmployee: HoursSlice[] = [
    { label: "Sunil Kumar", hours: 42, color: "#6366f1" },
    { label: "Priya Sharma", hours: 36, color: "#0ea5e9" },
    { label: "Ankit Verma", hours: 34, color: "#10b981" },
    { label: "Kavya Nair", hours: 30, color: "#f59e0b" },
    { label: "Rahul Meena", hours: 28, color: "#8b5cf6" },
    { label: "Others", hours: 70, color: "#94a3b8" },
];
