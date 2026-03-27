"use client";

import { HiMail } from "react-icons/hi";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import Breakline from "../ui/breakline";
import ContactList from "./contact-list";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("ContactPage");
    return (
        <section className="space-y-6">
            <div>
                <SectionHeading title={t("title")} icon={<HiMail />} className="mb-2" />
                <SectionSubHeading>
                    {t("description")}
                </SectionSubHeading>
            </div>

            <ContactList />

            <div className="my-10">
                <Breakline />
            </div>

            <ContactForm />
        </section>
    );
}