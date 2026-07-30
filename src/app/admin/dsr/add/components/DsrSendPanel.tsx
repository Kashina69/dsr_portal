"use client";

import { Paperclip, Send, Upload, X } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ccOptions, teamMembers } from "../../dsr.data";

interface DsrSendPanelProps {
    sendTo: string[];
    ccTo: string[];
    attachments: File[];
    onToggleSendTo: (email: string) => void;
    onToggleCcTo: (email: string) => void;
    onAddAttachment: (file: File) => void;
    onRemoveAttachment: (index: number) => void;
    onSubmit: () => void;
}

export function DsrSendPanel({
    sendTo,
    ccTo,
    attachments,
    onToggleSendTo,
    onToggleCcTo,
    onAddAttachment,
    onRemoveAttachment,
    onSubmit,
}: DsrSendPanelProps) {
    const fileRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <CardContent className="space-y-4">
                <Separator />
                <div>
                    <p className="mb-2 text-sm font-medium">Attachments</p>
                    <div
                        className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 p-4 transition-colors hover:border-primary/50"
                        onClick={() => fileRef.current?.click()}
                    >
                        <Upload className="size-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                            Drop files here or click to browse
                        </span>
                        <input
                            ref={fileRef}
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) onAddAttachment(file);
                            }}
                        />
                    </div>
                    {attachments.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {attachments.map((file, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs"
                                >
                                    <Paperclip className="size-3 text-muted-foreground" />
                                    {file.name}
                                    <button onClick={() => onRemoveAttachment(i)}>
                                        <X className="size-3 text-muted-foreground hover:text-foreground" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium">Send To</p>
                    <div className="flex flex-wrap gap-1.5">
                        {teamMembers.map((member) => {
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
                        {ccOptions.map((email) => {
                            const selected = ccTo.includes(email);
                            return (
                                <button
                                    key={email}
                                    onClick={() => onToggleCcTo(email)}
                                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                                        selected
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                    }`}
                                >
                                    {email}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <Button onClick={onSubmit} className="gap-2">
                    <Send className="size-4" />
                    Submit DSR
                </Button>
            </CardFooter>
        </>
    );
}
