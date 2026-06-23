import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "David Mwangi",
    role: "Pharmacy Owner",
    company: "UrbanCare Pharmacy",
    message:
      "Caremax has completely changed how we manage inventory. We now track stock in real time and avoid over-ordering or running out of critical medicines.",
  },
  {
    name: "Grace Wanjiku",
    role: "Pharmacy Manager",
    company: "Medilink Health",
    message:
      "The POS system is extremely fast and easy to use. Our checkout time has reduced significantly, and staff onboarding is much simpler.",
  },
  {
    name: "Ahmed Hassan",
    role: "Operations Lead",
    company: "PrimeCare Clinics",
    message:
      "Multi-branch management used to be a nightmare. With Caremax, we can now monitor all branches from a single dashboard in real time.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Testimonials
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Loved by pharmacy teams
          </h2>

          <p className="mt-4 text-muted-foreground">
            Real feedback from teams using Caremax in daily operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 text-teal-600 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-teal-600"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-sm text-muted-foreground">
                “{t.message}”
              </p>

              {/* User */}
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold">
                  {t.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          Trusted by pharmacies transitioning from manual systems to modern cloud operations.
        </div>
      </div>
    </section>
  );
}