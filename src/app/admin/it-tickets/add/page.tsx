"use client";

import { Home, Upload, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { IT_TICKET_CATEGORIES, IT_TICKET_SEVERITIES } from "../it-tickets.types";

export default function AddITTicketPage() {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [severity, setSeverity] = useState("Medium");
    const [files, setFiles] = useState<File[]>([]);
    const fileRef = useRef<HTMLInputElement>(null);

    const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        if (files.length + selectedFiles.length > 10) {
            alert("Maximum 10 files allowed.");
            return;
        }
        setFiles([...files, ...selectedFiles]);
    };

    const handleRemoveFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        // Mock submission
        if (!description || !category) {
            alert("Please fill in required fields.");
            return;
        }
        alert("Ticket submitted successfully!");
        setDescription("");
        setCategory("");
        setSeverity("Medium");
        setFiles([]);
    };

    // Filter out "All" from categories for the add form
    const addCategories = IT_TICKET_CATEGORIES.filter((c) => c !== "All");
    const addSeverities = IT_TICKET_SEVERITIES.filter((s) => s !== "All");

    return (
        <div className="flex flex-col gap-4 p-4 sm:p-6 lg:p-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/dashboard">
                            <Home className="size-4" />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/it-tickets">IT Tickets</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add IT Ticket</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-col">
                <div className="border-b p-4">
                    <h2 className="text-lg font-semibold">Add IT Ticket</h2>
                </div>

                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Please select a category<span className="text-destructive">*</span>
                        </label>
                        <Select
                            value={category}
                            onValueChange={(val) => setCategory(val as string)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {addCategories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Enter description<span className="text-destructive">*</span>
                        </label>
                        <textarea
                            placeholder="Enter Description"
                            className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={description}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setDescription(e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Please select severity level</label>
                        <Select
                            value={severity}
                            onValueChange={(val) => setSeverity(val as string)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                                {addSeverities.map((sev) => (
                                    <SelectItem key={sev} value={sev}>
                                        {sev}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Please upload ticket attachment
                            <br />
                            <span className="text-xs italic text-muted-foreground">
                                (Maximum files : 10)
                            </span>
                        </label>
                        <div
                            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/30 p-10 text-center transition-colors hover:border-primary/50"
                            onClick={() => fileRef.current?.click()}
                        >
                            <span className="text-sm text-muted-foreground">
                                Drag & Drop your files or Browse
                            </span>
                            <input
                                ref={fileRef}
                                type="file"
                                className="hidden"
                                multiple
                                onChange={handleAddFile}
                            />
                        </div>

                        {files.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {files.map((file, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs"
                                    >
                                        {file.name}
                                        <button onClick={() => handleRemoveFile(i)}>
                                            <X className="size-3 text-muted-foreground hover:text-foreground" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <Button
                            className="bg-[#00b5c5] px-8 hover:bg-[#009cae]"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
