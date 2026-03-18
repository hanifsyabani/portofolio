"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Achievement } from "@/@types/sanity.types";
import { urlForImage } from "@/lib/utils";
export default function AchievementCard({
  name,
  issuingOrganization,
  image,
  type,
  issueDate,
  urlCredential,
  credentialId
}: Achievement) {

  
  return (
    <Card className="group cursor-pointer relative h-full overflow-hidden bg-linear-to-br from-neutral-900/40 to-neutral-950/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/15 border border-neutral-800/50 hover:border-emerald-500/30">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="relative h-44 w-full overflow-hidden rounded-lg bg-neutral-800/50">
          <Image
            src={urlForImage(image)?.url() as string}
            alt={name || "Achievement Image"}
            fill
            className="object-cover object-center  transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 p-4">
          <p className="text-xs text-neutral-300">{credentialId}</p>
          <h3 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400 line-clamp-2">
            {name}
          </h3>

          <p className="text-xs text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 line-clamp-1">
            {issuingOrganization}
          </p>

          {/* Type Badge */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all duration-300 group-hover:bg-emerald-500/30 group-hover:border-emerald-500/50">
              {type}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/50 p-4">
          <span className="text-xs text-neutral-500">{issueDate}</span>
          {urlCredential && (
            <a
              href={urlCredential}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Lihat →
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
