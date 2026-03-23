import Link from "next/link";
import Image from "next/image";
import { Project } from "@/@types/sanity.types";
import { urlForImage } from "@/lib/utils";
import { ArrowLeft, ExternalLink, Pin } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { SiGithub } from "react-icons/si";
import { portableTextComponents } from "../ui/portable-text";
import { STACKSPROJECTS } from "@/constants/stacks";

interface ProjectDetailProps {
  projectData: Project;
}

export default function ProjectDetail({ projectData }: ProjectDetailProps) {
  const imageUrl = urlForImage(projectData.image)?.url() as string;

  return (
    <section>
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm dark:text-neutral-400 text-neutral-600 transition-colors duration-300 hover:text-blue-400"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      {imageUrl && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.06]">
          <Image
            src={imageUrl}
            alt={projectData.title || "Project"}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mb-4 flex items-start gap-3">
        <h1 className="text-2xl font-bold dark:text-neutral-100 text-neutral-900 md:text-3xl">
          {projectData.title}
        </h1>
        {projectData.is_featured && (
          <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400/90 px-2.5 py-1 text-[11px] font-semibold text-neutral-900">
            <Pin className="h-3 w-3" />
            Featured
          </span>
        )}
      </div>

      {projectData.description && (
        <p className="mb-6 text-sm leading-relaxed dark:text-neutral-400 text-neutral-600">
          {projectData.description}
        </p>
      )}

      {projectData.stacks && projectData.stacks.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-4">
          {projectData.stacks.map((stack: string, index: number) => {
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

      <div className="mb-8 flex flex-wrap items-center gap-3">
        {projectData.link_github && (
          <Link
            href={projectData.link_github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-amber-400/25 hover:bg-amber-400/[0.06] hover:text-amber-400"
          >
            <SiGithub className="h-4 w-4" />
            Source Code
          </Link>
        )}
        {projectData.link_demo && (
          <Link
            href={projectData.link_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/[0.08] px-4 py-2.5 text-sm font-medium text-amber-400 transition-all duration-300 hover:bg-amber-400/[0.15] hover:shadow-[0_4px_20px_-6px_rgba(245,190,60,0.15)]"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
      </div>

      {projectData.content && (
        <PortableText value={projectData.content} components={portableTextComponents} />
      )}
    </section>
  );
}