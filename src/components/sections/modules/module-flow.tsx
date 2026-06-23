const flows = [
  {
    title: "POS → Inventory Sync",
    desc: "Every sale automatically updates stock levels in real time.",
  },
  {
    title: "Inventory → Analytics Engine",
    desc: "Stock movements feed directly into business insights.",
  },
  {
    title: "Supplier → Inventory Engine",
    desc: "Purchase orders automatically update stock availability.",
  },
  {
    title: "Event System → Notifications",
    desc: "Low stock and expiry events trigger real-time alerts.",
  },
];

export function ModuleFlow() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-2xl font-bold text-center">
          How Modules Work Together
        </h2>

        <div className="mt-12 space-y-6">
          {flows.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border p-6 hover:bg-slate-50 transition"
            >
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}