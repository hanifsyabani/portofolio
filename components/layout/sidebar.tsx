'use client'

import Breakline from "@/components/ui/breakline";
import Copyright from "../ui/copyright";
import Menu from "./menu";
import ProfileHeader from "./profile-header";
import MobileMenu from "./mobile-menu";
import LogoutButton from "./logout-button";
import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "@/service/auth";
export default function Sidebar() {

    const { data: user, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => GetCurrentUser(),
    })

    if (isLoading) {
        return (
            <header className="w-1/4 hidden lg:block ">
                <div className="sticky top-10 z-10 flex flex-col transition-all duration-300">
                    <ProfileHeader />
                    <Breakline />
                    <div className="mt-6">
                        <Menu />
                    </div>
                    <Breakline />
                    <LogoutButton />
                    <Copyright />
                </div>
            </header>
        )
    }
    return (
        <>
            <header className="w-1/4 hidden lg:block ">
                <div className="sticky top-10 z-10 flex flex-col transition-all duration-300">
                    <ProfileHeader />
                    <Breakline />
                    <div className="mt-6">
                        <Menu />
                    </div>
                    <Breakline />
                    {user?.aud == "authenticated" && <LogoutButton />}
                    <Copyright />
                </div>
            </header>

            {/* mobile */}
            <MobileMenu isAuthStatus={user?.aud} />
        </>
    )
}