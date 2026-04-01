import { WakaTimeData } from "@/@types/wakatime";
import ReactECharts from "echarts-for-react";
import { useTranslations } from "next-intl";

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

export default function WakaTimePieChart({ data }: { data: WakaTimeData }) {
    const t = useTranslations("StatisticsPage.wakatime");

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
                label: { show: false },
                labelLine: { show: false },
                data: data.languages.map((lang, index) => ({
                    value: lang.percent,
                    name: lang.name,
                    itemStyle: { color: lang.color || COLORS[index % COLORS.length] },
                })),
            },
        ],

        // ✅ RESPONSIVE CONFIG
        media: [
            {
                query: {
                    maxWidth: 600,
                },
                option: {
                    legend: {
                        orient: "horizontal",
                        bottom: 0,
                        left: "center",
                    },
                    series: [
                        {
                            center: ["50%", "40%"], // biar naik dikit karena legend di bawah
                        },
                    ],
                },
            },
        ],
    });
    return (
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
    )
}