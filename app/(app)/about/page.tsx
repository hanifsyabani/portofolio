import Careers from "@/components/about/careers";
import ProfileAbout from "@/components/about/profile-about";
import Breakline from "@/components/ui/breakline";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `About ${METADATA.exTitle}`,
        description: "About page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/about` },
    };
}
export default function page() {
    return (
        <Container>
            <ProfileAbout />
            <div className="my-10">
                <Breakline />
            </div>
            <Careers/>
        </Container>
    )
}