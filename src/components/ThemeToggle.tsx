"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex gap-2 p-2 border border-border rounded-full bg-background/50 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-transparent" />
                <div className="w-8 h-8 rounded-full bg-transparent" />
                <div className="w-8 h-8 rounded-full bg-transparent" />
            </div>
        );
    }

    return (
        <div className="flex gap-1 p-1 border border-border rounded-full bg-background/50 backdrop-blur-sm">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "light"
                        ? "bg-foreground text-background shadow-sm"
                        : "text-gray-500 hover:text-foreground"
                    }`}
                aria-label="Light Mode"
                title="Light Mode"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "system"
                        ? "bg-foreground text-background shadow-sm"
                        : "text-gray-500 hover:text-foreground"
                    }`}
                aria-label="System Mode"
                title="System Mode"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "dark"
                        ? "bg-foreground text-background shadow-sm"
                        : "text-gray-500 hover:text-foreground"
                    }`}
                aria-label="Dark Mode"
                title="Dark Mode"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </button>
        </div>
    );
}
