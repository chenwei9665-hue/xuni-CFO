import Link from "next/link";
import { AiAnalysisPanel } from "@/components/ai-analysis-panel";
import { alerts } from "@/data/demo-data";

export default function AiAnalysisPage({ searchParams }: { searchParams?: { id?: string } }) {
  const currentId = searchParams?.id ?? alerts[0].id;

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold text-slate-900">AI 分析面板</h2>
        <p className="mt-2 text-sm text-slate-600">
          AI 在这里承担“解释 + 影响评估 + 动作建议”，不是通用聊天窗口。
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        {alerts.map((item) => (
          <Link
            key={item.id}
            href={`/ai-analysis?id=${item.id}`}
            className={`rounded-xl border px-3 py-1 text-sm ${
              currentId === item.id
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            {item.source}
          </Link>
        ))}
      </div>

      <AiAnalysisPanel alertId={currentId} />
    </div>
  );
}
