"use client";

import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { PiProjectorScreenChart } from "react-icons/pi";
import { Project } from "@/@types/sanity.types";
import ProjectCard from "./project-card";
import { useTranslations } from "next-intl";

interface ProjectListProps {
    projectsData: Project[]
}

export default function ProjectList({ projectsData }: ProjectListProps) {
    const t = useTranslations("ProjectsPage");
    // Sort: featured first, then by creation date
    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return 0;
    });

    return (
        <section>
            <SectionHeading className="mb-2" title={t("title")} icon={<PiProjectorScreenChart />} />
            <SectionSubHeading>
                {t("description")}
            </SectionSubHeading>

            <div className="my-10">
                <Breakline />
            </div>

            {sortedProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {sortedProjects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-neutral-400">{t("no_data")}</p>
                </div>
            )}
        </section>
    )
}