import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
})

export async function proxy(request: NextRequest) {
  // Skip Supabase session refresh for auth callback (it handles its own session)
  if (request.nextUrl.pathname.startsWith('/auth/callback')) {
    return NextResponse.next()
  }

  // Create a response using next-intl middleware
  let response = intlMiddleware(request)

  // Create Supabase client with cookie handling on the response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Set cookies on the request (for downstream server components)
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          // Re-run intl middleware to pick up updated cookies
          response = intlMiddleware(request)
          // Set cookies on the response (for the browser)
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh the session — this keeps the user logged in
  await supabase.auth.getUser()

  return response
}

export const config = {
  // Match all pathnames except for:
  // - /api, /trpc, /_next, /_vercel
  // - static files (those containing a dot like favicon.ico)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
