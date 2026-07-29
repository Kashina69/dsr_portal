import { cn } from "@/lib/utils";

import { statItems } from "../dashboard.data";

export function StatCards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statItems.map((item) => (
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
                            <span className="text-lg font-bold">{item.value}</span>
                        </div>
                    </div>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
                </div>
            ))}
        </div>
    );
}
