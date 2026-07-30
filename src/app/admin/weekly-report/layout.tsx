import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Weekly Report — DSR Portal",
};

export default function WeeklyReportLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
