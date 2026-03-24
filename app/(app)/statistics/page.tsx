import GithubStats from "@/components/statistics/github-stats";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Statistics ${METADATA.exTitle}`,
        description: "Stats page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/statistics` },
    };
}


export default function Page() {
  return (
   <Container>
       <GithubStats />
   </Container>
    
  );
}