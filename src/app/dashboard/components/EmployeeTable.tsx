"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

import { employees } from "../dashboard.data";
import type { Department, EmployeeStatus } from "../dashboard.types";

const statusVariant: Record<EmployeeStatus, "default" | "secondary" | "destructive"> = {
    Present: "default",
    "On Leave": "secondary",
    Absent: "destructive",
};

export function EmployeeTable() {
    const [search, setSearch] = useState("");
    const [deptFilter, setDeptFilter] = useState<Department | "all">("all");

    const filtered = employees.filter((emp) => {
        const matchSearch =
            emp.name.toLowerCase().includes(search.toLowerCase()) ||
            emp.email.toLowerCase().includes(search.toLowerCase());
        const matchDept = deptFilter === "all" || emp.department === deptFilter;
        return matchSearch && matchDept;
    });

    return (
        <div className="motion-safe:animate-fade-up motion-safe:delay-300 rounded-xl border bg-card">
            <div className="flex items-center gap-3 border-b p-4">
                <Input
                    placeholder="Search employees..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-8 max-w-xs"
                />
                <Select
                    value={deptFilter}
                    onValueChange={(v) => setDeptFilter(v as Department | "all")}
                >
                    <SelectTrigger className="h-8 w-40">
                        <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="HR">HR</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                    </SelectContent>
                </Select>
                <p className="ml-auto text-xs text-muted-foreground">{filtered.length} employees</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Check-in</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filtered.map((emp, i) => (
                        <TableRow
                            key={emp.id}
                            className="motion-safe:animate-fade-up transition-colors hover:bg-muted/50"
                            style={{ animationDelay: `${i * 30}ms` }}
                        >
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                                        {emp.avatar}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{emp.name}</p>
                                        <p className="text-xs text-muted-foreground">{emp.email}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">{emp.department}</span>
                            </TableCell>
                            <TableCell>
                                <Badge variant={statusVariant[emp.status]}>{emp.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <span className="text-sm tabular-nums">
                                    {emp.checkInTime ?? "—"}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
