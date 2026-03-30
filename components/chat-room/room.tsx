import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";
import { ChatRoom } from "@/@types/chat-room";
import Image from "next/image";

type Props = {
  data: ChatRoom[];
  userId: string;
};

export default function Room({ data, userId }: Props) {
  return (
    <div className="flex flex-col p-5 mb-8 space-y-8 max-h-[500px] overflow-y-auto rounded-xl bg-neutral-100 dark:bg-neutral-900 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
      {data.map((msg) => {
        const isMe = msg.userId === userId;

        return (
          <div
            key={msg.id}
            className={clsx("flex w-full gap-2", {
              "flex-row-reverse": isMe,
            })}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center w-8 h-8 overflow-hidden border rounded-full bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700">
                <Image
                  src={msg.user.avatar}
                  alt={msg.user.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
            </div>

            <div
              className={clsx("flex flex-col max-w-[80%]", {
                "items-end": isMe,
                "items-start": !isMe,
              })}
            >
              <div className="flex items-center mb-1 text-xs gap-1 lg:gap-2">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  {msg.user.name}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {formatDistanceToNow(msg.createdAt, { addSuffix: true })}
                </span>
              </div>

              <div
                className={clsx(
                  "px-4 py-2 text-sm rounded-2xl mt-2",
                  isMe
                    ? "bg-blue-500 text-white rounded-tr-sm"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-tl-sm"
                )}
              >
                {msg.message}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}