import {
  Package,
  ShoppingCart,
  BarChart3,
  Truck,
  Users,
  Building2,
  Bell,
  FileText,
} from "lucide-react";

const modules = [
  { icon: Package, title: "Inventory Engine" },
  { icon: ShoppingCart, title: "POS System" },
  { icon: BarChart3, title: "Analytics Core" },
  { icon: Truck, title: "Supplier Module" },
  { icon: Users, title: "User & Roles" },
  { icon: Building2, title: "Multi-Branch Layer" },
  { icon: Bell, title: "Alerts System" },
  { icon: FileText, title: "Reporting Engine" },
];

export function ModulesGrid() {
  return (
    <section className="bg-slate-50 py-20 border-y">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-center">
          Core System Modules
        </h2>

        <p className="text-center text-muted-foreground mt-2">
          Each module operates independently but integrates into a unified system.
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
                  Integrated system component
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}