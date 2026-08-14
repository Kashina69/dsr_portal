export interface RapperRecord {
    id: string;
    name: string;
    email: string;
    department: string;
    date: string;
    interviewStatus: string;
}

export const RAPPER_DEPARTMENTS = [
    "Engineering",
    "Human Resources",
    "Sales",
    "Marketing",
    "Design",
    "Product Management",
];
