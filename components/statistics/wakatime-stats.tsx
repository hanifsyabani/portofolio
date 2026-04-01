"use client";

import { useQuery } from "@tanstack/react-query";
import { GetWakaTimeStats } from "@/service/wakatime";
import Loader from "../ui/loader";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { Activity } from "lucide-react";
import Breakline from "../ui/breakline";
import ReactECharts from "echarts-for-react";
import { useTranslations } from "next-intl";
import WakatimeStatsCard from "./wakatime-stats-card";

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
];

export default function WakaTimeStats() {
  const t = useTranslations("StatisticsPage.wakatime");

  const { data: response, isLoading, isError } = useQuery({
    queryFn: () => GetWakaTimeStats(),
    queryKey: ["wakatime-stats"],
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });


  if (isError || !response || !response.data) {
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

  const { data } = response;

  const getLanguageOptions = () => ({
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: 10,
      top: 20,
      bottom: 20,
      textStyle: {
        color: "var(--text-color, #9ca3af)",
      },
    },
    series: [
      {
        name: t("languages"),
        type: "pie",
        radius: ["50%", "80%"],
        center: ["40%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "var(--bg-color, transparent)",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
            color: "var(--text-color, #f3f4f6)",
          },
        },
        labelLine: {
          show: false,
        },
        data: data.languages.map((lang, index) => ({
          value: lang.percent,
          name: lang.name,
          itemStyle: { color: lang.color || COLORS[index] },
        })),
      },
    ],
  });

  const getEditorOptions = () => ({
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: "{b}: {c}%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        color: "#9ca3af",
      },
      splitLine: {
        lineStyle: {
          color: ["#374151"],
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      data: data.editors.map((editor) => editor.name).reverse(),
      axisLabel: {
        color: "#9ca3af",
      },
      axisLine: {
        lineStyle: {
          color: "#374151",
        },
      },
    },
    series: [
      {
        name: t("editors"),
        type: "bar",
        data: data.editors.map((editor) => editor.percent).reverse(),
        itemStyle: {
          color: "#0048ffff",
          borderRadius: [0, 5, 5, 0],
        },
        label: {
          show: true,
          position: "right",
          color: "#9ca3af",
          formatter: "{c}%",
        },
      },
    ],
  });



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
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
            <span></span> {t("languages")}
          </h3>
          <div className="h-[300px] w-full">
            <ReactECharts
              option={getLanguageOptions()}
              style={{ height: "100%", width: "100%" }}
              notMerge={true}
              lazyUpdate={true}
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
            <span></span> {t("editors")}
          </h3>
          <div className="h-[300px] w-full">
            <ReactECharts
              option={getEditorOptions()}
              style={{ height: "100%", width: "100%" }}
              notMerge={true}
              lazyUpdate={true}
            />
          </div>
        </div>


      </div>
    </section>
  );
}