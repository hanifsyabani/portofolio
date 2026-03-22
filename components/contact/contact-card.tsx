import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SocialMediaItem } from "@/@types/contact";

export default function ContactCard({
  title,
  description,
  href,
  icon,
  accentColor,
  hoverBorder,
  glowColor,
}: SocialMediaItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-br from-neutral-900/60 via-neutral-900/40 to-neutral-950/80 p-5 transition-all duration-500 hover:translate-y-[-2px] ${hoverBorder}`}
      style={{
        // @ts-expect-error css custom property
        "--card-glow": glowColor,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 8px 40px -12px var(--card-glow)`,
        }}
      />

      {/* Icon */}
      <div
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:scale-105 group-hover:border-white/20 ${accentColor}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-neutral-100 transition-colors duration-300 group-hover:text-white">
            {title}
          </h4>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-400" />
        </div>
        <p className="text-xs leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
          {description}
        </p>
      </div>
    </Link>
  );
}
