import Breakline from "@/components/ui/breakline";
import Copyright from "../../../components/ui/copyright";
import Menu from "./menu";
import ProfileHeader from "./profile-header";

export default function Sidebar() {
    return (
        <header className="w-1/4">
            <ProfileHeader />
            <Breakline />
            <div className="mt-6">
                <Menu />
            </div>
            <Breakline />
            <Copyright />
        </header>
    )
}