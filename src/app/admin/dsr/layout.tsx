import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DSR — DSR Portal",
};

export default function DsrLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
