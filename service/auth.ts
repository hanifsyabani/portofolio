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

