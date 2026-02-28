import { alerts, aiAnalysis } from "@/data/demo-data";

const priorityStyle: Record<string, string> = {
  高: "bg-red-100 text-red-700",
  中: "bg-amber-100 text-amber-700",
  低: "bg-slate-100 text-slate-700"
};

export function AiAnalysisPanel({ alertId }: { alertId: string }) {
  const alert = alerts.find((item) => item.id === alertId) ?? alerts[0];
  const analysis = aiAnalysis[alert.id];

  return (
    <aside className="card space-y-4">
      <div>
        <p className="text-xs text-slate-500">AI 财务分析助手</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{alert.title}</h3>
      </div>

      <section>
        <h4 className="font-medium text-slate-800">为什么发生</h4>
        <p className="mt-1 text-sm text-slate-600">{analysis.why}</p>
      </section>

      <section>
        <h4 className="font-medium text-slate-800">影响多大</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {analysis.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="font-medium text-slate-800">建议怎么处理（含优先级）</h4>
        <div className="mt-2 space-y-2">
          {analysis.suggestions.map((suggestion) => (
            <div key={suggestion.text} className="rounded-xl border border-slate-200 p-3">
              <span className={`rounded px-2 py-1 text-xs ${priorityStyle[suggestion.priority]}`}>
                {suggestion.priority}
              </span>
              <p className="mt-2 text-sm text-slate-700">{suggestion.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">处理顺序：{analysis.nextPriority}</p>
      </section>

      <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm text-white hover:bg-brand-700">继续追问（演示占位）</button>
    </aside>
  );
}
