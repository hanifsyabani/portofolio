import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";

export default function ProfileAbout() {
    return (
        <section>
            <SectionHeading title="About Me" />
            <SectionSubHeading>
                A brief introduction about who I am.
            </SectionSubHeading>

            <div className="space-y-8 text-neutral-800 dark:text-neutral-300 mt-10">
                <p>
                    I&apos;m Hanif, a Software Engineer and Student Researcher based in Palembang, Indonesia. I&apos;m currently working at the AI-Medical Center of Excellence (AIMed CoE), where I focus on Computer Vision research — specifically developing multi-object tracking (MOT) for pediatric heart ultrasound videos as part of my thesis. Alongside research, I manage the official website for the Intelligent System Research Group.
                </p>
                <p>
                    I was selected for Bangkit Academy 2024 as one of 4,636 students from over 45,000 applicants, where I built HidroQu — a hydroponic monitoring application using transfer learning with MobileNetV2. I also gained industry experience as a Frontend Web Developer intern at PT Pertamina Hulu Rokan, developing a fiber optic attenuation calculator using Next.js and TypeScript for their optical network systems.
                </p>
                <p>
                    Beyond that, I&apos;ve served as a Laboratory Assistant for Robotics, Control Systems, and Embedded Systems at Universitas Sriwijaya, and contributed as a Frontend Developer at Google Developer Students Club (GDSC). I&apos;ve also built real-world university platforms including SIM DIH UNSRI and the WCU UNSRI website using React.js, Next.js, TypeScript, and Tailwind CSS.
                </p>
            </div>
        </section>
    )
}
