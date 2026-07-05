import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Фрибетчик — фрибеты и бонусы букмекерских контор",
    template: "%s — Фрибетчик",
  },
  description:
    "Фрибетчик — агрегатор фрибетов, бонусов и промокодов легальных букмекерских контор России. Только проверенные БК, актуальные предложения и обзоры.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cloud text-ink-2">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
