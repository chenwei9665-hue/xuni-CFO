import { serviceLogs, serviceMonthlyOverview, serviceSummaryCards, todoItems, type ServiceStatus } from "@/data/demo-data";

const statusStyle: Record<ServiceStatus, string> = {
  已完成: "bg-emerald-100 text-emerald-700",
  进行中: "bg-blue-100 text-blue-700",
  待完成: "bg-amber-100 text-amber-700"
};

export function ServiceLogBoard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {serviceSummaryCards.map((card) => (
          <article key={card.title} className="card">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-slate-800">{card.title}</h3>
              <span className={`rounded px-2 py-1 text-xs ${statusStyle[card.status]}`}>{card.status}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h3 className="text-base font-semibold text-slate-900">本月服务日志</h3>
        <p className="mt-1 text-sm text-slate-500">按日期从近到远展示，持续呈现交付进展与异常处理动作。</p>

        <div className="mt-4 space-y-3">
          {serviceLogs.map((log) => (
            <article key={log.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">{log.date}</span>
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">{log.category}</span>
                <span className={`rounded px-2 py-1 ${statusStyle[log.status]}`}>{log.status}</span>
              </div>
              <h4 className="mt-2 font-medium text-slate-900">{log.item}</h4>
              <p className="mt-1 text-sm text-slate-600">{log.summary}</p>
              <div className="mt-2 grid gap-1 text-xs text-slate-600 md:grid-cols-2">
                <p>负责人：{log.owner}</p>
                <p>下一步：{log.nextAction}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h3 className="text-base font-semibold text-slate-900">待完成 / 待配合事项</h3>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {todoItems.map((item) => (
            <li key={item} className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="card bg-slate-900 text-slate-100">
        <p className="text-sm">
          财精灵不仅提供系统与分析，还会按月持续完成财务交付，并让客户清楚看到每一项服务进度。
        </p>
      </section>
    </div>
  );
}

export function MonthlyCompletionSummary() {
  return (
    <div className="grid min-w-[280px] grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-sm">
      <div className="rounded-lg bg-slate-50 p-2">
        <p className="text-xs text-slate-500">本月应完成事项</p>
        <p className="font-semibold text-slate-900">{serviceMonthlyOverview.planned}</p>
      </div>
      <div className="rounded-lg bg-emerald-50 p-2">
        <p className="text-xs text-emerald-700">已完成</p>
        <p className="font-semibold text-emerald-800">{serviceMonthlyOverview.completed}</p>
      </div>
      <div className="rounded-lg bg-blue-50 p-2">
        <p className="text-xs text-blue-700">进行中</p>
        <p className="font-semibold text-blue-800">{serviceMonthlyOverview.inProgress}</p>
      </div>
      <div className="rounded-lg bg-amber-50 p-2">
        <p className="text-xs text-amber-700">待完成</p>
        <p className="font-semibold text-amber-800">{serviceMonthlyOverview.pending}</p>
      </div>
    </div>
  );
}
