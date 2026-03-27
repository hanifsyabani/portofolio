"use client";

import { useTranslations } from "next-intl";

export default function Introduction() {
    const t = useTranslations("HomePage");
    return (
        <section className="space-y-2 bg-cover bg-no-repeat">
            <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
                <h1>{t("intro")}</h1>
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
