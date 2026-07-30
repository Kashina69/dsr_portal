import { CheckCircle2, Clock, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface StatusStats {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
}

interface ReceivedDsrStatusBarProps {
    stats: StatusStats;
}

const statItems = [
    {
        key: "total" as const,
        label: "Total",
        icon: null,
        color: "bg-indigo-500/10 text-indigo-600",
    },
    {
        key: "pending" as const,
        label: "Pending",
        icon: Clock,
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        key: "approved" as const,
        label: "Approved",
        icon: CheckCircle2,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        key: "rejected" as const,
        label: "Rejected",
        icon: XCircle,
        color: "bg-destructive/10 text-destructive",
    },
];

export function ReceivedDsrStatusBar({ stats }: ReceivedDsrStatusBarProps) {
    return (
        <div className="grid grid-cols-4 gap-3">
            {statItems.map(({ key, label, icon: Icon, color }) => (
                <div
                    key={key}
                    className="motion-safe:animate-fade-up flex items-center gap-3 rounded-xl border bg-card p-3"
                >
                    <div
                        className={cn("flex size-9 items-center justify-center rounded-lg", color)}
                    >
                        {Icon ? (
                            <Icon className="size-4" />
                        ) : (
                            <span className="text-sm font-bold">{stats[key]}</span>
                        )}
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{stats[key]}</p>
                        <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
