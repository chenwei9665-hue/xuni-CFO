export function MetricCard({ title, value, note }: { title: string; value: string; note?: string }) {
  return (
    <section className="card">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-slate-900">{value}</p>
      {note ? <p className="mt-2 text-xs text-slate-500">{note}</p> : null}
    </section>
  );
}
