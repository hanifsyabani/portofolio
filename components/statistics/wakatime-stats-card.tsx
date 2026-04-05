import { Clock, TrendingUp, Calendar, Code } from "lucide-react";

interface WakatimeStatsCardProps {
  title: string;
  data: string | number;
  variant?: "total" | "average" | "range" | "best";
}

const variantConfig = {
  total: {
    icon: Clock,
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20 dark:border-blue-400/20",
    accentBg: "bg-blue-500/10",
  },
  average: {
    icon: TrendingUp,
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-500/20 dark:border-emerald-400/20",
    accentBg: "bg-emerald-500/10",
  },
  range: {
    icon: Calendar,
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/20 dark:border-purple-400/20",
    accentBg: "bg-purple-500/10",
  },
  best: {
    icon: Code,
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/20 dark:border-amber-400/20",
    accentBg: "bg-amber-500/10",
  },
};

export default function WakatimeStatsCard({
  title,
  data,
  variant = "total",
}: WakatimeStatsCardProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.gradient} p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
    >
      {/* Decorative circle */}
      <div
        className={`absolute -right-4 -top-4 h-20 w-20 rounded-full ${config.accentBg} blur-2xl`}
      />

      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {title}
          </p>
          <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-xl">
            {data}
          </p>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.accentBg}`}
        >
          <Icon className={`h-5 w-5 ${config.iconColor}`} />
        </div>
      </div>
    </div>
  );
}
