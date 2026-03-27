"use client";

import { educationData } from "@/constants/education";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { BiBook } from "react-icons/bi";
import EducationCard from "./education-card";
import { useTranslations } from "next-intl";

export default function Education() {
    const t = useTranslations("AboutPage");
    return (
        <section>
            <SectionHeading title={t("education.title")} icon={<BiBook />} className="mb-2" />
            <SectionSubHeading>{t("education.sub_title")}</SectionSubHeading>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {educationData.map((education) => (
                    <EducationCard
                        key={education.id}
                        {...education}
                    />
                ))}
            </div>
        </section>
    )
}