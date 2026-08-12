import type { ReportEntry } from "@/types/report.type";

interface EntryBlockProps {
    entry: ReportEntry;
    isLast?: boolean;
    showTimeSlot?: boolean;
}

export function EntryBlock({ entry, isLast, showTimeSlot = false }: EntryBlockProps) {
    return (
        <div className="relative pl-6">
            {!isLast && <div className="absolute bottom-0 left-[7px] top-6 w-px bg-border" />}
            <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-col gap-1.5 pb-4">
                <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                        {entry.projectName}
                    </span>
                    {showTimeSlot && entry.startTime && entry.endTime && (
                        <>
                            <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                                {entry.startTime} – {entry.endTime}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {entry.timeEstimate}
                            </span>
                        </>
                    )}
                </div>
                <p className="text-sm text-muted-foreground">{entry.description}</p>
            </div>
        </div>
    );
}
