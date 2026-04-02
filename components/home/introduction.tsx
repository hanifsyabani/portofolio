"use client";

import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

export default function Introduction() {
    const t = useTranslations("HomePage");
    return (
        <section className="space-y-2 bg-cover bg-no-repeat">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
                    <h1>{t("intro")}</h1>
                </div>
                <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-2 rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-neutral-50 dark:border-blue-500 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    {t("download_cv")}
                </a>
            </div>

            <div className="space-y-4">
                <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-neutral-700 dark:text-neutral-400 md:flex-row">
                    <li>{t("location")}</li>
                </ul>
                <div className="mt-6 space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
                    <p>
                        {t("resume.paragraph_1")}
                    </p>
                    <p>
                        {t("resume.paragraph_2")}
                    </p>

                </div>
            </div>
        </section>
    )
}
