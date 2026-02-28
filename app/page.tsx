import { MetricCard } from "@/components/metric-card";
import { TrendCard } from "@/components/trend-card";
import { metrics, ownerSummary, trendData } from "@/data/demo-data";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold text-slate-900">老板驾驶舱</h2>
        <p className="mt-2 text-sm text-slate-600">
          财精灵不是月底看报表，而是持续追踪利润与风险，给老板可执行的经营控制台。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <MetricCard title="本月利润" value={metrics.monthlyProfit} />
        <MetricCard title="利润率" value={metrics.profitRate} />
        <MetricCard title="现金流状态" value={metrics.cashflow} />
        <MetricCard title="库存健康度" value={metrics.inventoryHealth} />
        <MetricCard title="风险预警数量" value={metrics.riskCount} />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <TrendCard title="利润趋势" unit="万" labels={trendData.months} values={trendData.profit} />
        <TrendCard title="现金流趋势" unit="天" labels={trendData.months} values={trendData.cashflow} />
        <TrendCard title="库存周转趋势" unit="天" labels={trendData.months} values={trendData.turnover} />
      </section>

      <section className="card">
        <h3 className="font-medium text-slate-900">月度经营摘要（老板视角）</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{ownerSummary}</p>
      </section>
    </div>
  );
}
