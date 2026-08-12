"use client";

import { type SubmitterInfo, SubmitterList } from "@/components/ui/SubmitterList";

import type { DsrSubmitter } from "../../dsr.types";

interface ReceivedDsrListProps {
    submitters: SubmitterInfo[];
    selectedId: string | null;
    onSelect: (submitter: DsrSubmitter) => void;
}

export function ReceivedDsrList({ submitters, selectedId, onSelect }: ReceivedDsrListProps) {
    return <SubmitterList submitters={submitters} selectedId={selectedId} onSelect={onSelect} />;
}
