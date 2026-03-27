"use client";

import { SiUmami } from "react-icons/si";

import UmamiSkeleton from "./umami-skeleton";
import TrafficTrendsChart from "./umami-chart";
import UmamiOverview from "./umami-overview";

import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { useQuery } from "@tanstack/react-query";
import { GetStatsUmami } from "@/service/umami";
import { useTranslations } from "next-intl";


export default function UmamiStats() {
  const t = useTranslations("StatisticsPage");
  const {data: dataUmami, isLoading, error} = useQuery({
    queryFn: () => GetStatsUmami(),
    queryKey:["umami-stats"]
  })

  
  return (
    <section className="space-y-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-6">
        <div className="space-y-2">
          <SectionHeading title={t("umami.title")} icon={<SiUmami />} />
          <SectionSubHeading>
            <p>{t("umami.sub_title")}</p>
          </SectionSubHeading>
        </div>

      </div>

      {error ? (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-900/10 dark:text-red-400 text-sm">
          {t("umami.error")}
        </div>
      ) : isLoading || !dataUmami ? (
        <UmamiSkeleton />
      ) : (
        <div className="space-y-6">
          <UmamiOverview data={dataUmami} />
          <TrafficTrendsChart data={dataUmami} />
        </div>
      )}
    </section>
  );
}