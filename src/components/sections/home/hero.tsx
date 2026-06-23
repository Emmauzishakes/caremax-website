"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DashboardPreview } from "./dashboard-preview";
import { HeroStats } from "./hero-stats";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm">
              Modern Pharmacy Management SaaS
            </div>

            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
              The Modern Operating System
              <span className="block text-primary">
                For Growing Pharmacies
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Manage inventory, sales,
              suppliers, staff, prescriptions,
              reports, and multiple branches
              from one secure cloud platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                >
                  <PlayCircle className="h-4 w-4" />
                  Book Demo
                </Button>
              </Link>
            </div>

            <HeroStats />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}