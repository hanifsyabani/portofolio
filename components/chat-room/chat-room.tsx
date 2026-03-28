'use client'

import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { PiChatTeardropText } from "react-icons/pi";
import { useTranslations } from "next-intl";
import AuthButton from "../auth/auth-button";

export default function ChatRoom() {
    const t = useTranslations("ChatRoomPage");

    return (
        <section>
            <SectionHeading title={t("title")} icon={<PiChatTeardropText />} className="mb-2" />
            <SectionSubHeading >
                {t("description")}
            </SectionSubHeading>

            <div className="my-10">
                <Breakline />
            </div>

            <AuthButton />
        </section>
    )
}