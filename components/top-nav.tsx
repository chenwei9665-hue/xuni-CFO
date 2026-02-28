"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "老板驾驶舱" },
  { href: "/alerts", label: "预警中心" },
  { href: "/ai-analysis", label: "AI 分析面板" },
  { href: "/workflow", label: "服务日志" }
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm text-slate-500">AI 驱动的电商财务运营平台</p>
          <h1 className="text-lg font-semibold text-brand-900">财精灵 Demo</h1>
        </div>
        <nav className="flex gap-2">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  active ? "bg-brand-500 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
