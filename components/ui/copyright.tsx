"use client";

import { useTranslations } from "next-intl";

export default function Copyright() {
    const t = useTranslations("Footer");
    return (
        <div className="flex flex-wrap items-center justify-center gap-1 text-center text-xs text-neutral-600 dark:text-neutral-400">
            <span>{t("copyright")} {new Date().getFullYear()} {t("name")}</span>
            <p>{t("rights")}</p>
        </div>
    )
}
