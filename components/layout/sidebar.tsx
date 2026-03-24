import Breakline from "@/components/ui/breakline";
import Copyright from "../ui/copyright";
import Menu from "./menu";
import ProfileHeader from "./profile-header";

export default function Sidebar() {
    return (
        <header className="w-1/4">
            <div className="sticky top-10 z-10 flex flex-col transition-all duration-300">
                <ProfileHeader />
                <Breakline />
                <div className="mt-6">
                    <Menu />
                </div>
                <Breakline />
                <Copyright />
            </div>
        </header>
    )
}