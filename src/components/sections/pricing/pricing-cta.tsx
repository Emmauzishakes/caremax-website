import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function PricingCTA() {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-3xl font-bold">
          Start running your pharmacy smarter today
        </h2>

        <p className="mt-4 text-white/80">
          Join pharmacies already using Caremax to simplify operations and scale efficiently.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/demo">
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
          </Link>

          <Link href={siteConfig.links.login}>
            <Button variant="outline" className="border-white text-gray-800">
              Access Portal
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/60">
          No setup fees • Cancel anytime • Secure cloud infrastructure
        </p>
      </div>
    </section>
  );
}