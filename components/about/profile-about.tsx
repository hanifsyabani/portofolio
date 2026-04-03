"use client";

import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { useTranslations } from "next-intl";

export default function ProfileAbout() {
    const t = useTranslations("AboutPage");
    return (
        <section>
            <div data-aos="fade-up">
                <SectionHeading title={t("title")} />
                <SectionSubHeading>
                    {t("description")}
                </SectionSubHeading>
            </div>

            <div className="space-y-8 text-neutral-800 dark:text-neutral-300 mt-10">
                <p data-aos="fade-up" data-aos-delay="100">
                    {t("resume.paragraph_1")}
                </p>
                <p data-aos="fade-up" data-aos-delay="200">
                    {t("resume.paragraph_2")}
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                    {t("resume.paragraph_3")}
                </p>
            </div>
        </section>
    )
}
