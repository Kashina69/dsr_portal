"use client";

import { CalendarDays, Check, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { WeeklyReportDetail } from "@/components/ui/WeeklyReportDetail";

import type { ReceivedWeeklyReport } from "../../weekly-report.types";

interface ReceivedReportDetailProps {
    report: ReceivedWeeklyReport | null;
}

export function ReceivedReportDetail({ report }: ReceivedReportDetailProps) {
    const [localStatus, setLocalStatus] = useState(report?.status);
    const [rejectOpen, setRejectOpen] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    if (!report) {
        return (
            <div className="flex size-full flex-col items-center justify-center text-center">
                <CalendarDays className="mb-3 size-10 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground">Select a report to view details</p>
            </div>
        );
    }

    const status = localStatus ?? report.status;

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
        <div className="flex size-full flex-col">
            <Card className="flex size-full flex-col border-none shadow-none">
                <WeeklyReportDetail
                    weekLabel={report.weekLabel}
                    status={status}
                    submittedAt={report.sharedAt}
                    entries={report.entries}
                    sendTo={report.sendTo}
                    ccTo={report.ccTo}
                    rejectionReason={report.rejectionReason}
                    submittedBy={{ name: report.submittedBy.name }}
                />
                <div className="flex gap-2 border-t px-6 py-4">
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
                <div className="space-y-2 border-t px-6 py-3">
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
            </Card>

            <Sheet open={rejectOpen} onOpenChange={setRejectOpen}>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <SheetTitle>Reject Report</SheetTitle>
                        <SheetDescription>
                            Provide a reason for rejecting this weekly report.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-4">
                        <textarea
                            className="h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="e.g., Entries need more detail, missing project context..."
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
