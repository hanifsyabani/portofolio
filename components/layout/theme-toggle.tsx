'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeToggle() {

    const { setTheme } = useTheme()
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="flex gap-2 items-center p-2 dark:bg-neutral-800 bg-neutral-300 rounded-full">
            <Sun
                size={28}
                className={`dark:text-neutral-400 text-neutral-200 cursor-pointer rounded-full p-1 ${!isActive ? "dark:bg-neutral-700 bg-neutral-400" : ""}`}
                onClick={() => {
                    setTheme("light")
                    setIsActive(!isActive)
                }}
            />
            <Moon
                size={28}
                className={`dark:text-white text-neutral-600 cursor-pointer  rounded-full p-1 ${isActive ? "dark:bg-neutral-700 bg-neutral-400 " : ""}`}
                onClick={() => {
                    setTheme("dark")
                    setIsActive(!isActive)
                }}
            />
        </div>
    )
}