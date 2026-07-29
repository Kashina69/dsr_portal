import { AttendanceChart } from "./components/AttendanceChart";
import { DepartmentBreakdown } from "./components/DepartmentBreakdown";
import { EmployeeTable } from "./components/EmployeeTable";
import { RecentActivity } from "./components/RecentActivity";
import { StatCards } from "./components/StatCards";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                    Overview of your workforce — attendance, leaves, and activity.
                </p>
            </div>

            <StatCards />

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <EmployeeTable />
                </div>
                <div className="space-y-6">
                    <AttendanceChart />
                    <DepartmentBreakdown />
                </div>
            </div>

            <RecentActivity />
        </div>
    );
}
