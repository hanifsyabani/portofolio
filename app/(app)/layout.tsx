import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../components/layout/sidebar";
import { METADATA } from "../constants/metadata";
import ThemeProviderContext from "../provider/theme-provider";

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
        <ThemeProviderContext>
          <div className="flex max-w-7xl mx-auto py-10">
            <Sidebar />
            <main className="px-4 ">
              {children}
            </main>
          </div>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
