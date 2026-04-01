import { Card } from "../ui/card";

interface WakatimeStatsCardProps {
    title: string;
    data: string | number;
}

export default function WakatimeStatsCard({ title, data }: WakatimeStatsCardProps) {
    return (
        <Card className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="text-sm text-gray-600 dark:text-gray-400">
                {title}
            </h3>
            <p className="lg:text-3xl text-xl font-bold text-blue-500">
                {data}
            </p>
        </Card>
    );
}
