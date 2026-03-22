import { HiMail } from "react-icons/hi";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import Breakline from "../ui/breakline";
import ContactList from "./contact-list";
import ContactForm from "./contact-form";

export default function Contact() {
    return (
        <section className="space-y-6">
            <div>
                <SectionHeading title="Contact" icon={<HiMail />} className="mb-2" />
                <SectionSubHeading>
                    Got a question, proposal, or just want to say hello? Go ahead.
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