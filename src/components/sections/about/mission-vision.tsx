export function MissionVision() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2">

        {/* Mission */}
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-4 text-muted-foreground">
            To simplify pharmacy operations through intelligent systems that reduce errors,
            improve efficiency, and support scalable healthcare delivery.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl border bg-white p-8">
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="mt-4 text-muted-foreground">
            To become the leading pharmacy operating system across Africa,
            powering digital transformation in healthcare retail systems.
          </p>
        </div>

      </div>
    </section>
  );
}