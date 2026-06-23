import { AboutHero } from "@/components/sections/about/about-hero";
import { ProblemStory } from "@/components/sections/about/problem-story";
import { FounderStory } from "@/components/sections/about/founder-story";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { CoreValues } from "@/components/sections/about/core-values";
import { AboutCTA } from "@/components/sections/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProblemStory />
      <FounderStory />
      <MissionVision />
      <CoreValues />
      <AboutCTA />
    </>
  );
}