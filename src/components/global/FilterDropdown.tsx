"use client";

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FilterOption {
    value: string;
    label: string;
}

interface FilterDropdownProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    options: FilterOption[];
    onChange: (value: string) => void;
}

export function FilterDropdown({
    id,
    label,
    value,
    placeholder,
    options,
    onChange,
}: FilterDropdownProps) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id} className="text-xs text-muted-foreground">
                {label}
            </Label>
            <Select value={value} onValueChange={(next) => onChange(next ?? "all")}>
                <SelectTrigger id={id} className="h-8 w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">{placeholder}</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
