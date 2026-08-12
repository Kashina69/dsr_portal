import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#061226] overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">{children}</main>
        </div>
    );
}
