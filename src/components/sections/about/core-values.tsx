const values = [
  {
    title: "Simplicity",
    desc: "We design systems that are easy to use for real pharmacy staff.",
  },
  {
    title: "Reliability",
    desc: "Operations must always work — no exceptions in critical environments.",
  },
  {
    title: "Scalability",
    desc: "From single pharmacy to multi-branch networks seamlessly.",
  },
  {
    title: "Precision",
    desc: "Every stock movement and transaction must be accurate and traceable.",
  },
];

export function CoreValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Core Values
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border p-6">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}