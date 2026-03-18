import AchievementList from "@/components/achievement/achievement-list";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Achievements ${METADATA.exTitle}`,
        description: "Achievements page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/about` },
    };
}
export default function page() {
  return (
    <Container>
      <AchievementList/>
    </Container>
  )
}
