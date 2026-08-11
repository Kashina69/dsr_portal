import { DsrExplorer } from "./components/DsrExplorer";
import { HoursDonut } from "./components/HoursDonut";
import { StatCards } from "./components/StatCards";
import { hoursByEmployee, hoursByProject } from "./dashboard.data";

export default function DashboardPage() {
    return (
        <div className="space-y-5">
            <StatCards />
            <div className="grid gap-5 lg:grid-cols-2">
                <HoursDonut title="Hours by Project" slices={hoursByProject} delay="delay-100" />
                <HoursDonut title="Hours by Employee" slices={hoursByEmployee} delay="delay-150" />
            </div>
            <DsrExplorer />
        </div>
    );
}
