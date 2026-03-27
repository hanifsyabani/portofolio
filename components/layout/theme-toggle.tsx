'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <>
            <div className="flex gap-2 hidden lg:flex items-center p-2 dark:bg-neutral-800 bg-neutral-300 rounded-full">
                <Sun
                    size={28}
                    className={`dark:text-neutral-400 text-neutral-200 cursor-pointer rounded-full p-1 ${resolvedTheme === "light" ? "dark:bg-neutral-700 bg-neutral-400" : ""}`}
                    onClick={() => {
                        setTheme("light")
                    }}
                />
                <Moon
                    size={28}
                    className={`dark:text-white text-neutral-600 cursor-pointer  rounded-full p-1 ${resolvedTheme === "dark" ? "dark:bg-neutral-700 bg-neutral-400 " : ""}`}
                    onClick={() => {
                        setTheme("dark")
                    }}
                />
            </div>

            {/* mobile */}
            <button
                onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                className="flex lg:hidden bg-neutral-300 dark:bg-neutral-700 items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-all duration-200 text-xs font-semibold"
            >
                {resolvedTheme === "light" ? (
                    <Moon className="dark:text-white text-neutral-600" size={20} />
                ) : (
                    <Sun className="dark:text-neutral-400 text-neutral-200" size={20} />
                )}
            </button>
        </>

    )
}