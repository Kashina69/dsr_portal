"use client";

import { Eye, Home, Plus, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { DataTable } from "@/components/global/DataTable";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { MOCK_DEVOPS_TICKETS } from "./devops-tickets.data";
import type { DevopsTicket } from "./devops-tickets.types";
import {
    DEVOPS_TICKET_PROJECTS,
    DEVOPS_TICKET_SEVERITIES,
    DEVOPS_TICKET_STATUSES,
} from "./devops-tickets.types";

const COLUMNS = [
    { header: "SR.NO", accessor: "srNo" as keyof DevopsTicket },
    { header: "EMP CODE", accessor: "empCode" as keyof DevopsTicket },
    { header: "EMP NAME", accessor: "empName" as keyof DevopsTicket },
    { header: "TICKET NO", accessor: "ticketNo" as keyof DevopsTicket },
    { header: "TICKET TITLE", accessor: "ticketTitle" as keyof DevopsTicket },
    { header: "PROJECT", accessor: "project" as keyof DevopsTicket },
    { header: "SEVERITY", accessor: "severity" as keyof DevopsTicket },
    { header: "CREATED DATE", accessor: "createdDate" as keyof DevopsTicket },
    {
        header: "STATUS",
        accessor: "status" as keyof DevopsTicket,
        render: (item: DevopsTicket) => (
            <div className="flex items-center gap-1.5 text-xs text-green-600">
                <div className="flex size-4 items-center justify-center rounded-full bg-green-500">
                    <div className="size-1.5 rounded-full bg-white" />
                </div>
                {item.status}
            </div>
        ),
    },
    { header: "ASSIGNED", accessor: "assigned" as keyof DevopsTicket },
    {
        header: "ACTION",
        accessor: "id" as keyof DevopsTicket,
        render: () => (
            <Button size="icon-xs" variant="secondary" className="h-6 w-6">
                <Eye className="size-3" />
            </Button>
        ),
    },
];

export default function DevopsTicketsPage() {
    const [tickets] = useState<DevopsTicket[]>(MOCK_DEVOPS_TICKETS);
    const [project, setProject] = useState("Select Project");
    const [severity, setSeverity] = useState("Select severity");
    const [status, setStatus] = useState("Select Status");
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filteredTickets = tickets.filter((t) => {
        if (project !== "Select Project" && project !== "All" && t.project !== project)
            return false;
        if (severity !== "Select severity" && severity !== "All" && t.severity !== severity)
            return false;
        if (status !== "Select Status" && status !== "All" && t.status !== status) return false;
        return true;
    });

    const total = filteredTickets.length;
    const pageCount = Math.ceil(total / rowsPerPage);
    const from = (page - 1) * rowsPerPage + 1;
    const to = Math.min(page * rowsPerPage, total);
    const rows = filteredTickets.slice(from - 1, to);

    const clearFilters = () => {
        setProject("Select Project");
        setSeverity("Select severity");
        setStatus("Select Status");
    };

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
                        <BreadcrumbPage>Devops Tickets</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-col">
                <div className="border-b p-4">
                    <h2 className="text-lg font-semibold text-primary">Tickets</h2>
                </div>

                <div className="flex flex-col items-center justify-end gap-3 border-b p-4 sm:flex-row">
                    <div className="w-full sm:w-[250px]">
                        <Select onValueChange={() => {}}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="14/08/2026 - 14/08/2026" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Today">Today</SelectItem>
                                <SelectItem value="Yesterday">Yesterday</SelectItem>
                                <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
                                <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                                <SelectItem value="This Month">This Month</SelectItem>
                                <SelectItem value="Last Month">Last Month</SelectItem>
                                <SelectItem value="Custom Range">Custom Range</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full sm:w-[250px]">
                        <Select value={project} onValueChange={(val) => setProject(val as string)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Project" />
                            </SelectTrigger>
                            <SelectContent>
                                {DEVOPS_TICKET_PROJECTS.map((proj) => (
                                    <SelectItem key={proj} value={proj}>
                                        {proj}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full sm:w-[200px]">
                        <Select
                            value={severity}
                            onValueChange={(val) => setSeverity(val as string)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                                {DEVOPS_TICKET_SEVERITIES.map((sev) => (
                                    <SelectItem key={sev} value={sev}>
                                        {sev}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full sm:w-[200px]">
                        <Select value={status} onValueChange={(val) => setStatus(val as string)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                {DEVOPS_TICKET_STATUSES.map((stat) => (
                                    <SelectItem key={stat} value={stat}>
                                        {stat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        size="icon"
                        variant="destructive"
                        className="shrink-0"
                        onClick={clearFilters}
                    >
                        <X className="size-4" />
                    </Button>
                    <Link href="/admin/devops-tickets/add">
                        <Button size="icon" className="shrink-0  hover:bg-[#009cae]">
                            <Plus className="size-4" />
                        </Button>
                    </Link>
                </div>

                <DataTable
                    columns={COLUMNS}
                    rows={rows}
                    emptyMessage="No record found"
                    emptySub=""
                    page={page}
                    pageCount={pageCount}
                    rowsPerPage={rowsPerPage}
                    from={total === 0 ? 0 : from}
                    to={to}
                    total={total}
                    onPageChange={setPage}
                    onRowsPerPageChange={(count) => {
                        setRowsPerPage(count);
                        setPage(1);
                    }}
                />
            </Card>
        </div>
    );
}
