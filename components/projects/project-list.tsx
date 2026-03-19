import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { PiProjectorScreenChart } from "react-icons/pi";
import { Project } from "@/@types/sanity.types";
import ProjectCard from "./project-card";

interface ProjectListProps {
    projectsData: Project[]
}

export default function ProjectList({ projectsData }: ProjectListProps) {
    // Sort: featured first, then by creation date
    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return 0;
    });

    return (
        <section>
            <SectionHeading className="mb-2" title="Projects" icon={<PiProjectorScreenChart />} />
            <SectionSubHeading>
                Beberapa proyek yang pernah saya kerjakan selama perjalanan karir saya.
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
                    <p className="text-neutral-400">Tidak ada proyek untuk ditampilkan.</p>
                </div>
            )}
        </section>
    )
}