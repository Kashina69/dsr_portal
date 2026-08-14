"use client";

import { Home, Plus } from "lucide-react";
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

import { MOCK_HARMONY_TICKETS } from "./harmony-tickets.data";
import type { HarmonyTicket } from "./harmony-tickets.types";
import { HARMONY_TICKET_CATEGORIES, HARMONY_TICKET_STATUSES } from "./harmony-tickets.types";

const COLUMNS = [
    { header: "EMP CODE", accessor: "empCode" as keyof HarmonyTicket },
    { header: "TICKET NO", accessor: "ticketNo" as keyof HarmonyTicket },
    { header: "CATEGORY NAME", accessor: "categoryName" as keyof HarmonyTicket },
    { header: "STATUS", accessor: "status" as keyof HarmonyTicket },
    { header: "ACTION", accessor: "id" as keyof HarmonyTicket }, // Action column
];

export default function HarmonyTicketsPage() {
    const [tickets] = useState<HarmonyTicket[]>(MOCK_HARMONY_TICKETS);
    const [category, setCategory] = useState("Select Category");
    const [status, setStatus] = useState("Select Status");
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filteredTickets = tickets.filter((t) => {
        if (category !== "Select Category" && category !== "All" && t.categoryName !== category)
            return false;
        if (status !== "Select Status" && status !== "All" && t.status !== status) return false;
        return true;
    });

    const total = filteredTickets.length;
    const pageCount = Math.ceil(total / rowsPerPage);
    const from = (page - 1) * rowsPerPage + 1;
    const to = Math.min(page * rowsPerPage, total);
    const rows = filteredTickets.slice(from - 1, to);

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
                        <BreadcrumbPage>Harmony Tickets</BreadcrumbPage>
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
                        <Select
                            value={category}
                            onValueChange={(val) => setCategory(val as string)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {HARMONY_TICKET_CATEGORIES.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
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
                                {HARMONY_TICKET_STATUSES.map((stat) => (
                                    <SelectItem key={stat} value={stat}>
                                        {stat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Link href="/admin/harmony-tickets/add">
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
