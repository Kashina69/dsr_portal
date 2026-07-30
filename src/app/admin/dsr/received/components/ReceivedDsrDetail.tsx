"use client";

import { AlertCircle, CalendarDays, Check, Mail, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DsrEntryBlock } from "../../components/DsrEntryBlock";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import type { ReceivedDsr } from "../../dsr.types";

interface ReceivedDsrDetailProps {
    dsr: ReceivedDsr | null;
}

export function ReceivedDsrDetail({ dsr }: ReceivedDsrDetailProps) {
    const [localStatus, setLocalStatus] = useState(dsr?.status);
    const [rejectOpen, setRejectOpen] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    if (!dsr) {
        return (
            <div className="flex h-full flex-col items-center justify-center text-center">
                <CalendarDays className="mb-3 size-10 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground">Select a DSR to view details</p>
            </div>
        );
    }

    const status = localStatus ?? dsr.status;

    const dateStr = new Date(dsr.date + "T00:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleApprove = () => setLocalStatus("Approved");
    const handleReject = () => {
        setRejectOpen(false);
        if (rejectReason.trim()) {
            setLocalStatus("Rejected");
        }
    };

    const addComment = () => {
        if (newComment.trim()) {
            setComments((prev) => [...prev, newComment.trim()]);
            setNewComment("");
        }
    };

    return (
        <div className="flex h-full flex-col overflow-auto">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-lg">{dateStr}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Submitted by {dsr.submittedBy.name}
                        </p>
                    </div>
                    <StatusBadge status={status} />
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-1">
                {status === "Rejected" && (
                    <div className="mb-4 flex gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                        <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                        <p className="text-sm text-destructive">
                            {dsr.rejectionReason || rejectReason || "Rejected"}
                        </p>
                    </div>
                )}
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Entries
                </p>
                {dsr.entries.map((entry, i) => (
                    <DsrEntryBlock
                        key={entry.id}
                        entry={entry}
                        isLast={i === dsr.entries.length - 1}
                    />
                ))}
            </CardContent>
            <CardFooter className="flex flex-col gap-3 border-t pt-4">
                {dsr.sendTo.length > 0 && (
                    <div className="flex w-full items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-4" />
                        <span className="font-medium text-foreground">Send To:</span>
                        {dsr.sendTo.join(", ")}
                    </div>
                )}
                {dsr.ccTo.length > 0 && (
                    <div className="flex w-full items-center gap-2 text-sm text-muted-foreground">
                        <span className="ml-6 font-medium text-foreground">CC:</span>
                        {dsr.ccTo.join(", ")}
                    </div>
                )}
                <div className="flex w-full gap-2">
                    <Button
                        variant="outline"
                        className="flex-1 gap-2 border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                        onClick={handleApprove}
                        disabled={status !== "Pending"}
                    >
                        <Check className="size-4" />
                        Approve
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 gap-2 border-destructive/50 text-destructive hover:bg-destructive/10"
                        onClick={() => setRejectOpen(true)}
                        disabled={status !== "Pending"}
                    >
                        <X className="size-4" />
                        Reject
                    </Button>
                </div>
                <div className="w-full space-y-2 border-t pt-3">
                    <p className="text-xs font-medium text-muted-foreground">Comments</p>
                    {comments.map((c, i) => (
                        <div key={i} className="rounded-md bg-muted/50 px-3 py-1.5 text-sm">
                            {c}
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <Input
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") addComment();
                            }}
                            className="h-8 text-sm"
                        />
                        <Button size="sm" variant="ghost" onClick={addComment}>
                            Post
                        </Button>
                    </div>
                </div>
            </CardFooter>

            <Sheet open={rejectOpen} onOpenChange={setRejectOpen}>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <SheetTitle>Reject DSR</SheetTitle>
                        <SheetDescription>
                            Provide a reason for rejecting this DSR.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-4">
                        <textarea
                            className="h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="e.g., Entries are too vague, missing time estimates..."
                            value={rejectReason}
                            onChange={(e) => setRejectReason(e.target.value)}
                        />
                    </div>
                    <SheetFooter className="mt-4">
                        <Button variant="outline" onClick={() => setRejectOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleReject}>
                            Reject
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}
