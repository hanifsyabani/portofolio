import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";

export default function ProfileAbout() {
    return (
        <section>
            <SectionHeading title="About Me" />
            <SectionSubHeading>
                Perkenalan singkat tentang diri saya.
            </SectionSubHeading>

            <div className="space-y-8 text-neutral-800 dark:text-neutral-300 mt-10 max-w-3xl">
                <p>
                    Saya Hanif, seorang Software Engineer yang berbasis di Palembang dan sangat antusias dalam membangun solusi digital yang berdampak. Saya mengkhususkan diri dalam pengembangan platform web  menggunakan teknologi modern seperti Next.js, TypeScript.
                </p>
                <p>
                    Fokus saya terletak pada merancang arsitektur perangkat lunak yang tidak hanya fungsional, tetapi juga terstruktur dengan baik, mudah dipelihara, dan dapat diskalakan untuk memenuhi kebutuhan bisnis yang terus berkembang. Saya sangat percaya bahwa kode berkualitas tinggi harus sejalan dengan efisiensi dan desain logis yang jelas.
                </p>
                <p>
                    Selain keterampilan teknis, saya membawa kemampuan komunikasi yang kuat, pemikiran kritis, dan manajemen waktu ke dalam setiap proyek. Saya senang bekerja dalam lingkungan kolaboratif dan memanfaatkan kemampuan kepemimpinan saya untuk memastikan setiap proyek menghasilkan hasil optimal dan dampak nyata yang berarti.
                </p>
            </div>
        </section>
    )
}
