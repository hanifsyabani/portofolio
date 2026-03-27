'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'

export default function IntlToggle() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const switchLocale = (newLocale: 'en' | 'id') => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale })
        })
    }

    return (
        <>
            <div className={`lg:flex hidden gap-1 items-center px-3 dark:bg-neutral-800 bg-neutral-300 rounded-full transition-opacity ${isPending ? 'opacity-60 pointer-events-none' : ''}`}>
                <button
                    onClick={() => switchLocale('id')}
                    className={`flex items-center justify-center w-7 h-7 rounded-full cursor-pointer transition-all duration-200 text-xs font-semibold ${locale === 'id'
                        ? 'dark:bg-blue-600 bg-neutral-400 dark:text-neutral-100 text-neutral-100 scale-105 shadow-sm'
                        : 'dark:text-neutral-400 text-neutral-600 hover:dark:text-neutral-200 hover:text-neutral-500'
                        }`}
                    title="Bahasa Indonesia"
                    aria-label="Switch to Bahasa Indonesia"
                >
                    ID
                </button>

                <button
                    onClick={() => switchLocale('en')}
                    className={`hidden lg:flex items-center justify-center w-7 h-7 rounded-full cursor-pointer transition-all duration-200 text-xs font-semibold ${locale === 'en'
                        ? 'dark:bg-blue-600 bg-neutral-400 dark:text-neutral-100 text-neutral-100 scale-105 shadow-sm'
                        : 'dark:text-neutral-400 text-neutral-600 hover:dark:text-neutral-200 hover:text-neutral-500'
                        }`}
                    title="English"
                    aria-label="Switch to English"
                >
                    EN
                </button>
            </div>
            {/* mobile */}
            <button
                onClick={() => switchLocale(locale === 'en' ? 'id' : 'en')}
                className={`flex lg:hidden items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-all duration-200 text-xs font-semibold ${locale
                    ? 'dark:bg-blue-600 bg-neutral-400 dark:text-neutral-100 text-neutral-100 scale-105 shadow-sm'
                    : 'dark:text-neutral-400 text-neutral-600 hover:dark:text-neutral-200 hover:text-neutral-500'
                    }`}
                title="English"
                aria-label="Switch to English"
            >
                {locale === 'en' ? 'ID' : 'EN'}
            </button>
        </>
    )
}