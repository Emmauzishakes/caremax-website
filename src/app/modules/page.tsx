import { ModulesHero } from "@/components/sections/modules/modules-hero";
import { CoreModules } from "@/components/sections/modules/core-modules";
import { ModuleFlow } from "@/components/sections/modules/module-flow";
import { ModulesCTA } from "@/components/sections/modules/modules-cta";

export default function ModulesPage() {
  return (
    <>
      <ModulesHero />
      <CoreModules />
      <ModuleFlow />
      <ModulesCTA />
    </>
  );
}