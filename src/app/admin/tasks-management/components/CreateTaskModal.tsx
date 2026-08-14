"use client";

import { X } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface CreateTaskModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CreateTaskModal({ open, onOpenChange }: CreateTaskModalProps) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignToSomeoneElse, setAssignToSomeoneElse] = useState(false);
    const [assignee, setAssignee] = useState("");
    const [startDate, setStartDate] = useState("2026-08-15");
    const [startTime, setStartTime] = useState("00:30");
    const [endDate, setEndDate] = useState("2026-08-15");
    const [endTime, setEndTime] = useState("01:00");
    const [fileName, setFileName] = useState("");
    const [notes, setNotes] = useState("");

    if (!open) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSave = () => {
        if (!title || !description) {
            alert("Title and description are required.");
            return;
        }
        alert("Task created successfully!");
        onOpenChange(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="flex w-full max-w-[600px] flex-col rounded-lg bg-background shadow-lg">
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-base font-semibold">Create Task</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onOpenChange(false)}
                        className="h-6 w-6"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto p-4 sm:p-6">
                    {/* Title */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">
                            Title<span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">
                            Description<span className="text-destructive">*</span>
                        </label>
                        <textarea
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Assign Users */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-medium text-destructive">
                            Assign Users*
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={assignToSomeoneElse}
                                onChange={(e) => setAssignToSomeoneElse(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium">Assign to Someone Else</span>
                        </div>
                        {assignToSomeoneElse && (
                            <Select
                                value={assignee}
                                onValueChange={(val) => setAssignee(val || "")}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select users..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="user1">John Doe</SelectItem>
                                    <SelectItem value="user2">Jane Smith</SelectItem>
                                    <SelectItem value="user3">Prince Rawat</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    </div>

                    {/* Start Date / Time */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">Start Date/Time</label>
                        <div className="flex gap-4">
                            <Input
                                type="date"
                                className="flex-1"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <Input
                                type="time"
                                className="flex-1"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* End Date / Time */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">End Date/Time</label>
                        <div className="flex gap-4">
                            <Input
                                type="date"
                                className="flex-1"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                            <Input
                                type="time"
                                className="flex-1"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Upload File */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">Upload File</label>
                        <div className="flex items-center gap-3 rounded-md border px-3 py-2 shadow-sm">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => fileRef.current?.click()}
                            >
                                Choose file
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                {fileName || "No file chosen"}
                            </span>
                            <input
                                ref={fileRef}
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium">Notes</label>
                        <textarea
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 border-t p-4">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                    <Button className="bg-[#00b5c5] hover:bg-[#009cae]" onClick={handleSave}>
                        Save Task
                    </Button>
                </div>
            </div>
        </div>
    );
}
