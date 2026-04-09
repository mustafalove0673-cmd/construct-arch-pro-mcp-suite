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
  title: "İpek Özmel Güzellik Merkezi | Premium Güzellik Hizmetleri",
  description: "İpek Özmel Güzellik Merkezi - Premium kadın güzellik hizmetleri. Saç bakımı, cilt bakımı, makyaj, manikür, spa ve daha fazlası. Kendinizi özel hissedin.",
  keywords: ["güzellik merkezi", "beauty salon", "saç bakımı", "cilt bakımı", "makyaj", "spa", "manikür"],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
