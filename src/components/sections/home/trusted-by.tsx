import { Building2, ShieldCheck, Activity } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const stats: Stat[] = [
  {
    icon: <Building2 className="h-5 w-5 text-primary" />,
    value: "120+",
    label: "Pharmacies onboarded",
  },
  {
    icon: <Activity className="h-5 w-5 text-primary" />,
    value: "50K+",
    label: "Transactions processed",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    value: "99.9%",
    label: "System reliability",
  },
];

export function TrustedBy() {
  return (
    <section className="border-y bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by modern pharmacies
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Built for reliability, scale, and speed
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex items-center justify-center rounded-full border bg-muted p-3">
                {stat.icon}
              </div>

              <h3 className="text-2xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Placeholder Strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {[
            "PharmaOne",
            "Medisafe Pharmacy",
            "CarePlus Clinics",
            "Urban Health",
            "RxHub",
          ].map((name) => (
            <div
              key={name}
              className="text-sm font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}