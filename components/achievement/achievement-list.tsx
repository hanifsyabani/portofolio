'use client'

import { useQuery } from "@tanstack/react-query";
import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { MdEmojiEvents } from "react-icons/md";
import { GetAllAchievement } from "@/service/achievement";
import AchievementCard from "./achievement-card";
import { AchievementItem } from "@/@types/achievement";
import Loader from "../ui/loader";

export default function AchievementList() {

    const { data: dataAchievements, isLoading: isLoadingAchievements } = useQuery({
        queryKey: ["achievements"],
        queryFn: () => GetAllAchievement()
    })
    if (isLoadingAchievements) <Loader/>
    return (
        <section>
            <SectionHeading title="Pencapaian" icon={<MdEmojiEvents />} />
            <SectionSubHeading>
                Beberapa pencapaian yang pernah saya raih selama perjalanan karir saya.
            </SectionSubHeading>

            <Breakline />

            {dataAchievements?.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dataAchievements.map((achievement : AchievementItem) => (
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
