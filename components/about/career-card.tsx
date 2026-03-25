"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import {
  ClipboardList,
  Lightbulb,
  Zap,
  CheckCircle2,
  MapPin,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { formatDuration, urlForImage } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Career } from "@/@types/sanity.types";
import Link from "next/link";


function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 group/item">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400/80" />
      <span className="text-sm leading-relaxed dark:text-neutral-400 text-neutral-800 dark:group-hover/item:text-neutral-300 transition-colors duration-200">
        {text}
      </span>
    </li>
  );
}

interface SectionBlockProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function SectionBlock({ icon, title, items }: SectionBlockProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-blue-400">{icon}</span>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          {title}
        </h4>
      </div>
      <ul className="space-y-2.5 pl-0.5">
        {items.map((item, i) => (
          <BulletItem key={i} text={item} />
        ))}
      </ul>
    </div>
  );
}

export default function CareerCard({ career }: { career: Career }) {

  const duration = useMemo(
    () => formatDuration(career.startDate || "", career.endDate || ""),
    [career.startDate, career.endDate]
  );

  return (
    <article 
      data-aos="fade-up"
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-200 dark:bg-neutral-900 dark:bg-linear-to-br from-neutral-900/60 via-neutral-900/40 to-neutral-950/80 p-6 transition-all duration-500 hover:border-blue-400/20 hover:shadow-[0_8px_40px_-12px_rgba(251,191,36,0.08)] hover:translate-y-[-2px] md:p-8">

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        {career.logo && (
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={urlForImage(career.logo)?.url() as string}
              alt={career.company || ""}
              width={56}
              height={56}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-lg font-bold dark:text-neutral-100 text-neutral-900 leading-snug">
                {career.position}
              </h3>
              <div className="lg:mt-1 mt-2 flex flex-wrap space-y-2 lg:space-y-0 items-center lg:gap-x-2 lg:gap-y-1 text-sm text-neutral-400">
                {career.link ? (
                  <Link
                    href={career.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt gap-1 dark:text-neutral-300 text-neutral-900 hover:text-blue-400 transition-colors duration-200"
                  >
                    {career.company}
                  </Link>
                ) : (
                  <span className="dark:text-neutral-300 text-neutral-900">{career.company}</span>
                )}
                <span className="text-neutral-600">·</span>
                <span className="inline-flex items-center gap-1 dark:text-neutral-300 text-neutral-900">
                  <MapPin className="h-3 w-3" />
                  {career.location}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 dark:text-neutral-400 text-neutral-800">
              <Calendar className="h-3.5 w-3.5" />
              {duration}
            </span>
            <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-blue-400">
              {career.type}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium dark:text-neutral-400 text-neutral-800">
              {career.locationType}
            </span>
            {career.industry && (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium dark:text-neutral-400 text-neutral-800">
                {career.industry}
              </span>
            )}
          </div>
        </div>
      </div>
      <Collapsible>
        <CollapsibleTrigger>
          <div className="text-xs text-neutral-500 flex gap-2 items-center mt-5 hover:underline cursor-pointer">
            <ChevronDown /> Lihat Detail
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <div className="relative z-10 space-y-6">
            {career.responsibilities && career.responsibilities.length > 0 && (
              <SectionBlock
                icon={<ClipboardList className="h-4 w-4" />}
                title="Responsibilities"
                items={career.responsibilities}
              />
            )}

            {((career.lessonsLearned && career.lessonsLearned.length > 0) ||
              (career.impact && career.impact.length > 0)) && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {career.lessonsLearned && career.lessonsLearned.length > 0 && (
                    <SectionBlock
                      icon={<Lightbulb className="h-4 w-4" />}
                      title="What I Learned"
                      items={career.lessonsLearned}
                    />
                  )}
                  {career.impact && career.impact.length > 0 && (
                    <SectionBlock
                      icon={<Zap className="h-4 w-4" />}
                      title="Impact"
                      items={career.impact}
                    />
                  )}
                </div>
              )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </article>

  );
}
