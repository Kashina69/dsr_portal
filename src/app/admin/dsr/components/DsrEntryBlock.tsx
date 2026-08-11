import type { DsrEntry } from "@/app/admin/dsr/dsr.types";
import { EntryBlock } from "@/components/ui/EntryBlock";

interface DsrEntryBlockProps {
    entry: DsrEntry;
    isLast?: boolean;
}

export type { DsrEntryBlockProps };

export function DsrEntryBlock({ entry, isLast }: DsrEntryBlockProps) {
    return <EntryBlock entry={entry} isLast={isLast} showTimeSlot />;
}
