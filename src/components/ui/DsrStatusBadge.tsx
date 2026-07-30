import type { DsrStatus } from "@/app/admin/dsr/dsr.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DsrStatusBadgeProps {
    status: DsrStatus;
    className?: string;
}

const statusStyles: Record<DsrStatus, string> = {
    Pending: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/10",
    Approved: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10",
    Rejected: "bg-destructive/10 text-destructive hover:bg-destructive/10",
};

export function DsrStatusBadge({ status, className }: DsrStatusBadgeProps) {
    return (
        <Badge variant="secondary" className={cn(statusStyles[status], className)}>
            {status}
        </Badge>
    );
}
