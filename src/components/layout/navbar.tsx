"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "./nav-links";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight transition-all"
        >
          Caremax
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm rounded-full transition-all duration-200",
                  "hover:bg-slate-100 hover:text-slate-900",
                  isActive &&
                    "bg-teal-50 text-teal-700 ring-1 ring-teal-100 shadow-sm"
                )}
              >
                {/* Active glow */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-teal-500/10 blur-md" />
                )}

                <span className="relative">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link href={siteConfig.links.login}>
            <Button variant="outline" size="sm">
              Portal
            </Button>
          </Link>

          <Link href="/demo">
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 shadow-sm"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}