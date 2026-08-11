"use client";

import { type SubmitterInfo,SubmitterList } from "@/components/ui/SubmitterList";

import type { ReportSubmitter } from "../../weekly-report.types";

interface ReceivedSubmitterListProps {
    submitters: SubmitterInfo[];
    selectedId: string | null;
    onSelect: (submitter: ReportSubmitter) => void;
}

export { type SubmitterInfo };

export function ReceivedSubmitterList({
    submitters,
    selectedId,
    onSelect,
}: ReceivedSubmitterListProps) {
    return <SubmitterList submitters={submitters} selectedId={selectedId} onSelect={onSelect} />;
}
