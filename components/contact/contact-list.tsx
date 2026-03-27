"use client";

import { SOCIAL_MEDIA } from "@/constants/social-media";
import ContactCard from "./contact-card";
import { useTranslations } from "next-intl";

export default function ContactList() {
  const t = useTranslations("ContactPage");
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          {t("find_me")}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          {t("find_me_sub")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SOCIAL_MEDIA.map((media) => (
          <ContactCard key={media.name} {...media} />
        ))}
      </div>
    </div>
  );
}
