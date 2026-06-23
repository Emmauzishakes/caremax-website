import {
  Package,
  ShoppingCart,
  BarChart3,
  Truck,
  AlertTriangle,
  Layers,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Package className="h-5 w-5" />,
    title: "Inventory Management",
    description:
      "Track medicine stock in real-time with smart updates and low-stock alerts.",
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "POS Billing",
    description:
      "Fast and seamless checkout system designed for pharmacy workflows.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Reports & Analytics",
    description:
      "Understand sales, revenue, and stock trends with clear insights.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Supplier Management",
    description:
      "Manage suppliers, purchase orders, and restocking efficiently.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Expiry & Alerts",
    description:
      "Get notified before medicines expire or stock runs low.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Multi-Branch Control",
    description:
      "Manage multiple pharmacy locations from a single dashboard.",
  },
];

export function FeaturesPreview() {
  return (
    <section className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Core Platform Features
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Everything you need to run a modern pharmacy
          </h2>

          <p className="mt-4 text-muted-foreground">
            Caremax brings inventory, sales, suppliers, and analytics into one unified system.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}