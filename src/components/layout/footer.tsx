import Link from "next/link";

import { PageContainer } from "./page-container";

export function Footer() {
  return (
    <footer className="relative border-t bg-slate-950 text-slate-200">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-teal-500 blur-[120px]" />
        </div>
      <PageContainer>
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold">
                Caremax
              </h3>

              <p className="mt-4 text-muted-foreground max-w-md">
                Modern pharmacy management
                software built for independent
                pharmacies, healthcare providers,
                and multi-branch pharmacy chains.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">
                Product
              </h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/features">
                    Features
                  </Link>
                </li>

                <li>
                  <Link href="/pricing">
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link href="/demo">
                    Book Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">
                Resources
              </h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/blog">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Caremax.
            All rights reserved.
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}