"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatDate, urlForImage } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Career } from "@/@types/sanity.types";

interface CareerCardProps {
  career: Career;
}

export default function CareerCard({ career }: CareerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {career.logo ? (
              <div className="relative w-16 h-16 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={urlForImage(career.logo)?.url() as string}
                  alt={career.company || "company"}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority={false}
                />
              </div>
            ) : (
              <div className="w-16 h-16 shrink-0 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {career.company}
                </span>
              </div>
            )}

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground truncate">
                {career.position}
              </h3>
              <Link 
                href={career.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-muted-foreground truncate hover:underline hover:text-foreground transition-colors"
              >
                {career.company}
              </Link>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs text-muted-foreground">{career.location}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{career.industry}</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium `}
          >
            {career.locationType}
          </span>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`}
          >
            {career.type}
          </span>
        </div>

        <div className="text-xs text-muted-foreground mt-4 border-t border-foreground/10 pt-3">
          <span>
            {formatDate(career.startDate as string)} → {career.endDate ? formatDate(career.endDate) : "Present"}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-foreground/10 bg-muted/30 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-4">
            {/* Impact Section */}
            {career.impact && career.impact.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  📊 Impact
                </h4>
                <ul className="space-y-2">
                  {career.impact.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-blue-500 shrink-0 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {career.responsibilities && career.responsibilities.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  ✓ Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {career.responsibilities.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-green-500 shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {career.lessonsLearned && career.lessonsLearned.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  ⚡ Key Learnings
                </h4>
                <ul className="space-y-2">
                  {career.lessonsLearned.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-amber-500 shrink-0 font-bold">✨</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
