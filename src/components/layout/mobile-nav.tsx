"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <span className="font-semibold">Caremax</span>

          <button onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <div className="p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm transition",
                  "hover:bg-slate-100",
                  isActive &&
                    "bg-teal-50 text-teal-700 ring-1 ring-teal-100"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="absolute bottom-0 w-full border-t p-4 space-y-2">
          <Link href={siteConfig.links.login}>
            <button className="w-full rounded-xl border px-4 py-2 text-sm">
              Access Portal
            </button>
          </Link>

          <Link href="/demo">
            <button className="w-full rounded-xl bg-teal-600 px-4 py-2 text-sm text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}