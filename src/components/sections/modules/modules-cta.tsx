import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ModulesCTA() {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="mx-auto max-w-4xl text-center px-6">

        <h2 className="text-3xl font-bold">
          Built as a system, not a tool
        </h2>

        <p className="mt-4 text-white/80">
          Explore Caremax pricing or access your pharmacy system directly.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/pricing">
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              View Pricing
            </Button>
          </Link>

          <Link href={siteConfig.links.login}>
            <Button variant="outline" className="border-white text-gray-800">
              Access Portal
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}