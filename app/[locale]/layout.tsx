import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../../components/layout/sidebar";
import { METADATA } from "../../constants/metadata";
import ThemeProviderContext from "../../provider/theme-provider";
import NextTopLoader from "nextjs-toploader";
import QueryProvider from "@/provider/query-provider";
import { Toaster } from "sonner";
import AosProvider from "../../provider/aos-provider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "",
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params
}: Props) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning={true} >
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="383586cf-9bf1-4a89-b292-ee3e0946d626"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <NextTopLoader
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <QueryProvider>
          <AosProvider>
            <ThemeProviderContext>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <div className="lg:flex lg:max-w-7xl mx-auto py-4 lg:py-10">
                  <Toaster position="top-right" richColors />
                  <Sidebar />
                  <main className="px-0 lg:px-4 lg:max-w-250 w-full">
                    {children}
                  </main>

                </div>
              </NextIntlClientProvider>
            </ThemeProviderContext>
          </AosProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
