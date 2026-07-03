import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./sections.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "YOLO — Digital-агентство полного цикла",
  description:
    "YOLO (YOU ONLY LIVE ONCE) — премиальный digital: сайты, приложения, Telegram-боты, маркетинг и AI-автоматизация.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
