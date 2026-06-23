import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Caremax difficult to set up?",
    answer:
      "No. Caremax is designed for quick onboarding. Most pharmacies can get started within minutes with guided setup.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "Not at all. The system is built for pharmacy staff with no technical background required.",
  },
  {
    question: "What happens if the internet goes down?",
    answer:
      "Caremax is cloud-based. We are actively working on improving offline resilience for critical workflows.",
  },
  {
    question: "Can I manage multiple branches?",
    answer:
      "Yes. Caremax supports multi-branch operations with centralized control.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use role-based access control, encryption, and secure cloud infrastructure practices.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Simple subscription-based pricing depending on pharmacy size and features.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white border-y">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            FAQ
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion (Base UI style) */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}