import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "YOLO — Digital-агентство полного цикла | Сайты, приложения, AI",
  description:
    "YOLO (YOU ONLY LIVE ONCE) — делаем сайты за 3-7 дней, приложения за 7-14 дней, Telegram-ботов, AI-автоматизацию. Клиенты: ВТБ, Газпром нефть, МГИМО Ventures, Альфа-Банк.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
