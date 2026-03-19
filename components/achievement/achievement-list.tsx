'use client'

import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { MdEmojiEvents } from "react-icons/md";
import AchievementCard from "./achievement-card";
import { Achievement } from "@/@types/sanity.types";

interface AchievementListProps {
    achievementsData: Achievement[]
}

export default function AchievementList({ achievementsData }: AchievementListProps) {
    return (
        <section>
            <SectionHeading title="Pencapaian" icon={<MdEmojiEvents />} className="mb-2"/>
            <SectionSubHeading>
                Beberapa pencapaian yang pernah saya raih selama perjalanan karir saya.
            </SectionSubHeading>

            <div className="my-10">
                <Breakline />
            </div>

            {achievementsData?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {achievementsData.map((achievement: Achievement) => (
                        <AchievementCard
                            key={achievement.name}
                            {...achievement}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-neutral-400">Tidak ada pencapaian untuk ditampilkan.</p>
                </div>
            )}
        </section>
    );
}

