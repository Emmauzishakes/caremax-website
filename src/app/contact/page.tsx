import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactOptions } from "@/components/sections/contact/contact-options";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactCTA } from "@/components/sections/contact/contact-cta";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <ContactInfo />
      <ContactCTA />
    </>
  );
}