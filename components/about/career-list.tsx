"use client";

import { BiBriefcase } from "react-icons/bi";
import SectionHeading from "@/components/ui/section-heading";
import SectionSubHeading from "@/components/ui/section-sub-heading";
import CareerCard from "./career-card";
import { Career } from "@/@types/sanity.types";
import { useTranslations } from "next-intl";

export default function CareerList({ careerData }: { careerData: Career[] }) {
  const t = useTranslations("AboutPage");
  const visibleCareers = careerData.filter((c) => c.isShow !== false);

  return (
    <section className="space-y-6">
      <div>
        <SectionHeading title={t("career.title")} icon={<BiBriefcase />} className="mb-2" />
        <SectionSubHeading>
          {t("career.sub_title")}
        </SectionSubHeading>
      </div>

      <div className="space-y-5">
        {visibleCareers.map((career, index) => (
          <CareerCard key={index} career={career} />
        ))}
      </div>
    </section>
  );
}