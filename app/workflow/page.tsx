import { MonthlyCompletionSummary, ServiceLogBoard } from "@/components/service-log-board";

export default function WorkflowPage() {
  return (
    <div className="space-y-6">
      <section className="card flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">服务日志</h2>
          <p className="mt-2 text-sm text-slate-600">按时间维度查看本月财务服务进度、已完成事项与待处理事项</p>
        </div>
        <MonthlyCompletionSummary />
      </section>

      <ServiceLogBoard />
    </div>
  );
}
