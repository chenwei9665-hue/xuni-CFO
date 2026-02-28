import { workflowItems } from "@/data/demo-data";

const columns = ["待处理", "跟进中", "已处理", "已复盘"];

export function WorkflowBoard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {columns.map((column) => (
        <section key={column} className="card space-y-3">
          <h3 className="text-sm font-semibold text-slate-800">{column}</h3>
          {workflowItems
            .filter((item) => item.status === column)
            .map((item) => (
              <article key={item.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
                <p className="font-medium text-slate-800">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600">来源预警：{item.alert}</p>
                <p className="text-xs text-slate-600">负责人：{item.owner}</p>
                <p className="mt-2 text-xs text-slate-700">专家判断：{item.expert}</p>
                <p className="mt-1 text-xs text-slate-700">建议动作：{item.action}</p>
                <p className="mt-1 text-xs text-slate-700">复盘结论：{item.conclusion}</p>
                <p className="mt-2 text-[11px] text-slate-500">更新时间：{item.updatedAt}</p>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
