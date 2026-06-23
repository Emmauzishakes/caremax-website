import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
} from "lucide-react";

interface Tab {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const tabs: Tab[] = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Dashboard Overview",
    description:
      "Real-time pharmacy performance metrics and activity monitoring.",
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "POS Billing System",
    description:
      "Fast checkout flow optimized for pharmacy counter operations.",
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Inventory Control",
    description:
      "Track stock levels, expiry dates, and supplier restocking.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Reports & Insights",
    description:
      "Sales analytics, revenue tracking, and pharmacy performance reports.",
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Product Showcase
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            See Caremax in action
          </h2>

          <p className="mt-4 text-muted-foreground">
            A unified system designed to run every part of your pharmacy operations.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 items-center">

          {/* Left - Tabs */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                className="group flex gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  {tab.icon}
                </div>

                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {tab.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Mock Screen */}
          <div className="relative">
            <div className="rounded-3xl border bg-white shadow-2xl overflow-hidden">

              {/* Fake Top Bar */}
              <div className="flex items-center gap-2 border-b bg-slate-50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-6 space-y-6">
                <div className="h-4 w-1/3 rounded bg-slate-200" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                </div>

                <div className="h-32 rounded-xl bg-slate-100" />

                <div className="flex gap-3">
                  <div className="h-10 w-24 rounded bg-teal-100" />
                  <div className="h-10 w-24 rounded bg-slate-100" />
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-6 -z-10 bg-teal-500/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}