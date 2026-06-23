import {
  ShieldCheck,
  Cloud,
  Layers,
  Zap,
  RefreshCw,
  Building2,
} from "lucide-react";

interface Point {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud-Native by Design",
    description:
      "Access your pharmacy data anytime, anywhere. No local server limitations or downtime risks.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "True Multi-Branch Architecture",
    description:
      "Manage multiple pharmacies under one system with full isolation and centralized control.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Built for Speed",
    description:
      "Optimized workflows for billing, stock updates, and reporting in seconds—not minutes.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Secure by Default",
    description:
      "Role-based access control, audit trails, and secure authentication for all staff roles.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Real-Time Synchronization",
    description:
      "Inventory, sales, and reports update instantly across all devices and branches.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Built for Growing Pharmacies",
    description:
      "Designed for independent pharmacies, chains, and clinics scaling across locations.",
  },
];

export function WhyCaremax() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Why Caremax
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Not just a POS system — a pharmacy operating system
          </h2>

          <p className="mt-4 text-muted-foreground">
            Most pharmacy tools solve billing. Caremax solves the entire operational stack.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border bg-slate-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">
                {point.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {point.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Built for reliability, scale, and real-world pharmacy operations — not just billing counters.
          </p>
        </div>
      </div>
    </section>
  );
}