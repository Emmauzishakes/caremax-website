import { FeaturesHero } from "@/components/sections/features/features-hero";
import { ModulesGrid } from "@/components/sections/features/modules-grid";
import { FeatureBreakdown } from "@/components/sections/features/feature-breakdown";
import { FeaturesCTA } from "@/components/sections/features/features-cta";

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <ModulesGrid />
      <FeatureBreakdown />
      <FeaturesCTA />
    </>
  );
}