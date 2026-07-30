import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusVariant = "pending" | "approved" | "rejected";

interface StatusBadgeProps {
    status: string;
    className?: string;
    variantMap?: Record<string, StatusVariant>;
}

const defaultVariants: Record<string, StatusVariant> = {
    Pending: "pending",
    Approved: "approved",
    Rejected: "rejected",
};

const variantStyles: Record<StatusVariant, string> = {
    pending: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/10",
    approved: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10",
    rejected: "bg-destructive/10 text-destructive hover:bg-destructive/10",
};

export function StatusBadge({ status, className, variantMap }: StatusBadgeProps) {
    const variant = (variantMap ?? defaultVariants)[status] ?? "pending";
    return (
        <Badge variant="secondary" className={cn(variantStyles[variant], className)}>
            {status}
        </Badge>
    );
}
