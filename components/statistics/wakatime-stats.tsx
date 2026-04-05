"use client";

import { useQuery } from "@tanstack/react-query";
import { GetWakaTimeStats } from "@/service/wakatime";
import Loader from "../ui/loader";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { Activity } from "lucide-react";
import Breakline from "../ui/breakline";
import { useTranslations } from "next-intl";
import WakatimeStatsCard from "./wakatime-stats-card";
import WakaTimePieChart from "./wakatime-piechart";
import WakaTimeLanguageList from "./wakatime-language-list";

export default function WakaTimeStats() {
  const t = useTranslations("StatisticsPage.wakatime");

  const {
    data: dataWakatime,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => GetWakaTimeStats(),
    queryKey: ["wakatime-stats"],
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });

  if (isError || !dataWakatime || !dataWakatime.data) {
    return (
      <section>
        <SectionHeading
          title={t("title")}
          icon={<Activity />}
          className="mb-2"
        />
        <SectionSubHeading>{t("sub_title")}</SectionSubHeading>
        <div className="my-10">
          <Breakline />
        </div>
        <p className="text-red-500">{t("error")}</p>
      </section>
    );
  }

  const { data } = dataWakatime;

  if (isLoading) return <Loader />;

  const bestLanguage = data.languages[0];

  return (
    <section>
      <SectionHeading
        title={t("title")}
        icon={<Activity />}
        className="mb-2"
      />
      <SectionSubHeading>{t("sub_title")}</SectionSubHeading>

      <div className="my-10">
        <Breakline />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <WakatimeStatsCard
          title={t("total_time")}
          data={data.human_readable_total}
          variant="total"
        />
        <WakatimeStatsCard
          title={t("daily_average")}
          data={data.human_readable_daily_average}
          variant="average"
        />
        <WakatimeStatsCard
          title={t("date_range")}
          data={data.human_readable_range}
          variant="range"
        />
        {bestLanguage && (
          <WakatimeStatsCard
            title={t("best_language")}
            data={bestLanguage.name}
            variant="best"
          />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <WakaTimePieChart data={data} />
        <WakaTimeLanguageList languages={data.languages} />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <WakaTimeCategoryChart data={data} />
      </div> */}
    </section>
  );
}