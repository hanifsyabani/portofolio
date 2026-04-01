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
import WakaTimeEditor from "./wakatime-editor";

export default function WakaTimeStats() {
  const t = useTranslations("StatisticsPage.wakatime");

  const { data: dataWakatime, isLoading, isError } = useQuery({
    queryFn: () => GetWakaTimeStats(),
    queryKey: ["wakatime-stats"],
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });


  if (isError || !dataWakatime || !dataWakatime.data) {
    return (
      <section>
        <SectionHeading title={t("title")} icon={<Activity />} className="mb-2" />
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

  return (
    <section>
      <SectionHeading title={t("title")} icon={<Activity />} className="mb-2" />
      <SectionSubHeading>{t("sub_title")}</SectionSubHeading>

      <div className="my-10">
        <Breakline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <WakatimeStatsCard title={t("total_time")} data={data.human_readable_total} />
        <WakatimeStatsCard title={t("daily_average")} data={data.human_readable_daily_average} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <WakaTimePieChart data={data} />
        <WakaTimeEditor data={data} />
      </div>
    </section>
  );
}