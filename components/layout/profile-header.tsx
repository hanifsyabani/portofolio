import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { MdVerified } from "react-icons/md";


export default function ProfileHeader() {
    return (
        <div
            className={cn(
                "flex w-full grow  items-center gap-4 flex-col lg:gap-0.5",
            )}
        >
            <div className="flex lg:flex-col items-center gap-4">
                <div className="lg:w-24 lg:h-24 w-20 h-20">
                    <Image
                        src={"/images/hanif.jpg"}
                        width={80}
                        height={80}
                        alt="Muhammad Hanif Sya'bani"
                        className="border-2 border-neutral-400 object-cover w-full h-full dark:border-neutral-600 lg:hover:scale-105 rounded-full"
                    />
                </div>

                <div className="mt-1 flex items-center gap-2 lg:mt-4">
                    <Link href="/" passHref>
                        <h2 className="grow lg:text-lg text-sm font-medium lg:text-center">
                            Muhammad Hanif Sya'bani
                        </h2>
                    </Link>

                    {/* <Tooltip title="Verified"> */}
                    <MdVerified size={18} className="text-blue-400" />
                    {/* </Tooltip> */}
                </div>
            </div>

            <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                @muhanifs_
            </div>

            <div className="justify-between gap-6 lg:mt-4 flex">
                {/* <IntlToggle /> */}
                <ThemeToggle />
            </div>
        </div>
    )
}
