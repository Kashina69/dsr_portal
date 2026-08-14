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

import { attendanceData } from "./attendance-report.data";

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
