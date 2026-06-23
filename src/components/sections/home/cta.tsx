import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <ShieldCheck className="h-4 w-4 text-teal-400" />
          Secure cloud-based pharmacy management
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to modernize your pharmacy operations?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-white/70">
          Join pharmacies already using Caremax to manage inventory, sales, staff, and multi-branch operations in one system.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link href="/demo">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link href={siteConfig.links.login}>
            <Button size="lg" variant="outline" className="border-white/20 text-gray-800 hover:bg-white/10">
              Access Pharmacy System
            </Button>
          </Link>
        </div>

        {/* Small reassurance */}
        <p className="mt-6 text-xs text-white/50">
          No setup fees • Cancel anytime • Secure encrypted cloud infrastructure
        </p>
      </div>
    </section>
  );
}