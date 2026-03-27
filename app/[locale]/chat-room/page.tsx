"use client";

import Container from "@/components/ui/container-custom";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("ChatRoomPage");
    return (
        <Container>
            <h1>{t("title")}</h1>
        </Container>
    )
}