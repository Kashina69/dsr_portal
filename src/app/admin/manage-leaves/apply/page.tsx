import { LeaveRequestForm } from "../components/LeaveRequestForm";

export default function ApplyLeavePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Apply Leave</h1>
                <p className="text-sm text-muted-foreground">Submit a request for time off.</p>
            </div>

            <LeaveRequestForm
                title="Apply Leave"
                leaveTypes={[
                    "Sick Leave",
                    "Casual Leave",
                    "Earned Leave",
                    "Maternity Leave",
                    "Paternity Leave",
                    "Compensatory Off",
                ]}
            />
        </div>
    );
}
