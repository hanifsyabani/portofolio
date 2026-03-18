import Introduction from "@/components/home/introduction";
import Skills from "@/components/home/skills-list";
import Breakline from "@/components/ui/breakline";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `${METADATA.creator} | Portfolio`,
    description: "Personal website, portfolio, blog",
    alternates: {
      canonical: `${process.env.DOMAIN}`,
    },
    openGraph: {
      title: `${METADATA.creator} | Personal Website`,
      description: "Personal website, portfolio, blog",
      url: `${process.env.DOMAIN}`,
      images: METADATA.profile,
      siteName: METADATA.openGraph.siteName,
      type: "website",
    },
  };
}


export default function page() {
    return (
        <Container>
            <Introduction />

            <div className="my-10">
                <Breakline />
            </div>
            <Skills />
        </Container>
    )
}