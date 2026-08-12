import { cn } from "@/lib/utils";

export interface HoursSlice {
    label: string;
    hours: number;
    color: string;
}

interface HoursDonutProps {
    title: string;
    slices: HoursSlice[];
    delay?: string;
}

export function HoursDonut({ title, slices, delay = "delay-100" }: HoursDonutProps) {
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
