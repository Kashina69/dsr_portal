"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const attendanceData = [
    {
        date: "12-08-2026",
        timeIn: "12-08-2026 9:32 AM",
        timeOut: "-",
        workingHours: "-",
        status: "Working",
    },
    {
        date: "11-08-2026",
        timeIn: "11-08-2026 9:24 AM",
        timeOut: "-",
        workingHours: "-",
        status: "Absent",
    },
    {
        date: "10-08-2026",
        timeIn: "10-08-2026 9:38 AM",
        timeOut: "10-08-2026 7:08 PM",
        workingHours: "09:29:14",
        status: "Present",
    },
    {
        date: "07-08-2026",
        timeIn: "07-08-2026 9:41 AM",
        timeOut: "-",
        workingHours: "-",
        status: "Absent",
    },
    {
        date: "06-08-2026",
        timeIn: "06-08-2026 9:42 AM",
        timeOut: "06-08-2026 7:04 PM",
        workingHours: "09:22:07",
        status: "Present",
    },
    {
        date: "05-08-2026",
        timeIn: "05-08-2026 9:42 AM",
        timeOut: "05-08-2026 7:35 PM",
        workingHours: "09:52:53",
        status: "Present",
    },
    {
        date: "04-08-2026",
        timeIn: "04-08-2026 10:33 AM",
        timeOut: "04-08-2026 7:07 PM",
        workingHours: "08:33:30",
        status: "Present",
    },
    {
        date: "03-08-2026",
        timeIn: "03-08-2026 9:33 AM",
        timeOut: "03-08-2026 6:46 PM",
        workingHours: "09:13:15",
        status: "Present",
    },
    {
        date: "30-07-2026",
        timeIn: "30-07-2026 9:46 AM",
        timeOut: "30-07-2026 7:55 PM",
        workingHours: "10:08:30",
        status: "Present",
    },
    {
        date: "29-07-2026",
        timeIn: "29-07-2026 9:34 AM",
        timeOut: "29-07-2026 6:41 PM",
        workingHours: "09:07:29",
        status: "Present",
    },
];

export default function AttendanceReportPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Attendance</h1>
                    <p className="text-sm text-muted-foreground">
                        View your attendance history and working hours.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Input placeholder="Date Range" className="w-[240px]" />
                    <Button>Export</Button>
                </div>
            </div>

            <Card className="rounded-xl border shadow-sm bg-card overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/30">
                            <TableRow>
                                <TableHead className="font-semibold text-xs">DATE</TableHead>
                                <TableHead className="font-semibold text-xs">TIME IN</TableHead>
                                <TableHead className="font-semibold text-xs">TIME OUT</TableHead>
                                <TableHead className="font-semibold text-xs">
                                    TOTAL WORKING HOURS
                                </TableHead>
                                <TableHead className="font-semibold text-xs">STATUS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attendanceData.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="font-medium text-foreground">
                                        {row.date}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {row.timeIn}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {row.timeOut}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {row.workingHours}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={cn(
                                                    "w-1.5 h-1.5 rounded-full shrink-0",
                                                    row.status === "Present"
                                                        ? "bg-emerald-500"
                                                        : "bg-destructive",
                                                )}
                                            />
                                            <span className="font-medium text-foreground">
                                                {row.status}
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="py-4 flex items-center justify-center gap-1 border-t">
                    <Button variant="outline" size="icon" className="w-8 h-8">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="default" size="icon" className="w-8 h-8">
                        1
                    </Button>
                    <Button variant="outline" size="icon" className="w-8 h-8">
                        2
                    </Button>
                    <Button variant="outline" size="icon" className="w-8 h-8">
                        3
                    </Button>
                    <Button variant="outline" size="icon" className="w-8 h-8 hidden sm:flex">
                        4
                    </Button>
                    <Button variant="outline" size="icon" className="w-8 h-8 hidden sm:flex">
                        5
                    </Button>
                    <span className="text-muted-foreground px-2">...</span>
                    <Button variant="outline" size="icon" className="w-8 h-8">
                        13
                    </Button>
                    <Button variant="outline" size="icon" className="w-8 h-8">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
