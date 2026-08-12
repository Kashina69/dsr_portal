export interface DemoRow {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive";
    hours: number;
}
