"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/@types/sanity.types";
import { urlForImage } from "@/lib/utils";
import { ArrowRight, Pin, Github, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";
import { STACKSPROJECTS } from "@/constants/stacks";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter()
  const imageUrl = urlForImage(project.image)?.url() as string;
  const trimmedDescription =
    (project.description?.slice(0, 100) ?? "") +
    ((project.description?.length ?? 0) > 100 ? "..." : "");

  return (
    <article onClick={() => router.push(`/projects/${project.slug?.current}`)} className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06]  dark:bg-linear-to-br dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-950/80 bg-neutral-100 dark:bg-neutral-900 transition-all duration-500 hover:border-amber-400/20 hover:shadow-[0_8px_40px_-12px_rgba(245,190,60,0.10)] hover:translate-y-[-2px]">
      {project.is_featured && (
        <div className="absolute right-0 top-0 z-10 flex items-center gap-1 rounded-bl-xl rounded-tr-2xl bg-blue-400/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-lg">
          <Pin className="h-3 w-3" />
          <span>Featured</span>
        </div>
      )}

      <div className="relative h-48 w-full overflow-hidden bg-neutral-800/40">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title || "Project"}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-600">
            <span className="text-sm">No image</span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="text-sm font-medium text-white">View Project</span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-sm font-semibold leading-snug dark:text-neutral-100 text-neutral-900 transition-colors duration-300 group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed dark:text-neutral-400 text-neutral-600 transition-colors duration-300 dark:group-hover:text-neutral-300">
          {trimmedDescription}
        </p>

        {project.stacks && project.stacks.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-1">
            {project.stacks.map((stack, index) => {
              const stackData = STACKSPROJECTS[stack];
              return (
                <span
                  key={index}
                  className={stackData?.color}
                >
                  {stackData?.icon}
                </span>
              )
            })}
          </div>
        )}

        {(project.link_github || project.link_demo) && (
          <div className="flex items-center gap-3 border-t border-white/[0.06] pt-3">
            {project.link_github && (
              <Link
                href={project.link_github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 transition-colors duration-300 hover:text-amber-400"
              >
                <SiGithub className="h-3.5 w-3.5" />
                <span>Source</span>
              </Link>
            )}
            {project.link_github && project.link_demo && (
              <span className="text-neutral-700">|</span>
            )}
            {project.link_demo && (
              <Link
                href={project.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 transition-colors duration-300 hover:text-blue-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}