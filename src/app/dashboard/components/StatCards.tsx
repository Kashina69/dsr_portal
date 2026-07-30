import { Clock3, FolderKanban, Ticket, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { statItems } from "../dashboard.data";
import type { StatIcon } from "../dashboard.types";

const icons: Record<StatIcon, typeof Users> = {
    users: Users,
    folder: FolderKanban,
    ticket: Ticket,
    clock: Clock3,
};

export function StatCards() {
    return (
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {statItems.map((item) => {
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
