'use client'

import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { PiChatTeardropText } from "react-icons/pi";
import { useTranslations } from "next-intl";
import AuthButton from "../auth/auth-button";
import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "@/service/auth";
import Loader from "../ui/loader";

export default function ChatRoom() {
    const t = useTranslations("ChatRoomPage");

    const { data: user, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => GetCurrentUser(),
    })

    if (isLoading) {
        return <Loader/>
    }

    return (
        <section>
            <SectionHeading title={t("title")} icon={<PiChatTeardropText />} className="mb-2" />
            <SectionSubHeading >
                {t("description")}
            </SectionSubHeading>

            <div className="my-10">
                <Breakline />
            </div>
            
            {user?.aud === "authenticated" ? (
                <div>
                    <h1>{user.email}</h1>
                </div>
            ) : (
                <AuthButton  />
            )}
        </section>
    )
}