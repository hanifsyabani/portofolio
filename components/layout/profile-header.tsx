import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VerifiedIcon } from "lucide-react";


export default function ProfileHeader() {
    return (
        <div
            className={cn(
                "flex w-full grow items-center gap-4 lg:flex-col  lg:gap-0.5",
            )}
        >
            <Image
                src={"/images/hanif.jpg"}
                width={80}
                height={80}
                alt="Muhammad Hanif Sya'bani"
                className="border-2 border-neutral-400 w-24 object-cover h-24 dark:border-neutral-600 lg:hover:scale-105 rounded-full"
            />

            <div className="mt-1 flex items-center gap-2 lg:mt-4">
                <Link href="/" passHref>
                    <h2 className="grow text-lg font-medium text-center">
                        Muhammad Hanif Sya'bani
                    </h2>
                </Link>

                {/* <Tooltip title="Verified"> */}
                    <VerifiedIcon size={18} className="text-blue-400" />
                {/* </Tooltip> */}
            </div>

            <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                @muhanifs_
            </div>

            <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
                {/* <IntlToggle />
                <ThemeToggle /> */}
            </div>
        </div>
    )
}
