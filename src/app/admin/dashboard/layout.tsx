import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard — DSR Portal",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
