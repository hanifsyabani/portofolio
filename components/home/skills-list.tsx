import { BiCodeAlt } from "react-icons/bi";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import SkillCard from "./skill-card";
import { skillCategories } from "@/constants/stacks";


export default function Skills() {
    return (
        <div className="space-y-12">
            <div>
                <SectionHeading title="Keahlian" icon={<BiCodeAlt />} />
                <SectionSubHeading>Kemampuan profesional saya.</SectionSubHeading>
            </div>

            <div className="space-y-12">
                <div className="grid grid-cols-1 gap-4 grid-cols-4 lg:grid-cols-8">
                    {skillCategories.map((category) => (
                        <div key={category.name}>
                            <SkillCard
                                key={category.name}
                                title={category.name || ""}
                                icon={category.icon}
                                description={category.description || ""}
                                color={category.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
