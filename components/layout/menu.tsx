"use client";

import { MENU_ITEMS } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Menu() {
    const pathname = usePathname();
    const locale = useLocale()
    const t = useTranslations("Navigation");

    const isActive = (href: string) => {
        const fullPath = `/${locale}${href === "/" ? "" : href}`;

        // khusus HOME
        if (href === "/") {
            return pathname === `/${locale}` || pathname === "/";
        }

        // selain HOME
        return pathname === fullPath || pathname.startsWith(fullPath + "/");
    };

    return (
        <nav className="space-y-2">
            {MENU_ITEMS.map((item) => (
                <Link
                    href={item.href}
                    key={item.title}
                    className={`flex items-center gap-2 pl-4 py-2 rounded-xl cursor-pointer transition-all ${isActive(item.href)
                            ? "dark:text-neutral-100 text-neutral-200 dark:bg-neutral-800 bg-neutral-500"
                            : "dark:text-neutral-400 text-neutral-600 hover:text-neutral-100 dark:hover:bg-neutral-600 hover:bg-neutral-500"
                        }`}
                >
                    {item.icon}
                    <h1>
                        {t(item.title)}
                    </h1>
                </Link>
            ))}
        </nav>
    )
}
