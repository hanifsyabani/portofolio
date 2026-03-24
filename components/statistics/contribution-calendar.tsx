"use client";

import clsx from "clsx";
import { useState } from "react";

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
      <div className="relative flex flex-col">
        <ul className="flex justify-end gap-[3px] overflow-hidden text-xs dark:text-neutral-400 md:justify-start">
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

        <div className="flex justify-start gap-[2.9px] overflow-hidden">
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

      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="dark:text-neutral-400">
            Less
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
          <span className="dark:text-neutral-400">More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
            "rounded bg-neutral-200 px-2 py-1 text-sm dark:bg-neutral-800 transition-opacity"
          )}
        >
          {selectContribution?.count}{" "}
          {selectContribution?.count === 1 ? "contribution on" : "contributions on"}{" "}
          {selectContribution?.date}
        </div>
      </div>
    </>
  );
}
