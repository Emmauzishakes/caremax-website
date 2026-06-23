import {
  Package,
  ShoppingCart,
  BarChart3,
  Truck,
  Users,
  Building2,
  Bell,
  Database,
} from "lucide-react";

const modules = [
  {
    icon: Package,
    title: "Inventory Engine",
    desc: "Real-time stock tracking with expiry and batch control.",
  },
  {
    icon: ShoppingCart,
    title: "POS System",
    desc: "Fast billing engine optimized for pharmacy workflows.",
  },
  {
    icon: BarChart3,
    title: "Analytics Core",
    desc: "Sales, revenue, and performance intelligence system.",
  },
  {
    icon: Truck,
    title: "Supplier Module",
    desc: "Purchase orders, restocking, and vendor tracking.",
  },
  {
    icon: Users,
    title: "Identity & Roles",
    desc: "Secure role-based access for staff and admins.",
  },
  {
    icon: Building2,
    title: "Multi-Branch Layer",
    desc: "Isolated pharmacy branches under one organization.",
  },
  {
    icon: Bell,
    title: "Event System",
    desc: "Automated alerts for expiry, stock, and activity logs.",
  },
  {
    icon: Database,
    title: "Core Data Layer",
    desc: "Unified database abstraction powering all modules.",
  },
];

export function CoreModules() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Core System Modules
        </h2>

        <p className="text-center text-muted-foreground mt-2">
          Each module operates independently but shares a unified data layer.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => {
            const Icon = m.icon;

            return (
              <div
                key={m.title}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <Icon className="h-5 w-5 text-teal-600" />

                <h3 className="mt-4 font-semibold">
                  {m.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}