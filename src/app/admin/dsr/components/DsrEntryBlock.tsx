import type { DsrEntry } from "@/app/admin/dsr/dsr.types";

interface DsrEntryBlockProps {
    entry: DsrEntry;
    isLast?: boolean;
}

export function DsrEntryBlock({ entry, isLast }: DsrEntryBlockProps) {
    return (
        <div className="relative pl-6">
            {!isLast && <div className="absolute bottom-0 left-[7px] top-6 w-px bg-border" />}
            <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-col gap-1.5 pb-4">
                <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                        {entry.projectName}
                    </span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        {entry.startTime} – {entry.endTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{entry.timeEstimate}</span>
                </div>
                <p className="text-sm text-muted-foreground">{entry.description}</p>
            </div>
        </div>
    );
}
