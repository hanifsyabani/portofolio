'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

    const { setTheme } = useTheme()
    return (
        <div className="flex gap-2 items-center p-2 bg-neutral-800 rounded-full">
            <Sun size={25} className="text-neutral-400 cursor-pointer hover:bg-neutral-700 rounded-full p-1"  onClick={() => setTheme("light")}/>
            <Moon size={25} className="text-neutral-400 cursor-pointer hover:bg-neutral-700 rounded-full p-1" onClick={() => setTheme("dark")}/>
        </div>
    )
}