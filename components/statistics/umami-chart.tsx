"use client";

import  { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { format, parseISO } from "date-fns";
import { useTheme } from "next-themes";
import { UmamiDataPoint } from "@/@types/umami";

interface DataProps {
  data: {
    pageviews: UmamiDataPoint[];
    sessions: UmamiDataPoint[];
  };
}

const TrafficTrendsChart = ({ data }: DataProps) => {
  const { theme } = useTheme();

  const options = useMemo(() => {
    const rawLabels = data?.pageviews?.map((point) => point.x) || [];
    const labels = rawLabels?.map((isoDate) => {
      try {
        return format(parseISO(isoDate), "MMM dd");
      } catch (e) {
        return isoDate;
      }
    });

    const isDark = theme === "dark";
    const textColor = isDark ? "#A3A3A3" : "#525252";

    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Page views"],
        top: 0,
        textStyle: {
          color: textColor,
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: labels,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: textColor,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: isDark ? "#262626" : "#E5E5E5",
              type: "dashed",
            },
          },
          axisLabel: {
            color: textColor,
          },
        },
      ],
      series: [
        
        {
          name: "Page views",
          type: "bar",
          stack: "traffic",
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            color: "rgba(3, 179, 255, 0.7)",
            borderRadius: [4, 4, 0, 0],
          },
          data: data?.pageviews?.map((point) => point.y) || [],
        },
      ],
    };
  }, [data, theme]);

  return (
    <div className="h-[350px] w-full md:h-[400px]">
      <ReactECharts option={options} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default TrafficTrendsChart;
