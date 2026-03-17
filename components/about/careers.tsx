
"use client";

import { CAREERS } from "@/constants/careers";
import CareerCard from "./career-card";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { MdWorkHistory } from "react-icons/md";

export default function Careers() {
  const filteredCareers = CAREERS.filter((career) => career.isShow !== false);

  return (
    <section className="w-full">
        <SectionHeading title="Karir" icon={<MdWorkHistory />} />
        <SectionSubHeading>
            Beberapa pengalaman profesional  yang pernah saya jalani.
        </SectionSubHeading>
      <div className="space-y-4 mt-10">
        {filteredCareers.map((career, index) => (
          <CareerCard key={index} career={career} />
        ))}
      </div>
    </section>
  );
}
