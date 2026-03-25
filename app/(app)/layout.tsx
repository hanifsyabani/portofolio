import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../../components/layout/sidebar";
import { METADATA } from "../../constants/metadata";
import ThemeProviderContext from "../../provider/theme-provider";
import NextTopLoader from "nextjs-toploader";
import QueryProvider from "@/provider/query-provider";
import { Toaster } from "sonner";

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

import AosProvider from "../../provider/aos-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
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
              <div className="lg:flex lg:max-w-7xl mx-auto py-4 lg:py-10">
                <Toaster position="top-right" richColors />
                  <Sidebar />
                <main className="px-0 lg:px-4 lg:max-w-250 w-full">
                  {children}
                </main>

              </div>
            </ThemeProviderContext>
          </AosProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
