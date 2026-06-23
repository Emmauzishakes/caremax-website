import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "KES 2,500/mo",
    description: "For small pharmacies getting started.",
    features: [
      "Single branch management",
      "Inventory tracking",
      "Basic POS system",
      "Sales reports",
      "Email support",
    ],
    cta: "Start Starter Plan",
  },
  {
    name: "Growth",
    price: "KES 5,000/mo",
    description: "For growing pharmacies with multiple staff.",
    features: [
      "Everything in Starter",
      "Multi-user roles",
      "Advanced inventory control",
      "Supplier management",
      "Expiry alerts",
      "Advanced reports",
    ],
    highlight: true,
    cta: "Start Growth Plan",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For pharmacy chains and large operations.",
    features: [
      "Unlimited branches",
      "Dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "On-premise or cloud hybrid",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section className="bg-white border-y">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Pricing
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Simple, scalable pricing for every pharmacy
          </h2>

          <p className="mt-4 text-muted-foreground">
            Start small, scale as you grow. No hidden fees or complex contracts.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-sm transition hover:shadow-md ${
                plan.highlight
                  ? "border-teal-600 ring-2 ring-teal-100"
                  : "bg-white"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <h3 className="text-lg font-semibold">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6 text-3xl font-bold">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2"
                  >
                    <Check className="h-4 w-4 text-teal-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 w-full rounded-xl px-4 py-2 text-sm font-medium transition ${
                  plan.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          All plans include secure cloud hosting and regular updates.
        </div>
      </div>
    </section>
  );
}