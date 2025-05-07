// src/app/layout.tsx
// mainタグのパディングをレスポンシブ対応

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社めいと - 南魚沼の未来を育む",
  description: "雪エネルギーと水耕栽培、地域連携で南魚沼に新しい価値を創造する株式会社めいとの公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#98fb98]`}>
        <Header /> {/* Header.tsx が修正されていれば、ここでレスポンシブヘッダーが適用される */}
        {/* ↓ main タグの左右パディングを調整: スマホではpx-4、sm以上の画面でpx-6に */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}