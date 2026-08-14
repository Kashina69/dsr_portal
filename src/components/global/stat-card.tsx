import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title?: string;
    value?: string;
    icon: React.ReactNode;
    iconBgColor: string;
    customContent?: React.ReactNode;
}

export function StatCard({ title, value, icon, iconBgColor, customContent }: StatCardProps) {
    return (
        <Card className="bg-card rounded-lg p-4 shadow-sm border flex flex-row items-center justify-between">
            <div className="flex-1 flex flex-col justify-center gap-1">
                {customContent ? (
                    customContent
                ) : (
                    <>
                        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            {title}
                        </h4>
                        <p className="text-2xl font-bold text-foreground">{value}</p>
                    </>
                )}
            </div>
            <div
                className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary-foreground ml-4",
                    iconBgColor,
                )}
            >
                {icon}
            </div>
        </Card>
    );
}
