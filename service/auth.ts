'use server'

import { createClient } from "@/lib/supabase/server";

export async function GetCurrentUser() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    } catch (error) {
        throw error;
    }
}

export async function Logout() {
    try {
        const supabase = await createClient();
        await supabase.auth.signOut();
    } catch (error) {
        throw error;
    }
}

