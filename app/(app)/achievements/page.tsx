import { Achievement } from "@/@types/sanity.types";
import AchievementList from "@/components/achievement/achievement-list";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { client } from "@/sanity/client";
import { allAchievementQuery } from "@/sanity/queries";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Achievements ${METADATA.exTitle}`,
        description: "Achievements page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/about` },
    };
}

const options = {
  next : { revalidate: 30 },
}
export default async function page() {

   const achievements = await client.fetch<Achievement[]>(
    allAchievementQuery,
    {},
    options
  )
  return (
    <Container>
      <AchievementList achievementsData={achievements}/>
    </Container>
  )
}
