"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import ProfileHeader from "./profile-header";
import Breakline from "@/components/ui/breakline";
import Menu from "./menu";
import Copyright from "../ui/copyright";
import { usePathname } from "next/navigation";
import RotatingText from "../ui/rotating-text";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <div className="lg:hidden w-full mb-8 sticky top-0 z-4">
            <nav className="flex justify-between items-center px-4 py-4 0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="text-lg font-bold">
                    <RotatingText
                        texts={["Muhammad Hanif Sya'bani", "Frontend Developer", "ML Enthusiast"]}
                        mainClassName="px-2 sm:px-2 md:px-3   overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={7000}
                    />
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    aria-label="Open menu"
                >
                    <MenuIcon className="w-5 h-5" />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 shadow-2xl z-50 overflow-y-auto flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-bold text-xl">Menu</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                
                                <ProfileHeader />
                                <Breakline />
                                <div className="mt-4 mb-4 flex-1">
                                    <Menu />
                                </div>
                                <Breakline />
                                <Copyright />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
