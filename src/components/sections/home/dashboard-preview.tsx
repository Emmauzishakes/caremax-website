import {
  Activity,
  Package,
  ShoppingCart,
  TriangleAlert,
} from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="relative">
      <div className="rounded-3xl border bg-background p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              Caremax Dashboard
            </h3>

            <p className="text-sm text-muted-foreground">
              Real-time pharmacy insights
            </p>
          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <Package className="mb-2 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">
              Inventory Items
            </p>

            <h4 className="text-2xl font-bold">
              1,248
            </h4>
          </div>

          <div className="rounded-xl border p-4">
            <ShoppingCart className="mb-2 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">
              Sales Today
            </p>

            <h4 className="text-2xl font-bold">
              184
            </h4>
          </div>

          <div className="rounded-xl border p-4">
            <Activity className="mb-2 h-5 w-5 text-primary" />

            <p className="text-sm text-muted-foreground">
              Revenue
            </p>

            <h4 className="text-2xl font-bold">
              KES 52K
            </h4>
          </div>

          <div className="rounded-xl border p-4">
            <TriangleAlert className="mb-2 h-5 w-5 text-amber-500" />

            <p className="text-sm text-muted-foreground">
              Low Stock Alerts
            </p>

            <h4 className="text-2xl font-bold">
              12
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}