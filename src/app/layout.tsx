import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ÜREKOL GÜ İNŞAAT | Premium Yapı & Mimari Projeler",
  description: "ÜREKOL GÜ İNŞAAT - Türkiye'nin önde gelen inşaat şirketi. Konut, ticari, villa ve mimari projelerde 20+ yıllık tecrübe, kaliteli malzeme, zamanında teslimat.",
  keywords: ["inşaat", "mimari", "konut", "villa", "ticari yapı", "proje", "Ürekol Gü", "yapı", "taşeron", "anahtar teslim"],
  icons: { icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-[#F5F0E8] overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
