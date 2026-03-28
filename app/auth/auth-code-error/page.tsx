import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        Authentication Error
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Something went wrong during sign in. Please try again.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        Go back home
      </Link>
    </div>
  )
}
