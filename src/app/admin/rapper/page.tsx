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
import { Card, CardContent } from "@/components/ui/card";

import { columns, MOCK_RAPPER_RECORDS } from "./rapper.data";
import type { RapperRecord } from "./rapper.types";

export default function RapperPage() {
    const [records] = useState<RapperRecord[]>(MOCK_RAPPER_RECORDS);

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
                        <BreadcrumbPage>Rapper</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-col">
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-lg font-semibold">Rapper</h2>
                </div>

                <div className="flex justify-end p-4">
                    <Link href="/admin/rapper/add">
                        <Button size="icon" className="h-8 w-8 shrink-0  hover:bg-[#009cae]">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <CardContent className="p-0">
                    <DataTable
                        columns={columns}
                        rows={records}
                        emptyMessage="No record found"
                        emptySub=""
                        page={1}
                        pageCount={0}
                        rowsPerPage={10}
                        from={0}
                        to={0}
                        total={0}
                        onPageChange={() => {}}
                        onRowsPerPageChange={() => {}}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
