"use client";

import { Home, X } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { DEVOPS_TICKET_PROJECTS, DEVOPS_TICKET_SEVERITIES } from "../devops-tickets.types";

export default function AddDevopsTicketPage() {
    const [project, setProject] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
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
        if (!project || !title || !description) {
            alert("Please fill in required fields.");
            return;
        }
        alert("Devops Ticket submitted successfully!");
        setProject("");
        setTitle("");
        setDescription("");
        setSeverity("");
        setFiles([]);
    };

    // Filter out "Select Project" and "All"
    const addProjects = DEVOPS_TICKET_PROJECTS.filter((p) => p !== "Select Project");
    const addSeverities = DEVOPS_TICKET_SEVERITIES.filter((s) => s !== "All");

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
                        <BreadcrumbLink href="/admin/devops-tickets">Devops Tickets</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add Devops Ticket</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-col">
                <div className="border-b p-4">
                    <h2 className="text-lg font-semibold">Add Devops Ticket</h2>
                </div>

                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Please select a project<span className="text-destructive">*</span>
                        </label>
                        <Select value={project} onValueChange={(val) => setProject(val || "")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Project" />
                            </SelectTrigger>
                            <SelectContent>
                                {addProjects.map((proj) => (
                                    <SelectItem key={proj} value={proj}>
                                        {proj}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Title<span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setTitle(e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Enter description<span className="text-destructive">*</span>
                        </label>
                        <textarea
                            placeholder="Enter Description"
                            className="min-h-[150px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={description}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setDescription(e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Please select severity level</label>
                        <Select value={severity} onValueChange={(val) => setSeverity(val || "")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Medium" />
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
                            Please upload ticket attachment{" "}
                            <span className="font-normal italic text-muted-foreground">
                                Only images, Word, and PDF files are allowed.
                            </span>
                            <br />
                            <span className="font-normal italic text-muted-foreground">
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
