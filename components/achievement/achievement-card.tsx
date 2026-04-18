"use client";

import { useState } from "react";
import Image from "next/image";
import { Achievement } from "@/@types/sanity.types";
import { localizedValue, urlForImage } from "@/lib/utils";
import { ArrowRight, Award } from "lucide-react";
import AchievementDetailDialog from "./achievement-detail-dialog";
import { useTranslations, useLocale } from "next-intl";

export default function AchievementCard(achievement: Achievement) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const t = useTranslations("AchievementDetail");
  const locale = useLocale();

  const name = localizedValue(achievement.name, locale) || "";
  const imageUrl = urlForImage(achievement.image)?.url() as string;

  return (
    <>
      <article
        onClick={() => setDialogOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/6 dark:bg-linear-to-br from-neutral-900/60 via-neutral-900/40 to-neutral-950/80 bg-neutral-100 dark:bg-neutral-900 transition-all duration-500 hover:border-blue-400/20 hover:shadow-[0_8px_40px_-12px_rgba(96,165,250,0.12)] hover:translate-y-0.5"
      >
        <div className="relative h-48 w-full overflow-hidden bg-neutral-800/40">
          <Image
            unoptimized
            src={imageUrl}
            alt={name || "Achievement"}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="text-sm font-medium text-white">{t("view_detail")}</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 p-5">
          {achievement.credentialId && (
            <p className="text-[10px] font-medium uppercase tracking-widest dark:text-neutral-500 text-neutral-600">
              {achievement.credentialId}
            </p>
          )}
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug dark:text-neutral-100 text-neutral-900 transition-colors duration-300 group-hover:text-blue-400">
            {name}
          </h3>

          <p className="text-xs dark:text-neutral-400 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-300">
            {achievement.issuingOrganization}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {achievement.type && (
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/8 px-2.5 py-0.5 text-[11px] font-medium capitalize text-blue-400">
                <Award className="h-3 w-3" />
                {achievement.type}
              </span>
            )}
            {achievement.category && (
              <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-2.5 py-0.5 text-[11px] font-medium capitalize text-neutral-400">
                {achievement.category}
              </span>
            )}
          </div>


        </div>
      </article>

      <AchievementDetailDialog
        achievement={achievement}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
