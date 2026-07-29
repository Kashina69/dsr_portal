export function CardSkeleton() {
    return (
        <div className="rounded-xl border bg-card p-4">
            <div className="flex items-center justify-between">
                <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                <div className="size-8 animate-pulse rounded-lg bg-muted" />
            </div>
            <div className="mt-2 h-8 w-16 animate-pulse rounded bg-muted" />
            <div className="mt-1 h-3 w-20 animate-pulse rounded bg-muted" />
        </div>
    );
}

export function TableSkeleton() {
    return (
        <div className="rounded-xl border bg-card">
            <div className="flex items-center gap-3 border-b p-4">
                <div className="h-8 w-48 animate-pulse rounded bg-muted" />
                <div className="h-8 w-32 animate-pulse rounded bg-muted" />
            </div>
            <div className="space-y-3 p-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="size-8 animate-pulse rounded-full bg-muted" />
                        <div className="flex-1 space-y-1">
                            <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                            <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                        </div>
                        <div className="h-5 w-20 animate-pulse rounded-full bg-muted" />
                        <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                    </div>
                ))}
            </div>
        </div>
    );
}
