import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PlateFlow — Мобильная система заказов для ресторанов",
  description:
    "Сканируй QR, заказывай вместе. Видео-меню и групповые заказы для ресторанов. Подключение 49 990 ₽, обслуживание 2 490 ₽/мес.",
  openGraph: {
    title: "PlateFlow — Мобильная система заказов для ресторанов",
    description:
      "Видео-меню, групповые заказы, интеграция с iiko. Современная система для вашего ресторана.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
