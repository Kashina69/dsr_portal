import type { StatCardItem } from "@/components/global/StatCards";

export const demoStatCards: StatCardItem[] = [
    {
        label: "Total Employees",
        value: 30,
        sub: "Active across teams",
        icon: "users",
        color: "bg-indigo-500/10 text-indigo-600",
        delay: "delay-0",
    },
    {
        label: "Total Projects",
        value: 12,
        sub: "Active this quarter",
        icon: "folder",
        color: "bg-sky-500/10 text-sky-600",
        delay: "delay-75",
    },
    {
        label: "Total Tickets",
        value: 248,
        sub: "Resolved this month",
        icon: "ticket",
        color: "bg-violet-500/10 text-violet-600",
        delay: "delay-150",
    },
    {
        label: "Total Hours",
        value: 1840,
        sub: "Logged this week",
        icon: "clock",
        color: "bg-emerald-500/10 text-emerald-600",
        delay: "delay-225",
    },
];
