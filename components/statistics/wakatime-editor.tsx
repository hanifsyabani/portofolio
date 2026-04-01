import { WakaTimeData } from "@/@types/wakatime";
import ReactECharts from "echarts-for-react";
import { useTranslations } from "next-intl";


export default function WakaTimeEditor({ data }: { data: WakaTimeData }) {
    const t = useTranslations("StatisticsPage.wakatime");

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
    return (
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
    )
}