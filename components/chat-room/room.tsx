import { formatDistanceToNow } from "date-fns";
import { PiUserLight } from "react-icons/pi";
import clsx from "clsx";

// Dummy data for the UI
const DUMMY_MESSAGES = [
    {
        id: "1",
        userId: "user-1",
        name: "Alice Johansen",
        message: "Hello everyone! Love the new portfolio design 🚀",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        isMe: false,
    },
    {
        id: "2",
        userId: "me",
        name: "Me",
        message: "Thanks Alice! I just added this chat room feature.",
        createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        isMe: true,
    },
    {
        id: "3",
        userId: "user-2",
        name: "Bob Smith",
        message: "This is really clean. Will you open source it?",
        createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
        isMe: false,
    }
];

export default function Room() {
    return (
        <div className="flex flex-col space-y-4 mb-8 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
            {DUMMY_MESSAGES.map((msg) => (
                <div
                    key={msg.id}
                    className={clsx(
                        "flex gap-3 w-full",
                        msg.isMe ? "flex-row-reverse" : "flex-row"
                    )}
                >
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center border border-neutral-300 dark:border-neutral-700 overflow-hidden">
                            <PiUserLight className="w-5 h-5 text-neutral-500" />
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
                            msg.isMe
                                ? "bg-blue-500 text-white rounded-tr-sm"
                                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-sm border border-neutral-200 dark:border-neutral-700"
                        )}>
                            {msg.message}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}