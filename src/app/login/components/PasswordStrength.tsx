import { cn } from "@/lib/utils";

import type { PasswordStrength } from "../login.types";

const strengthConfig: Record<
    NonNullable<PasswordStrength>,
    { label: string; color: string; width: string }
> = {
    "too easy": { label: "Too easy", color: "bg-destructive", width: "w-1/4" },
    diff: { label: "Fair", color: "bg-amber-500", width: "w-2/4" },
    strong: { label: "Strong", color: "bg-emerald-500", width: "w-full" },
};

export function PasswordStrengthIndicator({ strength }: { strength: PasswordStrength }) {
    if (!strength) return null;

    const config = strengthConfig[strength];

    return (
        <div className="space-y-1">
            <div className="flex h-1.5 gap-1">
                <div
                    className={cn("h-full rounded-full transition-all", config.color, config.width)}
                />
            </div>
            <p className="text-xs text-muted-foreground">
                Password strength: <span className="font-medium">{config.label}</span>
            </p>
        </div>
    );
}
