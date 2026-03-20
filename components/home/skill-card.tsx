"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  color?: string; 
}

export default function SkillCard({
  title,
  icon,
  description,
  color = "from-blue-500 to-cyan-500",
}: SkillCardProps) {
  return (
    <>
      <div className="relative z-10 flex h-full flex-col gap-4 p-2  cursor-pointer group text-center" >
        <div
          className={`flex h-16 w-16 mx-auto items-center justify-center rounded-xl bg-linear-to-br ${color} p-0.5 transition-transform duration-300 group-hover:scale-110`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950">
            <div className="text-2xl text-white">{icon}</div>
          </div>
        </div>

          <h3 className="text-sm text-center font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {title}
          </h3>

      </div>

    </>
  );
}
