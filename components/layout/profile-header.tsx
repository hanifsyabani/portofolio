import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { MdVerified } from "react-icons/md";
import IntlToggle from "./intl-toggle";
import RotatingText from "../ui/rotating-text";


export default function ProfileHeader() {
    return (
        <div
            className={cn(
                "lg:flex w-full grow items-center gap-4 flex-col lg:gap-2",
            )}
        >
            <div className="lg:flex lg:flex-col items-center gap-4">
                <div className="lg:w-24 lg:h-24 w-20 h-20">
                    <Image
                        src={"/images/hanif.jpg"}
                        width={80}
                        height={80}
                        alt="Muhammad Hanif Sya'bani"
                        className="border-2 border-neutral-400 object-cover w-full h-full dark:border-neutral-600 lg:hover:scale-105 rounded-full"
                    />
                </div>

                <div className="mt-1 flex items-center gap-2 lg:mt-4 my-2 lg:my-0">
                    <Link href="/" passHref>
                        <h2 className="grow lg:text-lg text-sm font-medium lg:text-center">
                            Muhammad Hanif Sya'bani
                        </h2>
                    </Link>

                    <MdVerified size={18} className="text-blue-400" />
                </div>
            </div>

            <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                @muhanifs_
            </div>


            <div>
                <RotatingText
                    texts={["Muhammad Hanif Sya'bani", "Frontend Developer", "ML Enthusiast"]}
                    mainClassName="text-xs inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-500 font-medium dark:bg-black shadow-[inset_0_0_20px_rgba(250,204,21,0.25)]"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={5000}
                />
            </div>           

            <div className="lg:justify-between justify-start gap-2 lg:gap-6 mt-4 flex">
                <IntlToggle />
                <ThemeToggle />
            </div>
        </div>
    )
}
