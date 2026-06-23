import { CTA } from "@/components/sections/home/cta";
import { FAQ } from "@/components/sections/home/faq";
import { FeaturesPreview } from "@/components/sections/home/features-preview";
import { Hero } from "@/components/sections/home/hero";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { Pricing } from "@/components/sections/home/pricing";
import { ProductShowcase } from "@/components/sections/home/product-showcase";
import { Testimonials } from "@/components/sections/home/testimonials";
import { TrustedBy } from "@/components/sections/home/trusted-by";
import { WhyCaremax } from "@/components/sections/home/why-caremax";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturesPreview />
      <HowItWorks />
      <WhyCaremax />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}