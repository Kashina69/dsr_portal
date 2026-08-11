import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DSR Portal",
    description: "Employee tracking and daily reporting system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(()=>{try{var t=localStorage.getItem("dsr-theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
