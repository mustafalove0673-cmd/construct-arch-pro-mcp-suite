import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayşe Nur Karcı Beauty Vip | Premium Güzellik Hizmetleri",
  description: "Ayşe Nur Karcı Beauty Vip - Pursaklar/Ankara. Buz epilasyon, cilt bakımı, bölgesel incelme, kalıcı makyaj, protez tırnak.",
  keywords: ["güzellik merkezi", "beauty salon", "buz epilasyon", "cilt bakımı", "bölgesel incelme", "kalıcı makyaj", "protez tırnak", "Pursaklar", "Ankara", "VIP güzellik"],
  icons: { icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f1b2d] text-[#F0F4FF] overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
