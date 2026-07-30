"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { reportSubmitters } from "../../weekly-report.data";

interface ReportSendPanelProps {
    sendTo: string[];
    ccTo: string[];
    onToggleSendTo: (email: string) => void;
    onToggleCcTo: (email: string) => void;
    onSubmit: () => void;
    disabled: boolean;
}

export function ReportSendPanel({
    sendTo,
    ccTo,
    onToggleSendTo,
    onToggleCcTo,
    onSubmit,
    disabled,
}: ReportSendPanelProps) {
    return (
        <>
            <CardContent className="space-y-4">
                <Separator />
                <div>
                    <p className="mb-2 text-sm font-medium">Send To</p>
                    <div className="flex flex-wrap gap-1.5">
                        {reportSubmitters.map((member) => {
                            const selected = sendTo.includes(member.email);
                            return (
                                <button
                                    key={member.email}
                                    onClick={() => onToggleSendTo(member.email)}
                                    className={`flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                                        selected
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                    }`}
                                >
                                    <span className="flex size-4 items-center justify-center rounded-full bg-primary/20 text-[10px] font-medium">
                                        {member.avatar}
                                    </span>
                                    {member.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">CC</p>
                    <div className="flex flex-wrap gap-1.5">
                        {reportSubmitters.map((member) => {
                            const selected = ccTo.includes(member.email);
                            return (
                                <button
                                    key={member.email}
                                    onClick={() => onToggleCcTo(member.email)}
                                    className={`flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                                        selected
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                    }`}
                                >
                                    <span className="flex size-4 items-center justify-center rounded-full bg-primary/20 text-[10px] font-medium">
                                        {member.avatar}
                                    </span>
                                    {member.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <Button onClick={onSubmit} disabled={disabled} className="gap-2">
                    <Send className="size-4" />
                    Submit Report
                </Button>
            </CardFooter>
        </>
    );
}
