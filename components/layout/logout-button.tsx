'use client';

import { BiSolidLogOut } from "react-icons/bi";
import { Button } from "../ui/button";
import { Logout } from "@/service/auth";
import { toast } from "sonner";

export default function LogoutButton() {
    const handleLogout = async () => {
        try {
            await Logout();
            toast.success("Logout success")
            window.location.reload();
        } catch (error) {
            toast.error("Logout failed")
        }
    };

    return (
        <Button onClick={handleLogout} className="text-red-100 py-1 bg-red-500/10 my-3 hover:bg-red-500/20 hover:text-red-200 transition-colors">
            <BiSolidLogOut/>
            Logout 
        </Button>
    )
}