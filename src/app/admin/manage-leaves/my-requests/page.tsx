"use client";

import { Eye, PieChart, X } from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const mockRequests = [
    { id: 1, from: "2026-08-21", to: "2026-08-21", shift: "Full day", status: "Approved" },
    { id: 2, from: "2026-07-31", to: "2026-07-31", shift: "Full day", status: "Approved" },
    {
        id: 3,
        from: "2026-07-20",
        to: "2026-07-20",
        shift: "Short leave\\n04:00 PM\\n06:00 PM",
        status: "Cancelled",
    },
    {
        id: 4,
        from: "2026-07-20",
        to: "2026-07-20",
        shift: "Short leave\\n04:30 PM\\n06:30 PM",
        status: "Approved",
    },
    { id: 5, from: "2026-06-23", to: "2026-06-23", shift: "Full day", status: "Approved" },
    { id: 6, from: "2026-05-29", to: "2026-05-29", shift: "Full day", status: "Approved" },
    { id: 7, from: "2026-05-15", to: "2026-05-15", shift: "Full day", status: "Approved" },
    { id: 8, from: "2026-04-13", to: "2026-04-17", shift: "Full day", status: "Approved" },
];

export default function MyLeaveRequestPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">My Leave Request</h1>
                    <p className="text-sm text-muted-foreground">
                        View and manage your leave requests.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        title="Total Assigned"
                        value="11"
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-blue-500"
                    />
                    <StatCard
                        title="Total Approved"
                        value="5.25"
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-emerald-500"
                    />
                    <StatCard
                        title="Total Floating"
                        value="1"
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-orange-500"
                    />
                    <StatCard
                        title="Extra Leave"
                        value="0"
                        icon={<PieChart className="h-5 w-5" />}
                        iconBgColor="bg-destructive"
                    />
                </div>
            </div>

            <Card className="rounded-xl border shadow-sm bg-card p-4 space-y-4">
                {/* Filters */}
                <div className="flex flex-wrap items-end gap-4">
                    <div className="space-y-1.5 flex-1 min-w-[150px]">
                        <Label className="text-xs font-semibold">From</Label>
                        <Input type="date" placeholder="From date" />
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-[150px]">
                        <Label className="text-xs font-semibold">To</Label>
                        <Input type="date" placeholder="End Date" />
                    </div>
                    <div className="space-y-1.5 flex-1 min-w-[150px]">
                        <Label className="text-xs font-semibold">Status</Label>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button className="px-6">Search</Button>
                        <Button
                            size="icon"
                            className="shrink-0 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                        >
                            <X className="size-4" />
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-md border">
                    <Table>
                        <TableHeader className="bg-muted/30">
                            <TableRow>
                                <TableHead className="w-[80px] font-semibold text-xs">
                                    SR.NO
                                </TableHead>
                                <TableHead className="font-semibold text-xs">FROM</TableHead>
                                <TableHead className="font-semibold text-xs">TO</TableHead>
                                <TableHead className="font-semibold text-xs">SHIFT</TableHead>
                                <TableHead className="font-semibold text-xs">STATUS</TableHead>
                                <TableHead className="text-right font-semibold text-xs">
                                    ACTIONS
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockRequests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell className="font-medium text-primary">
                                        {req.id}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {req.from}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {req.to}
                                    </TableCell>
                                    <TableCell className="text-muted-foreground whitespace-pre-wrap">
                                        {req.shift}
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            className={cn(
                                                "font-medium",
                                                req.status === "Approved"
                                                    ? "text-emerald-600"
                                                    : "text-destructive",
                                            )}
                                        >
                                            {req.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon-sm"
                                                className="h-6 w-6 text-blue-500 hover:text-blue-600"
                                            >
                                                <Eye className="size-3.5" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon-sm"
                                                className="h-6 w-6 text-destructive hover:text-destructive/90"
                                            >
                                                <X className="size-3.5" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
