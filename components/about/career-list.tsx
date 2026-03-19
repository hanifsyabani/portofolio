import { BiBriefcase } from "react-icons/bi";
import SectionHeading from "@/components/ui/section-heading";
import SectionSubHeading from "@/components/ui/section-sub-heading";
import CareerCard from "./career-card";
import { Career } from "@/@types/sanity.types";

export default function CareerList({ careerData }: { careerData: Career[] }) {
  const visibleCareers = careerData.filter((c) => c.isShow !== false);

  return (
    <section className="space-y-6">
      <div>
        <SectionHeading title="Experience" icon={<BiBriefcase />} className="mb-2" />
        <SectionSubHeading>
          My professional journey and career highlights.
        </SectionSubHeading>
      </div>

      <div className="space-y-5">
        {visibleCareers.map((career, index) => (
          <CareerCard key={index} career={career} />
        ))}
      </div>
    </section>
  );
}
