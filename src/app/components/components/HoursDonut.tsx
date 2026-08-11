import { cn } from "@/lib/utils";

export interface HoursSlice {
    label: string;
    hours: number;
    color: string;
}

interface HoursDonutProps {
    title?: string;
    slices?: HoursSlice[];
    delay?: string;
}

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

export const dsrEntries: DsrEntry[] = [
    {
        id: "dsr-1",
        submittedBy: "Sunil Kumar",
        avatar: "SK",
        date: "2025-07-28",
        project: "Samwad App",
        ticket: "SAM-24",
        description: "Worked on the CCA certificate flow and fixed preview rendering issues.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-2",
        submittedBy: "Sunil Kumar",
        avatar: "SK",
        date: "2025-07-27",
        project: "Samwad App",
        ticket: "SAM-24",
        description: "Worked on the CCA form validation and inline error states.",
        status: "Pending",
        totalHours: 5,
    },
    {
        id: "dsr-3",
        submittedBy: "Ankit Verma",
        avatar: "AV",
        date: "2025-07-28",
        project: "DSR Portal",
        ticket: "DSR-12",
        description: "Implemented DSR listing API integration with server-side pagination.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-4",
        submittedBy: "Aashish Rana",
        avatar: "AR",
        date: "2025-07-28",
        project: "Samwad App",
        ticket: "SAM-31",
        description: "Fixed push notification token refresh when the app resumes.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-5",
        submittedBy: "Priya Sharma",
        avatar: "PS",
        date: "2025-07-28",
        project: "CCA Dashboard",
        ticket: "CCA-7",
        description: "Built hours distribution chart and connected weekly aggregates.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-6",
        submittedBy: "Rahul Meena",
        avatar: "RM",
        date: "2025-07-27",
        project: "HRMS Suite",
        ticket: "HRM-33",
        description: "Refactored leave approval workflow and notification email templates.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-7",
        submittedBy: "Kavya Nair",
        avatar: "KN",
        date: "2025-07-27",
        project: "DSR Portal",
        ticket: "DSR-18",
        description: "Added filter toolbar state handling for date and status fields.",
        status: "Pending",
        totalHours: 6,
    },
    {
        id: "dsr-8",
        submittedBy: "Rohit Shetty",
        avatar: "RS",
        date: "2025-07-27",
        project: "Orion CRM",
        ticket: "ORM-21",
        description: "Migrated contact import job to a background queue with retries.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-9",
        submittedBy: "Manish Gupta",
        avatar: "MG",
        date: "2025-07-26",
        project: "Fleet Tracker",
        ticket: "FLT-14",
        description: "Tuned GPS polling interval to reduce battery drain on devices.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-10",
        submittedBy: "Nidhi Shah",
        avatar: "NS",
        date: "2025-07-26",
        project: "CCA Dashboard",
        ticket: "CCA-9",
        description: "Designed empty and loading states for the report screens.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-11",
        submittedBy: "Arjun Desai",
        avatar: "AD",
        date: "2025-07-26",
        project: "DSR Portal",
        ticket: "DSR-12",
        description: "Wrote API contract tests for the DSR submission endpoint.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-12",
        submittedBy: "Sunil Kumar",
        avatar: "SK",
        date: "2025-07-26",
        project: "Samwad App",
        ticket: "SAM-25",
        description: "Investigated crash on attachment upload for large files.",
        status: "Pending",
        totalHours: 5,
    },
    {
        id: "dsr-13",
        submittedBy: "Ankit Verma",
        avatar: "AV",
        date: "2025-07-25",
        project: "Orion CRM",
        ticket: "ORM-24",
        description: "Built dedupe logic for bulk lead imports across sources.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-14",
        submittedBy: "Priya Sharma",
        avatar: "PS",
        date: "2025-07-25",
        project: "DSR Portal",
        ticket: "DSR-19",
        description: "Polished table density and pagination footer interactions.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-15",
        submittedBy: "Aashish Rana",
        avatar: "AR",
        date: "2025-07-25",
        project: "HRMS Suite",
        ticket: "HRM-35",
        description: "Added shift roster conflict warnings for schedulers.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-16",
        submittedBy: "Kavya Nair",
        avatar: "KN",
        date: "2025-07-25",
        project: "CCA Dashboard",
        ticket: "CCA-7",
        description: "Optimized aggregate queries with materialized views.",
        status: "Pending",
        totalHours: 9,
    },
    {
        id: "dsr-17",
        submittedBy: "Rahul Meena",
        avatar: "RM",
        date: "2025-07-25",
        project: "Fleet Tracker",
        ticket: "FLT-18",
        description: "Implemented geofence entry and exit alerts for vehicles.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-18",
        submittedBy: "Rohit Shetty",
        avatar: "RS",
        date: "2025-07-24",
        project: "DSR Portal",
        ticket: "DSR-21",
        description: "Fixed timezone handling in report date filters.",
        status: "Submitted",
        totalHours: 7,
    },
    {
        id: "dsr-19",
        submittedBy: "Manish Gupta",
        avatar: "MG",
        date: "2025-07-24",
        project: "Samwad App",
        ticket: "SAM-28",
        description: "Improved offline sync retry logic with exponential backoff.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-20",
        submittedBy: "Nidhi Shah",
        avatar: "NS",
        date: "2025-07-24",
        project: "Orion CRM",
        ticket: "ORM-21",
        description: "Redesigned pipeline board drag interactions for touch.",
        status: "Pending",
        totalHours: 8,
    },
    {
        id: "dsr-21",
        submittedBy: "Arjun Desai",
        avatar: "AD",
        date: "2025-07-24",
        project: "HRMS Suite",
        ticket: "HRM-38",
        description: "Added audit log entries for payroll edits and exports.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-22",
        submittedBy: "Sunil Kumar",
        avatar: "SK",
        date: "2025-07-23",
        project: "Samwad App",
        ticket: "SAM-24",
        description: "Worked on the CCA approval chain and reviewer notes.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-23",
        submittedBy: "Ankit Verma",
        avatar: "AV",
        date: "2025-07-23",
        project: "CCA Dashboard",
        ticket: "CCA-11",
        description: "Set up anomaly alerts for unusual hour entries.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-24",
        submittedBy: "Priya Sharma",
        avatar: "PS",
        date: "2025-07-23",
        project: "Fleet Tracker",
        ticket: "FLT-20",
        description: "Built driver scorecard weekly digest email.",
        status: "Submitted",
        totalHours: 8,
    },
    {
        id: "dsr-25",
        submittedBy: "Aashish Rana",
        avatar: "AR",
        date: "2025-07-23",
        project: "DSR Portal",
        ticket: "DSR-23",
        description: "Added bulk approve action for pending DSRs.",
        status: "Pending",
        totalHours: 9,
    },
    {
        id: "dsr-26",
        submittedBy: "Kavya Nair",
        avatar: "KN",
        date: "2025-07-22",
        project: "HRMS Suite",
        ticket: "HRM-40",
        description: "Streamlined onboarding checklist assignments for HR.",
        status: "Submitted",
        totalHours: 7,
    },
    {
        id: "dsr-27",
        submittedBy: "Rahul Meena",
        avatar: "RM",
        date: "2025-07-22",
        project: "Samwad App",
        ticket: "SAM-30",
        description: "Fixed chat attachment thumbnails on low-end devices.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-28",
        submittedBy: "Rohit Shetty",
        avatar: "RS",
        date: "2025-07-22",
        project: "Orion CRM",
        ticket: "ORM-27",
        description: "Added activity timeline to the deal detail view.",
        status: "Submitted",
        totalHours: 9,
    },
    {
        id: "dsr-29",
        submittedBy: "Manish Gupta",
        avatar: "MG",
        date: "2025-07-22",
        project: "CCA Dashboard",
        ticket: "CCA-9",
        description: "Improved export CSV formatting for finance review.",
        status: "Pending",
        totalHours: 6,
    },
    {
        id: "dsr-30",
        submittedBy: "Nidhi Shah",
        avatar: "NS",
        date: "2025-07-21",
        project: "DSR Portal",
        ticket: "DSR-25",
        description: "Drafted notification preferences screen and settings copy.",
        status: "Submitted",
        totalHours: 7,
    },
];

function aggregateHours(entries: DsrEntry[], key: "project" | "submittedBy") {
    const totals = new Map<string, number>();
    for (const entry of entries) {
        totals.set(entry[key], (totals.get(entry[key]) ?? 0) + entry.totalHours);
    }
    return [...totals.entries()]
        .map(([label, hours]) => ({ label, hours }))
        .sort((a, b) => b.hours - a.hours);
}
const palette = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#f43f5e", "#94a3b8"];

export interface HoursSlice {
    label: string;
    hours: number;
    color: string;
}

export const hoursByProject: HoursSlice[] = aggregateHours(dsrEntries, "project").map(
    (slice, i) => ({ ...slice, color: palette[i] }),
);

export function HoursDonut({
    title = "Hours by Project",
    slices = hoursByProject,
    delay = "delay-100",
}: HoursDonutProps) {
    const total = slices.reduce((sum, slice) => sum + slice.hours, 0);

    const gradient = slices
        .map((slice, i) => {
            const start = slices.slice(0, i).reduce((sum, s) => sum + (s.hours / total) * 100, 0);
            const end = start + (slice.hours / total) * 100;
            return `${slice.color} ${start}% ${end}%`;
        })
        .join(", ");

    return (
        <div className={cn("motion-safe:animate-fade-up rounded-xl border bg-card p-5", delay)}>
            <h3 className="text-sm font-medium">{title}</h3>
            <div className="mt-4 flex items-center gap-6">
                <div
                    className="motion-safe:animate-scale-in relative size-36 shrink-0 rounded-full"
                    style={{ background: `conic-gradient(${gradient})` }}
                >
                    <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-card">
                        <span className="text-xl font-semibold tabular-nums">{total}</span>
                        <span className="text-xs text-muted-foreground">hours</span>
                    </div>
                </div>
                <ul className="min-w-0 flex-1 space-y-1.5">
                    {slices.map((slice) => (
                        <li
                            key={slice.label}
                            className="flex items-center gap-2 rounded-md px-1 py-0.5 text-sm transition-colors hover:bg-muted/50"
                        >
                            <span
                                className="size-2.5 shrink-0 rounded-sm"
                                style={{ background: slice.color }}
                            />
                            <span className="min-w-0 flex-1 truncate">{slice.label}</span>
                            <span className="text-xs text-muted-foreground tabular-nums">
                                {slice.hours}h · {Math.round((slice.hours / total) * 100)}%
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
