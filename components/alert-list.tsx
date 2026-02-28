import Link from "next/link";
import { AlertItem } from "@/data/demo-data";

const severityStyle: Record<string, string> = {
  高: "bg-red-100 text-red-700",
  中: "bg-amber-100 text-amber-700",
  低: "bg-slate-100 text-slate-700"
};

export function AlertList({ items }: { items: AlertItem[] }) {
  return (
    <div className="card overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-slate-200 text-slate-500">
          <tr>
            <th className="pb-3">标题</th>
            <th className="pb-3">严重级别</th>
            <th className="pb-3">影响对象</th>
            <th className="pb-3">原因</th>
            <th className="pb-3">建议动作</th>
            <th className="pb-3">状态</th>
            <th className="pb-3">查看</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 align-top">
              <td className="py-3 font-medium text-slate-800">{item.title}</td>
              <td className="py-3">
                <span className={`rounded px-2 py-1 text-xs ${severityStyle[item.severity]}`}>{item.severity}</span>
              </td>
              <td className="py-3 text-slate-600">{item.impact}</td>
              <td className="py-3 text-slate-600">{item.reason}</td>
              <td className="py-3 text-slate-600">{item.action}</td>
              <td className="py-3 text-slate-700">{item.status}</td>
              <td className="py-3">
                <Link
                  href={`/ai-analysis?id=${item.id}`}
                  className="rounded-lg border border-brand-500 px-3 py-1 text-xs text-brand-700 hover:bg-brand-50"
                >
                  AI 分析
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
