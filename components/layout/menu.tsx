"use client";

import { MENU_ITEMS } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className="space-y-2">
            {MENU_ITEMS.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.title} 
                    className={`flex items-center gap-2 pl-4 py-2 rounded-xl cursor-pointer transition-all ${
                        isActive(item.href)
                            ? "text-neutral-100 bg-neutral-800"
                            : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-600"
                    }`}
                >
                    {item.icon}
                    <h1>
                        {item.title}
                    </h1>
                </Link>
            ))}
        </nav>
    )
}
