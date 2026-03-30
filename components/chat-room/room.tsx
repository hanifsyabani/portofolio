import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";
import { ChatRoom } from "@/@types/chat-room";
import Image from "next/image";

export default function Room({ data, userId }: { data: ChatRoom[], userId: string }) {
    return (
        <div className="flex flex-col p-10 rounded-xl dark:bg-neutral-900 bg-neutral-100  space-y-4 mb-8 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
            {data.map((msg) => {
                const isMe = msg.userId === userId
                return (
                    <div
                        key={msg.id}
                        className={clsx(
                            "flex gap-3 w-full",
                            isMe ? "flex-row-reverse" : "flex-row"
                        )}
                    >
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center border border-neutral-300 dark:border-neutral-700 overflow-hidden">
                                <Image src={msg.avatar} alt={msg.name} width={24} height={24} className="rounded-full" />
                            </div>
                        </div>

                        <div className={clsx(
                            "flex flex-col max-w-[80%]",
                            msg.isMe ? "items-end" : "items-start"
                        )}>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                                    {msg.name}
                                </span>
                                <span className="text-[10px] text-neutral-500">
                                    {formatDistanceToNow(msg.createdAt, { addSuffix: true })}
                                </span>
                            </div>

                            <div className={clsx(
                                "px-4 py-2 rounded-2xl text-sm",
                                isMe
                                    ? "dark:bg-blue-500 text-white rounded-tr-sm"
                                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-sm border border-neutral-200 dark:border-neutral-700"
                            )}>
                                {msg.message}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}