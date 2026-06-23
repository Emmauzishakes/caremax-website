import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "KES 2,500",
    desc: "For small independent pharmacies",
    features: [
      "Single branch system",
      "Basic POS",
      "Inventory tracking",
      "Sales reports",
    ],
  },
  {
    name: "Growth",
    price: "KES 5,000",
    desc: "For growing pharmacies",
    highlight: true,
    features: [
      "Multi-user access",
      "Advanced inventory system",
      "Supplier management",
      "Expiry alerts",
      "Advanced reports",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For pharmacy chains & institutions",
    features: [
      "Unlimited branches",
      "Dedicated infrastructure",
      "Custom integrations",
      "Priority support",
      "SLA guarantees",
    ],
  },
];

export function PricingPlans() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 shadow-sm transition hover:shadow-md bg-white ${
                plan.highlight
                  ? "ring-2 ring-teal-500 scale-[1.02]"
                  : ""
              }`}
            >
              {/* Header */}
              <h3 className="text-lg font-semibold">{plan.name}</h3>

              <p className="text-sm text-muted-foreground mt-2">
                {plan.desc}
              </p>

              <div className="mt-6 text-3xl font-bold">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 text-teal-600 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full rounded-xl py-2 text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Start Trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}