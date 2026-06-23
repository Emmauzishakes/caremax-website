import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingPlans } from "@/components/sections/pricing/pricing-plans";
import { PricingCTA } from "@/components/sections/pricing/pricing-cta";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingCTA />
    </>
  );
}