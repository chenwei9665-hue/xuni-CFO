type TrendCardProps = {
  title: string;
  unit: string;
  labels: string[];
  values: number[];
};

export function TrendCard({ title, unit, labels, values }: TrendCardProps) {
  const max = Math.max(...values);

  return (
    <section className="card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-medium text-slate-800">{title}</h3>
        <span className="text-xs text-slate-500">近 6 个月</span>
      </div>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={`${title}-${labels[i]}`} className="flex items-center gap-3">
            <span className="w-8 text-xs text-slate-500">{labels[i]}</span>
            <div className="h-2 flex-1 overflow-hidden rounded bg-slate-100">
              <div className="h-full rounded bg-brand-500" style={{ width: `${(v / max) * 100}%` }} />
            </div>
            <span className="w-16 text-right text-xs text-slate-700">
              {v}
              {unit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
