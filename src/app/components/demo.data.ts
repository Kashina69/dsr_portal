export interface DemoRow {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive";
    hours: number;
}

export const demoData: DemoRow[] = [
    { id: "1", name: "Sunil Kumar", email: "sunil@example.com", role: "Engineer", status: "Active", hours: 40 },
    { id: "2", name: "Ankit Verma", email: "ankit@example.com", role: "Designer", status: "Active", hours: 35 },
    { id: "3", name: "Priya Sharma", email: "priya@example.com", role: "Manager", status: "Inactive", hours: 20 },
    { id: "4", name: "Rahul Meena", email: "rahul@example.com", role: "Engineer", status: "Active", hours: 42 },
    { id: "5", name: "Kavya Nair", email: "kavya@example.com", role: "Engineer", status: "Active", hours: 38 },
    { id: "6", name: "Rohit Shetty", email: "rohit@example.com", role: "Designer", status: "Inactive", hours: 15 },
    { id: "7", name: "Manish Gupta", email: "manish@example.com", role: "Manager", status: "Active", hours: 44 },
    { id: "8", name: "Nidhi Shah", email: "nidhi@example.com", role: "Engineer", status: "Active", hours: 37 },
    { id: "9", name: "Arjun Desai", email: "arjun@example.com", role: "Designer", status: "Active", hours: 39 },
    { id: "10", name: "Amit Joshi", email: "amit@example.com", role: "Engineer", status: "Inactive", hours: 12 },
    { id: "11", name: "Divya Reddy", email: "divya@example.com", role: "Manager", status: "Active", hours: 41 },
    { id: "12", name: "Vikram Singh", email: "vikram@example.com", role: "Engineer", status: "Active", hours: 36 },
];
