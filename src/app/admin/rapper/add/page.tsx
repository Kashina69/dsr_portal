"use client";

import { Home } from "lucide-react";
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

import { RAPPER_DEPARTMENTS } from "../rapper.types";

export default function AddRapperPage() {
    const fileRef = useRef<HTMLInputElement>(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [department, setDepartment] = useState("");
    const [experience, setExperience] = useState("");
    const [fileName, setFileName] = useState("");
    const [vacancySource, setVacancySource] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = () => {
        if (
            !firstName ||
            !email ||
            !mobile ||
            !department ||
            !experience ||
            !fileName ||
            !vacancySource
        ) {
            alert("Please fill all required fields.");
            return;
        }
        alert("Rapper added successfully!");
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
                        <BreadcrumbLink href="/admin/rapper">Rapper</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add Rapper</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="flex flex-col">
                <div className="border-b p-4">
                    <h2 className="text-lg font-semibold">Add Rapper</h2>
                </div>

                <CardContent className="flex flex-col gap-6 p-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            First Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Candidate Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Enter candidate email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Mobile Number <span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Enter Mobile number"
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Department <span className="text-destructive">*</span>
                        </label>
                        <Select
                            value={department}
                            onValueChange={(val) => setDepartment(val || "")}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="--Select Department--" />
                            </SelectTrigger>
                            <SelectContent>
                                {RAPPER_DEPARTMENTS.map((dept) => (
                                    <SelectItem key={dept} value={dept}>
                                        {dept}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Experience (in years) <span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Experience"
                            type="number"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Please upload resume <span className="text-destructive">*</span>
                        </label>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => fileRef.current?.click()}
                                className="h-9 rounded-md border border-input bg-background px-3"
                            >
                                Choose file
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                {fileName || "No file chosen"}
                            </span>
                            <input
                                ref={fileRef}
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            How did you get to know about the vacancy?{" "}
                            <span className="text-destructive">*</span>
                        </label>
                        <Input
                            placeholder="Platform Name"
                            value={vacancySource}
                            onChange={(e) => setVacancySource(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Button className=" hover:bg-[#009cae] px-8" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
