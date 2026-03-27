"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Achievement } from "@/@types/sanity.types";
import { urlForImage, formatDate, localizedValue } from "@/lib/utils";
import {
  Award,
  Calendar,
  Hash,
  Building2,
  Tag,
  ExternalLink,
  Clock,
} from "lucide-react";
import Breakline from "../ui/breakline";
import { useTranslations, useLocale } from "next-intl";

interface AchievementDetailDialogProps {
  achievement: Achievement;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}



export default function AchievementDetailDialog({
  achievement,
  open,
  onOpenChange,
}: AchievementDetailDialogProps) {
  const imageUrl = urlForImage(achievement.image)?.url() as string;
  const t = useTranslations("AchievementDetail");
  const locale = useLocale();

  const name = localizedValue(achievement.name, locale) || "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-auto h-[calc(100vh-6rem)] border-white/[0.06] dark:bg-neutral-950 bg-white p-0 max-w-6xl sm:rounded-2xl">
        <DialogTitle className="sr-only">{name}</DialogTitle>

        <div className="lg:flex flex-col md:flex-row">
          <div className="relative w-full h-full  flex items-center justify-center bg-neutral-900/80 md:w-[70%]">
            <Image
              src={imageUrl}
              alt={name || "Achievement Certificate"}
              fill
              className="object-cover"
            />
          </div>

          <div className="hidden lg:flex flex-1 flex-col border-t border-white/[0.06] p-6 md:border-l md:border-t-0 md:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {achievement.type && (
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-2.5 py-0.5 text-[11px] font-medium capitalize text-blue-400">
                  <Award className="h-3 w-3" />
                  {achievement.type}
                </span>
              )}
              {achievement.category && (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium capitalize dark:text-neutral-400 text-neutral-600">
                  <Tag className="h-3 w-3" />
                  {achievement.category}
                </span>
              )}
            </div>

            <h2 className="text-lg font-bold leading-snug dark:text-neutral-100 text-neutral-900">
              {name}
            </h2>

            {achievement.issuingOrganization && (
              <p className="mt-1 text-sm dark:text-neutral-400 text-neutral-600">
                {achievement.issuingOrganization}
              </p>
            )}

            <Breakline />
            <div className="space-y-4">
              {achievement.credentialId && (
                <DetailRow
                  icon={<Hash className="h-4 w-4" />}
                  label={t("credential_id")}
                  value={
                    <span className="font-mono text-xs">
                      {achievement.credentialId}
                    </span>
                  }
                />
              )}

              {achievement.issuingOrganization && (
                <DetailRow
                  icon={<Building2 className="h-4 w-4" />}
                  label={t("issuing_organization")}
                  value={achievement.issuingOrganization}
                />
              )}

              {achievement.issueDate && (
                <DetailRow
                  icon={<Calendar className="h-4 w-4" />}
                  label={t("issue_date")}
                  value={formatDate(achievement.issueDate)}
                />
              )}

              {achievement.expirationDate && (
                <DetailRow
                  icon={<Clock className="h-4 w-4" />}
                  label={t("expiration_date")}
                  value={formatDate(achievement.expirationDate)}
                />
              )}
            </div>

            {/* Credential URL */}
            {achievement.urlCredential && (
              <a
                href={achievement.urlCredential}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/10"
              >
                <ExternalLink className="h-4 w-4" />
                {t("view_credential")}
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-blue-400">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
          {label}
        </p>
        <div className="mt-0.5 text-sm dark:text-neutral-200 text-neutral-600">{value}</div>
      </div>
    </div>
  );
}