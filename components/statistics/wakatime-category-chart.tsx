"use client";

import { WakaTimeData } from "@/@types/wakatime";
import ReactECharts from "echarts-for-react";
import { useTranslations } from "next-intl";

const CATEGORY_COLORS: Record<string, string> = {
  Coding: "#3b82f6",
  Debugging: "#ef4444",
  "Building Project": "#10b981",
  "Code Reviewing": "#8b5cf6",
  Browsing: "#f59e0b",
  Designing: "#ec4899",
  Learning: "#14b8a6",
  Communicating: "#f97316",
};

const FALLBACK_COLORS = [
  "#6366f1",
  "#06b6d4",
  "#84cc16",
  "#e879f9",
  "#fb923c",
  "#22d3ee",
  "#a3e635",
  "#c084fc",
];

export default function WakaTimeCategoryChart({
  data,
}: {
  data: WakaTimeData;
}) {
  const t = useTranslations("StatisticsPage.wakatime");

  const categories = data.categories.slice(0, 8);

  const getOptions = () => ({
    tooltip: {
      trigger: "item",
      formatter: (params: { name: string; value: number; data: { text: string } }) => {
        return `${params.name}: ${params.value}% (${params.data.text})`;
      },
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: t("categories"),
        type: "pie",
        radius: ["0%", "75%"],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
          borderColor: "transparent",
          borderWidth: 3,
        },
        label: {
          show: true,
          color: "#9ca3af",
          fontSize: 12,
          formatter: "{b}\n{c}%",
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: "rgba(156, 163, 175, 0.4)",
          },
        },
        data: categories.map((cat, index) => ({
          value: cat.percent,
          name: cat.name,
          text: cat.text,
          itemStyle: {
            color:
              CATEGORY_COLORS[cat.name] ||
              FALLBACK_COLORS[index % FALLBACK_COLORS.length],
          },
        })),
      },
    ],
  });

  if (!categories.length) return null;

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
        {t("categories")}
      </h3>
      <div className="h-[300px] w-full">
        <ReactECharts
          option={getOptions()}
          style={{ height: "100%", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    </div>
  );
}
