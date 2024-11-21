import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqs = [
  {
    question: 'Do I need prior experience in data analysis?',
    answer:
      "No prior experience is required for our starter courses. We'll teach you everything from the basics of data analysis to advanced Web3 concepts.",
  },
  {
    question: 'How long does it take to complete the course?',
    answer:
      'The course is self-paced, but most students complete it within 3-4 months while studying part-time. The Professional track typically takes 5-6 months.',
  },
  {
    question: 'Are the certificates recognized in the industry?',
    answer:
      'Yes, our certificates are recognized by leading Web3 companies and protocols. Many of our graduates work at top blockchain companies.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your subscription.',
  },
  {
    question: 'Do you offer job placement assistance?',
    answer:
      'Yes, our Enterprise plan includes comprehensive job placement assistance, including resume reviews, interview preparation, and direct connections with hiring partners.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-wide text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to know about the course</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible className="w-full" key={index}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
