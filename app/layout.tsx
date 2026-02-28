import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/top-nav";

export const metadata: Metadata = {
  title: "财精灵 Demo",
  description: "AI 驱动的电商财务运营平台演示"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <TopNav />
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
