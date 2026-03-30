'use client'

import Breakline from "../ui/breakline";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { PiChatTeardropText } from "react-icons/pi";
import { useTranslations } from "next-intl";
import AuthButton from "../auth/auth-button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "@/service/auth";
import Loader from "../ui/loader";
import Room from "./room";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { GetAllChatRoom, PostChat } from "@/service/chat-room";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


type ChatPayload = {
    message: string
    name: string
    email: string
    avatar: string
}
export default function ChatRoom() {
    const t = useTranslations("ChatRoomPage");
    const schema = z.object({
        message: z.string().min(1, t("form.error_message")),
    })
    type FormFields = z.infer<typeof schema>

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    })

    const { data: user, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => GetCurrentUser(),
    })

    const { data: dataChatRoom, isLoading: chatRoomLoading, refetch } = useQuery({
        queryKey: ["dataChatRoom"],
        queryFn: () => GetAllChatRoom(),
    })


    const { mutate: postChat, isPending } = useMutation({
        mutationFn: (data: ChatPayload) => PostChat(data, user?.id!),
        onSuccess: () => {
            toast.success(t("form.success"))
            reset()
            refetch()
        }, onError: (error: any) => {
            toast.error(error.message)
        }
    })

    function onSubmit(data: FormFields) {
        const payload: ChatPayload = {
            ...data,
            name: user?.user_metadata.full_name,
            email: user?.email ?? "",
            avatar: user?.user_metadata.avatar_url ?? "",
        }
        postChat(payload)
    }
    if (isLoading || chatRoomLoading) {
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

            <Room data={dataChatRoom?.data} userId={user?.id!} />

            {user?.aud === "authenticated" ? (
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

                    <Textarea
                        placeholder="Add ur message here..."
                        {...register("message")}
                        className="p-4"
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit(onSubmit)()
                            }
                        }}
                    />
                    {errors.message && (
                        <p className="text-[11px] text-red-400">{errors.message.message}</p>
                    )}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-blue-400 text-white cursor-pointer hover:bg-blue-500" disabled={isPending}>
                            {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : "Submit"}
                        </Button>
                    </div>
                </form>
            ) : (
                <AuthButton />
            )}
        </section>
    )
}