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
import Room from "./room";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ChatRoom() {
    const t = useTranslations("ChatRoomPage");

    const { data: user, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => GetCurrentUser(),
    })

    if (isLoading) {
        return <Loader />
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

            <Room />

            {user?.aud === "authenticated" ? (
                <div className="space-y-3">
                    <Label>

                    </Label>
                    <Textarea placeholder="Add ur message here" />
                    <div className="flex justify-end">
                        <Button className="bg-blue-400 text-white cursor-pointer hover:bg-blue-500">
                            Submit
                        </Button>
                    </div>
                </div>
            ) : (
                <AuthButton />
            )}
        </section>
    )
}