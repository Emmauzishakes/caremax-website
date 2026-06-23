const stats = [
  { label: "Today’s Sales", value: "KES 48,200" },
  { label: "Low Stock Items", value: "12" },
  { label: "Active Branches", value: "4" },
  { label: "Monthly Revenue", value: "KES 1.2M" },
];

export function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Dashboard Overview
        </h2>

        <p className="text-center text-muted-foreground mt-2">
          Real-time operational snapshot across your pharmacy network.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="mt-2 text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Fake chart block */}
        <div className="mt-10 rounded-2xl border bg-white p-10 text-center text-muted-foreground">
          Sales Trend Chart (Visual Mock)
        </div>
      </div>
    </section>
  );
}