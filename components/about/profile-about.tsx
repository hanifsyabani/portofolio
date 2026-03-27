"use client";

import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { useTranslations } from "next-intl";

export default function ProfileAbout() {
    const t = useTranslations("AboutPage");
    return (
        <section>
            <SectionHeading title={t("title")} />
            <SectionSubHeading>
                {t("description")}
            </SectionSubHeading>

            <div className="space-y-8 text-neutral-800 dark:text-neutral-300 mt-10">
                <p>
                    {t("resume.paragraph_1")}
                </p>
                <p>
                    {t("resume.paragraph_2")}
                </p>
                <p>
                    {t("resume.paragraph_3")}
                </p>
            </div>
        </section>
    )
}
