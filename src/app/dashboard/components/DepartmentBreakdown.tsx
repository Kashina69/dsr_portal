import { departmentCounts, deptColors } from "../dashboard.data";

export function DepartmentBreakdown() {
    const maxCount = Math.max(...Object.values(departmentCounts));

    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-100 rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-medium">Departments</h3>
            <div className="space-y-3">
                {Object.entries(departmentCounts).map(([dept, count]) => (
                    <div key={dept} className="group">
                        <div className="mb-1 flex items-center justify-between text-sm">
                            <span>{dept}</span>
                            <span className="font-medium tabular-nums">{count}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-muted">
                            <div
                                className={`motion-safe:animate-slide-right h-full rounded-full transition-all group-hover:brightness-110 ${deptColors[dept]}`}
                                style={{
                                    width: `${(count / maxCount) * 100}%`,
                                    animationDelay: "100ms",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
