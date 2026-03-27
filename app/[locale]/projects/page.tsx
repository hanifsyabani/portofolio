import { Project } from "@/@types/sanity.types";
import ProjectList from "@/components/projects/project-list";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { client } from "@/sanity/client";
import { allProjectQuery } from "@/sanity/queries";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Projects ${METADATA.exTitle}`,
        description: "Projects page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/projects` },
    };
}

const options = {
  next : { revalidate: 30 },
}
export default async function page() {

  const projects = await client.fetch<Project[]>(allProjectQuery, {}, options)

  return (
    <Container>
      <ProjectList projectsData={projects} />
    </Container>
  )
}
