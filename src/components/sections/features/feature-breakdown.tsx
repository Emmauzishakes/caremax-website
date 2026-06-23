const breakdowns = [
  {
    title: "Real-time Inventory Synchronization",
    desc: "Stock updates instantly across POS, inventory, and reports without manual refresh.",
  },
  {
    title: "Role-Based Access Control",
    desc: "Admins, pharmacists, and staff operate under strict permission boundaries.",
  },
  {
    title: "Multi-Branch Isolation",
    desc: "Each pharmacy branch operates independently while remaining centrally managed.",
  },
  {
    title: "Event-driven Alerts",
    desc: "Expiry, low stock, and reorder alerts trigger automatically in real time.",
  },
];

export function FeatureBreakdown() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-2xl font-bold text-center">
          How Caremax Works Under the Hood
        </h2>

        <div className="mt-12 space-y-6">
          {breakdowns.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border p-6 hover:bg-slate-50 transition"
            >
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}