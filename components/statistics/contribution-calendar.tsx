"use client";

import clsx from "clsx";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string | number;
  totalWeeks: number;
  contributionsCount?: number;
}

interface CalendarProps {
  weeks: {
    firstDay: string | number;
    contributionDays: Contribution[];
  }[];
  months: Month[];
  colors: string[];
}

export default function ContributionCalendar({ weeks = [], months = [], colors = [] }: CalendarProps) {
  const t = useTranslations("StatisticsPage");
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const mappedMonths = months.map((month) => {
    const filterContributionDay = weeks
      .filter((week) => String(week.firstDay).slice(0, 7) === String(month.firstDay).slice(0, 7))
      .map((item) => item.contributionDays)
      .flat(1);

    const getContributionsByMonth = filterContributionDay.reduce(
      (previousValue, currentValue) => previousValue + currentValue.contributionCount,
      0
    );

    return {
      ...month,
      contributionsCount: getContributionsByMonth,
    };
  });
  const contributionColors = colors?.length >= 5
    ? colors
    : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

  return (
    <>
      <div className="relative flex flex-col overflow-x-auto">
        <ul className="flex justify-end gap-[3px] text-xs dark:text-neutral-400 md:justify-start">
          {mappedMonths.map((month) => (
            <li
              key={String(month.firstDay)}
              className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-start gap-[2.9px]">
          {weeks.map((week) => (
            <div key={String(week.firstDay)}>
              {week.contributionDays.map((contribution) => {
                
                const getColorByCount = (count: number) => {
                  if (count === 0) return "#454545ff";
                  if (count < 3) return "#9be9a8";
                  if (count < 6) return "#40c463";
                  if (count < 10) return "#30a14e";
                  return "#216e39";
                };
                const backgroundColor = getColorByCount(contribution.contributionCount)

                const getRandomDelayAnimate = Math.random() * week.contributionDays.length * 0.15;

                return (
                  <span
                    key={contribution.date}
                    className="my-[2px] block h-[12px] w-[12px] rounded-xs bg-neutral-300 dark:bg-neutral-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                    style={{
                      ...(backgroundColor ? { backgroundColor } : {}),
                      animationDelay: `${getRandomDelayAnimate}s`,
                      animationFillMode: "both",
                    }}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="dark:text-neutral-400">
            {t("github.less")}
          </span>
          <ul className="flex gap-1">
            <li className="h-[10px] w-[10px] rounded-sm bg-neutral-300 dark:bg-neutral-800" />
            {contributionColors.slice(1).map((item, index) => (
              <li
                key={item}
                className="h-[10px] w-[10px] rounded-sm animate-in fade-in"
                style={{ backgroundColor: item, animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </ul>
          <span className="dark:text-neutral-400">{t("github.more")}</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
            "rounded bg-neutral-200 px-3 py-1.5 text-xs md:text-sm dark:bg-neutral-800 transition-opacity flex items-center justify-center w-full md:w-auto h-8"
          )}
        >
          {selectContribution?.date ? (
            <span>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">{selectContribution.count}</span>{" "}
              {selectContribution.count === 1 ? t("github.contribution") : t("github.contributions")} {t("github.on")}{" "}
              <span className="font-medium text-neutral-900 dark:text-neutral-100">{selectContribution.date}</span>
            </span>
          ) : (
            <span className="invisible">0 contributions on 2024-01-01</span>
          )}
        </div>
      </div>
    </>
  );
}
