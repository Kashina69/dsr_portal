import { recentActivity } from "../dashboard.data";

function relativeTime(timestamp: string): string {
    return timestamp;
}

export function RecentActivity() {
    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-200 rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-medium">Recent Activity</h3>
            <div className="space-y-3">
                {recentActivity.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
                    >
                        <div className="relative mt-0.5">
                            <div className="size-2 rounded-full bg-primary" />
                            {item.unread && (
                                <div className="absolute inset-0 size-2 animate-ping rounded-full bg-primary/40" />
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm">
                                <span className="font-medium">{item.employeeName}</span>{" "}
                                {item.action}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {relativeTime(item.timestamp)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
