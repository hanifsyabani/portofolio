import { Project } from "@/@types/sanity.types";
import ProjectDetail from "@/components/projects/project-detail";
import ProjectList from "@/components/projects/project-list";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { client } from "@/sanity/client";
import { projectBySlugQuery } from "@/sanity/queries";
import { Metadata } from "next";
interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Project Detail ${METADATA.exTitle}`,
        description: "Project Detail page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/projects` },
    };
}

const options = {
  next : { revalidate: 30 },
}
export default async function page({params} : Props) {

  const project = await client.fetch<Project>(projectBySlugQuery, await params, options)

  return (
    <Container>
      <ProjectDetail projectData={project} />
    </Container>
  )
}
