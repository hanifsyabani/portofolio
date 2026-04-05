
'use client'

import { createClient } from '@/lib/supabase/client'
import { FcGoogle } from "react-icons/fc";

export default function AuthButton() {
  const supabase = createClient()

  const login = async (provider: 'google' | 'github') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => login('google')} className="flex items-center gap-2 dark:bg-white bg-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-300 cursor-pointer transition-colors p-2 text-neutral-900"  >
        <FcGoogle className="text-xl" />
        Sign in with Google
      </button>

      {/* <button onClick={() => login('github')}>
        Login dengan GitHub
      </button> */}
    </div>
  )
}