import { AiAnalysisPanel } from "@/components/ai-analysis-panel";
import { AlertList } from "@/components/alert-list";
import { alerts } from "@/data/demo-data";

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold text-slate-900">预警中心</h2>
        <p className="mt-2 rounded-xl bg-brand-50 p-3 text-sm text-brand-700">
          不是月底复盘，而是问题当天发现并推动处理。
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <AlertList items={alerts} />
        <AiAnalysisPanel alertId={alerts[1].id} />
      </section>
    </div>
  );
}
