import { CheckCircle2, UserPlus, Settings, ShoppingBag } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Create Your Pharmacy",
    description:
      "Sign up your pharmacy and set up your organization in minutes.",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Configure Your System",
    description:
      "Add staff, upload inventory, and configure branches or locations.",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Start Operating",
    description:
      "Begin selling, tracking stock, and managing your pharmacy in real-time.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Simple onboarding process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Get started in minutes, not days
          </h2>

          <p className="mt-4 text-muted-foreground">
            Caremax is designed to be simple to adopt, even for non-technical pharmacy staff.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border bg-slate-50 p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700 mt-4">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-teal-600" />
          No technical setup required • Guided onboarding available
        </div>
      </div>
    </section>
  );
}