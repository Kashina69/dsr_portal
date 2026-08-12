"use client";

import { Moon, Sun } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
} | null>(null);

const STORAGE_KEY = "dsr-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        return document.documentElement.classList.contains("dark") ? "dark" : "light";
    });

    useEffect(() => {
        const css = document.createElement("style");
        css.appendChild(
            document.createTextNode(
                `*, *::before, *::after {
                    -webkit-transition: none !important;
                    -moz-transition: none !important;
                    -o-transition: none !important;
                    -ms-transition: none !important;
                    transition: none !important;
                }`,
            ),
        );
        document.head.appendChild(css);

        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem(STORAGE_KEY, theme);

        // Force browser to recalculate styles without transitions
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        window.getComputedStyle(document.body).opacity;

        const timer = setTimeout(() => {
            if (document.head.contains(css)) {
                document.head.removeChild(css);
            }
        }, 10);

        return () => {
            clearTimeout(timer);
            if (document.head.contains(css)) {
                document.head.removeChild(css);
            }
        };
    }, [theme]);

    const setTheme = useCallback((t: Theme) => setThemeState(t), []);
    const toggleTheme = useCallback(
        () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
        [],
    );

    return <ThemeContext value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}

export function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            suppressHydrationWarning
        >
            <Sun className="hidden size-4 dark:block" />
            <Moon className="block size-4 dark:hidden" />
        </Button>
    );
}
