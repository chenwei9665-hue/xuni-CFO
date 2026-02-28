import { WorkflowBoard } from "@/components/workflow-board";

export default function WorkflowPage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold text-slate-900">专家交付闭环</h2>
        <p className="mt-2 rounded-xl bg-slate-900 p-3 text-sm text-slate-100">
          财精灵不是只告诉你发生了什么，而是推动问题完成处理，并由专家兜底。
        </p>
      </section>

      <WorkflowBoard />
    </div>
  );
}
