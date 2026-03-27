import Contact from "@/components/contact/contact";
import Container from "@/components/ui/container-custom";
import { METADATA } from "@/constants/metadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Contact ${METADATA.exTitle}`,
        description: "Contact page of personal website, portfolio, blog",
        alternates: { canonical: `${process.env.DOMAIN}/contact` },
    };
}


export default function page() {
    return (
        <Container>
            <Contact/>
        </Container>
    )
}