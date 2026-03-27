"use client";

import { UmamiWebsiteStats } from "@/@types/umami";
import { useTranslations } from "next-intl";

interface OverviewProps {
  data: {
    websiteStats: UmamiWebsiteStats;
  };
}

const OverviewItem = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/50">
      <span className="text-sm text-neutral-600 dark:text-neutral-400">{label}</span>
      <span className="text-xl font-semibold text-blue-400">
        {value.toLocaleString()}
      </span>
    </div>
  );
};

export default function UmamiOverview({ data }: OverviewProps) {
  const t = useTranslations("StatisticsPage");
  const pageViewsData = data?.websiteStats?.pageviews?.value ?? 0;
  const visitorsData = data?.websiteStats?.visitors?.value ?? 0;
  const visitsData = data?.websiteStats?.visits?.value ?? 0;
  const countriesData = data?.websiteStats?.countries?.value ?? 0;
  const eventsData = data?.websiteStats?.events?.value ?? 0;

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-5">
      <OverviewItem label={t("umami.page_views")} value={pageViewsData} />
      <OverviewItem label={t("umami.visitors")} value={visitorsData} />
      <OverviewItem label={t("umami.visits")} value={visitsData} />
      <OverviewItem label={t("umami.countries")} value={countriesData} />
      <OverviewItem label={t("umami.events")} value={eventsData} />
    </div>
  );
};
