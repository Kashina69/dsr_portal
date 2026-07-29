import { attendanceTrend } from "../dashboard.data";

export function AttendanceChart() {
    const max = Math.max(...attendanceTrend.map((d) => d.total));

    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-150 rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-medium">7-Day Attendance Trend</h3>
            <div className="flex items-end justify-between gap-2">
                {attendanceTrend.map((day, i) => {
                    const height = (day.present / max) * 100;
                    return (
                        <div
                            key={day.day}
                            className="group flex flex-1 flex-col items-center gap-1.5"
                        >
                            <span className="text-xs font-medium tabular-nums">{day.present}</span>
                            <div
                                className="motion-safe:animate-slide-right w-full rounded-t-md bg-primary transition-all group-hover:brightness-110"
                                style={{
                                    height: `${height}%`,
                                    minHeight: "4px",
                                    animationDelay: `${i * 60}ms`,
                                }}
                            />
                            <span className="text-xs text-muted-foreground">{day.day}</span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-sm bg-primary" />
                    <span>Present</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="size-2.5 rounded-sm bg-muted" />
                    <span>Absent / Leave</span>
                </div>
            </div>
        </div>
    );
}
