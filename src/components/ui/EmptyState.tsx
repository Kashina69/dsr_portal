import type { LucideIcon } from "lucide-react";
import { CalendarDays } from "lucide-react";

interface EmptyStateProps {
    icon?: LucideIcon;
    message: string;
}

export function EmptyState({ icon: Icon = CalendarDays, message }: EmptyStateProps) {
    return (
        <div className="flex h-full flex-col items-center justify-center text-center">
            <Icon className="mb-3 size-10 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    );
}
