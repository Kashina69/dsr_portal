"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface LeaveRequestFormProps {
    title: string;
    subtitle?: string;
    leaveTypes: string[];
}

const mockSendTo = [
    "Amaltas Singh",
    "Gaurav Verma",
    "Pallavi Ranjan",
    "Rohit Gupta",
    "Sachin Bhatia",
    "Sidhant Uppal",
    "Vikram Verma",
    "Mgmt",
    "Damanpreet Kaur",
    "Saunak Saha",
    "Shaveta Aggarwal",
    "Manish Chopra",
    "Ashish Khurana",
];

export function LeaveRequestForm({ title, subtitle, leaveTypes }: LeaveRequestFormProps) {
    const [selectedSendTo, setSelectedSendTo] = useState<string[]>(["Sachin Bhatia", "Mgmt"]);

    const toggleSendTo = (name: string) => {
        setSelectedSendTo((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
        );
    };

    return (
        <Card className="rounded-xl border shadow-sm bg-card">
            <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
            </div>

            <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Type Field */}
                    <div className="space-y-2">
                        <Label>
                            Type <span className="text-destructive">*</span>
                        </Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {leaveTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Reason Field */}
                    <div className="space-y-2">
                        <Label>
                            Reason <span className="text-destructive">*</span>
                        </Label>
                        <Input placeholder="Enter Reason" />
                    </div>

                    {/* Start Date Field */}
                    <div className="space-y-2">
                        <Label>
                            Start Date <span className="text-destructive">*</span>
                        </Label>
                        <Input type="date" />
                    </div>

                    {/* End Date Field */}
                    <div className="space-y-2">
                        <Label>
                            End Date <span className="text-destructive">*</span>
                        </Label>
                        <div className="flex gap-2">
                            <Input type="date" className="flex-1" />
                            <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90">
                                +
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Send To Field */}
                <div className="space-y-3 pt-2 border-t">
                    <Label className="text-sm font-semibold">Send To:</Label>
                    <div className="flex flex-wrap gap-x-4 gap-y-3">
                        {mockSendTo.map((name) => (
                            <div key={name} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`sendto-${name}`}
                                    checked={selectedSendTo.includes(name)}
                                    onCheckedChange={() => toggleSendTo(name)}
                                />
                                <Label
                                    htmlFor={`sendto-${name}`}
                                    className="text-sm font-normal text-muted-foreground cursor-pointer"
                                >
                                    {name}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add Cc Field */}
                <div className="space-y-3 pt-2 border-t">
                    <div className="flex items-center gap-3">
                        <Label className="text-sm font-semibold shrink-0">Add Cc:</Label>
                        <Select>
                            <SelectTrigger className="w-32 h-8">
                                <SelectValue placeholder="Add Cc" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="hr">HR Department</SelectItem>
                                <SelectItem value="manager">Reporting Manager</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button className="px-8">Submit</Button>
                </div>
            </CardContent>
        </Card>
    );
}
