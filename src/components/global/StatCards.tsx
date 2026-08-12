import { Clock3, FolderKanban, Ticket, Users } from "lucide-react";

import { cn } from "@/lib/utils";

export type StatCardIcon = "users" | "folder" | "ticket" | "clock";

export interface StatCardItem {
    label: string;
    value: number;
    sub: string;
    icon: StatCardIcon;
    color: string;
    delay: string;
}

interface StatCardsProps {
    items: StatCardItem[];
}

const icons: Record<StatCardIcon, typeof Users> = {
    users: Users,
    folder: FolderKanban,
    ticket: Ticket,
    clock: Clock3,
};

export function StatCards({ items }: StatCardsProps) {
    return (
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {items.map((item) => {
                const Icon = icons[item.icon];
                return (
                    <div
                        key={item.label}
                        className={cn(
                            "motion-safe:animate-fade-up rounded-xl border bg-card p-4",
                            item.delay,
                        )}
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <div
                                className={cn(
                                    "flex size-8 items-center justify-center rounded-lg",
                                    item.color,
                                )}
                            >
                                <Icon className="size-4" />
                            </div>
                        </div>
                        <p className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
                            {item.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                );
            })}
        </div>
    );
}
