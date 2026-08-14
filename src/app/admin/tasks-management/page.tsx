"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar-overrides.css";

import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale";
import { Home } from "lucide-react";
import { useState } from "react";
import { Calendar, dateFnsLocalizer, type ToolbarProps, Views } from "react-big-calendar";

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

import { CreateTaskModal } from "./components/CreateTaskModal";
import { MOCK_TASK_EVENTS } from "./task-management.data";
import type { TaskEvent } from "./task-management.types";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const CustomToolbar = (toolbar: ToolbarProps<TaskEvent>) => {
    const goToBack = () => {
        toolbar.onNavigate("PREV");
    };
    const goToNext = () => {
        toolbar.onNavigate("NEXT");
    };
    const goToCurrent = () => {
        toolbar.onNavigate("TODAY");
    };

    const isMonth = toolbar.view === Views.MONTH;
    const isWeek = toolbar.view === Views.WEEK;
    const isAgenda = toolbar.view === Views.AGENDA;

    return (
        <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{toolbar.label}</h2>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" onClick={goToBack} className="h-8 w-8">
                        {"<"}
                    </Button>
                    <Button variant="outline" size="icon" onClick={goToNext} className="h-8 w-8">
                        {">"}
                    </Button>
                </div>
                <Button variant="outline" size="sm" onClick={goToCurrent} className="h-8 px-4">
                    Today
                </Button>
                <div className="flex items-center overflow-hidden rounded-md border">
                    <button
                        onClick={() => toolbar.onView(Views.MONTH)}
                        className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                            isMonth
                                ? "bg-[#00b5c5] text-primary-foreground"
                                : "bg-background hover:bg-muted"
                        }`}
                    >
                        Month
                    </button>
                    <button
                        onClick={() => toolbar.onView(Views.WEEK)}
                        className={`border-l px-4 py-1.5 text-sm font-medium transition-colors ${
                            isWeek
                                ? "bg-[#00b5c5] text-primary-foreground"
                                : "bg-background hover:bg-muted"
                        }`}
                    >
                        Week
                    </button>
                    <button
                        onClick={() => toolbar.onView(Views.AGENDA)}
                        className={`border-l px-4 py-1.5 text-sm font-medium transition-colors ${
                            isAgenda
                                ? "bg-[#00b5c5] text-primary-foreground"
                                : "bg-background hover:bg-muted"
                        }`}
                    >
                        List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function TasksManagementPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Hardcode the default date to match screenshot week of Aug 9 2026
    const [defaultDate] = useState(new Date(2026, 7, 10));

    const eventStyleGetter = (event: TaskEvent) => {
        let backgroundColor = "#3b82f6";
        if (event.title.includes("Birthday")) {
            backgroundColor = "#4682b4"; // slate blue/cyan
        } else if (event.title.includes("Work Anniversary")) {
            backgroundColor = "#a855f7"; // purple
        }

        return {
            style: {
                backgroundColor,
                border: "none",
                borderRadius: "4px",
                padding: "2px 5px",
                color: "white",
                fontSize: "12px",
                fontWeight: 500,
            },
        };
    };

    return (
        <div className="flex h-full flex-col gap-4 p-4 sm:p-6 lg:p-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/dashboard">
                            <Home className="size-4" />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Task Management</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-1 flex-col overflow-hidden">
                <CardContent className="flex-1 p-6">
                    <Calendar
                        localizer={localizer}
                        events={MOCK_TASK_EVENTS}
                        defaultView={Views.WEEK}
                        views={[Views.MONTH, Views.WEEK, Views.AGENDA]}
                        defaultDate={defaultDate}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: "calc(100vh - 250px)", minHeight: "600px" }}
                        components={{
                            toolbar: CustomToolbar,
                        }}
                        eventPropGetter={eventStyleGetter}
                        onSelectEvent={() => setIsModalOpen(true)}
                        onSelectSlot={() => setIsModalOpen(true)}
                        selectable
                    />
                </CardContent>
            </Card>

            <CreateTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    );
}
