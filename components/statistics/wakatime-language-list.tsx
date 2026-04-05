"use client";

import { WakaTimeStatItem } from "@/@types/wakatime";
import { useTranslations } from "next-intl";

const BAR_COLORS = [
  "bg-blue-500",
  "bg-red-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-lime-500",
];

export default function WakaTimeLanguageList({
  languages,
}: {
  languages: WakaTimeStatItem[];
}) {
  const t = useTranslations("StatisticsPage.wakatime");
  const topLanguages = languages.slice(0, 8);

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6 flex items-center gap-2">
        {t("language_ranking")}
      </h3>
      <div className="space-y-4">
        {topLanguages.map((lang, index) => (
          <div key={lang.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 w-5 text-right">
                  #{index + 1}
                </span>
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full`}
                  style={{ backgroundColor: lang.color || undefined }}
                />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition-colors">
                  {lang.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {lang.text}
                </span>
                <span className="text-sm font-bold text-neutral-600 dark:text-neutral-300 min-w-[45px] text-right">
                  {lang.percent.toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="ml-2 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${BAR_COLORS[index % BAR_COLORS.length]
                  }`}
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: lang.color || undefined,
                  opacity: 0.85,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
