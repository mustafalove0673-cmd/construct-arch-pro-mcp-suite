import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klasik Erkek Kuaförü | Premium Berber Hizmetleri",
  description: "Profesyonel erkek kuaförü hizmetleri. Sac kesimi, sakal tiras, damat tiras ve daha fazlasi. Modern vintage tarzda kaliteli berber deneyimi.",
  keywords: ["berber", "kuaför", "erkek kuaförü", "saç kesimi", "sakal tıraşı", "damat tıraşı"],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Klasik Erkek Kuaförü | Premium Berber Hizmetleri",
    description: "Profesyonel erkek kuaförü hizmetleri. Modern vintage tarzda kaliteli berber deneyimi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-charcoal text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
