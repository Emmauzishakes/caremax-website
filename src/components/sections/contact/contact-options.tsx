import { Calendar, MessageSquare, Headphones } from "lucide-react";

const options = [
  {
    icon: Calendar,
    title: "Request a Demo",
    desc: "See Caremax in action with a guided walkthrough.",
  },
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    desc: "Talk to us about pricing, onboarding, or enterprise setup.",
  },
  {
    icon: Headphones,
    title: "General Support",
    desc: "Get help or ask questions about the platform.",
  },
];

export function ContactOptions() {
  return (
    <section className="bg-slate-50 py-24 border-y">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold text-center">
          How can we help you?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((o) => {
            const Icon = o.icon;

            return (
              <div
                key={o.title}
                className="rounded-2xl border bg-white p-6 text-center hover:shadow-md transition"
              >
                <Icon className="mx-auto h-5 w-5 text-teal-600" />

                <h3 className="mt-4 font-semibold">{o.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {o.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}