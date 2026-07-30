"use client";

import { useState } from "react";

import { mockSentDsrs } from "../dsr.data";
import type { Dsr } from "../dsr.types";
import { DsrDetailPanel } from "./components/DsrDetailPanel";
import { DsrListPanel } from "./components/DsrListPanel";

export default function SentDsrPage() {
    const [selected, setSelected] = useState<Dsr | null>(null);

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">Sent DSR</h1>
                <p className="text-sm text-muted-foreground">
                    View and track your submitted daily status reports.
                </p>
            </div>
            <div className="flex h-[calc(100vh-14rem)] gap-4">
                <div className="w-80 shrink-0 overflow-hidden rounded-xl border bg-card">
                    <DsrListPanel
                        dsrs={mockSentDsrs}
                        selectedId={selected?.id ?? null}
                        onSelect={setSelected}
                    />
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border bg-card">
                    <DsrDetailPanel dsr={selected} />
                </div>
            </div>
        </div>
    );
}
