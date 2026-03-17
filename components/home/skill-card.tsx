"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  proficiency?: number; // 0-100
  color?: string; // tailwind color class
}

export default function SkillCard({
  title,
  icon,
  description,
  color = "from-blue-500 to-cyan-500",
}: SkillCardProps) {
  return (
    <Card className="group cursor-pointer relative h-full overflow-hidden bg-linear-to-br from-neutral-900/50 to-neutral-950/50 p-0 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <div
        className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />

      <div className="relative z-10 flex h-full flex-col gap-4 p-6">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br ${color} p-0.5 transition-transform duration-300 group-hover:scale-110`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950">
            <div className="text-2xl text-white">{icon}</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {title}
          </h3>
        </div>

        {description && (
          <p className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
            {description}
          </p>
        )}

       
      </div>

      <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${color} opacity-0 p-0.5 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none`} />
    </Card>
  );
}
