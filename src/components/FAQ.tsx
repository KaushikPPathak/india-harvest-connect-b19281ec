import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer:
      "For sea shipments (Rice/Sugar), our MOQ is one 20ft Container (approx 25 MT). For air shipments (Vegetables/Fruits), the MOQ is 1 Ton.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We accept 30% Advance with 70% against scanned BL, or 100% Irrevocable LC at sight.",
  },
  {
    question: "Do you offer Private Labeling?",
    answer:
      "Yes, we can print your brand and logo on bags/boxes as per buyer requirements.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Export FAQ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about our export process, terms, and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
