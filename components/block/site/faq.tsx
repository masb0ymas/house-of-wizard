import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/data/mock-site'

export default function FAQSection() {
  return (
    <section id="faq" className="relative isolate overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-section-wash opacity-70"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Good to know
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Everything you need to know about the course
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <Accordion type="single" collapsible className="w-full" key={faq.question}>
              <AccordionItem
                value={`item-${index}`}
                className="rounded-xl border border-border/80 bg-card/70 px-5 shadow-sm transition-colors data-[state=open]:border-primary/25 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
