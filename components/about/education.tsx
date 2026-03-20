import { educationData } from "@/constants/education";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { BiBook } from "react-icons/bi";
import EducationCard from "./education-card";

export default function Education() {
    return (
        <section>
            <SectionHeading title="Pendidikan" icon={<BiBook />} className="mb-2" />
            <SectionSubHeading>Pendidikan saya.</SectionSubHeading>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {educationData.map((education) => (
                    <EducationCard
                        key={education.id}
                        {...education}
                    />
                ))}
            </div>
        </section>
    )
}