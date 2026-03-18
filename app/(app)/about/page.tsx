import { Career } from "@/@types/sanity.types";
import Careers from "@/components/about/careers-list";
import ProfileAbout from "@/components/about/profile-about";
import Breakline from "@/components/ui/breakline";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { client } from "@/sanity/client";
import { allCareerQuery } from "@/sanity/queries";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `About ${METADATA.exTitle}`,
        description: "About page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/about` },
    };
}

const options = {
    next: { revalidate: 30 }
}
export default async function page() {

    const careers = await client.fetch<Career[]>(
        allCareerQuery,
        {},
        options
    )
    return (
        <Container>
            <ProfileAbout />
            <div className="my-10">
                <Breakline />
            </div>
            <Careers careerData={careers} />
        </Container>
    )
}