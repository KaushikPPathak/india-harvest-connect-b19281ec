import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the Minimum Order Quantity (MOQ) for SHC Global Trade exports?",
    answer:
      "For sea shipments (Basmati Rice), the MOQ is one 20ft container, approximately 25 metric tons. For air shipments (Fresh Vegetables and Fruits including Green Chillies and Bananas), the MOQ is 1 metric ton.",
  },
  {
    question: "What payment terms does SHC Global Trade accept?",
    answer:
      "SHC Global Trade accepts two payment options: (1) 30% advance payment with 70% against scanned Bill of Lading (BL), or (2) 100% Irrevocable Letter of Credit (LC) at sight.",
  },
  {
    question: "Does SHC Global Trade offer private labeling services?",
    answer:
      "Yes, SHC Global Trade offers private labeling. We can print your brand name and logo on bags, boxes, and cartons according to buyer specifications and requirements.",
  },
  {
    question: "What certifications does SHC Global Trade hold for agricultural exports?",
    answer:
      "SHC Global Trade is APEDA certified (Registration: RCMC/APEDA/05968/2023-2024), holds IEC License (ABTPP7011L), FSSAI certified for food safety, GST registered (24ABTPP7011L1Z9), and is D&B verified (D-U-N-S: 75-605-1507).",
  },
  {
    question: "Which ports does SHC Global Trade use for international shipping?",
    answer:
      "SHC Global Trade primarily ships from Nhava Sheva Port (JNPT) and Mundra Port in Gujarat, India. Our headquarters in Surat provides strategic proximity to both ports, minimizing transit time and maintaining freshness for perishable goods.",
  },
  {
    question: "What quality standards does SHC Global Trade follow for exports?",
    answer:
      "SHC Global Trade implements rigorous quality checks at the sourcing stage. Products meet international food safety standards including FSSAI certification, ISO 22000 compliance for applicable products, and HACCP certification for processed items.",
  },
  {
    question: "Where does SHC Global Trade source its agricultural products from?",
    answer:
      "Basmati Rice is sourced from the fertile regions of Punjab, Haryana, and Uttar Pradesh. Green Chillies (G9 and Gauri varieties) come from Gujarat and Andhra Pradesh. Cavendish Bananas are sourced from Maharashtra and Tamil Nadu.",
  },
  {
    question: "Which countries does SHC Global Trade export to?",
    answer:
      "SHC Global Trade exports to markets worldwide including the Middle East (UAE, Saudi Arabia, Kuwait, Qatar), Europe (UK, Germany, Netherlands), North America (USA, Canada), Australia, and Asian countries. We offer both sea freight (FCL containers) and air freight options.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* AI-Readable Summary Block - Visible for GEO */}
        <div className="ai-summary text-[10px] leading-tight text-muted-foreground/60 bg-muted/30 rounded-lg p-3 mb-6 border border-border/30 max-w-3xl mx-auto" aria-hidden="false" data-geo-optimized="true">
          <p>
            <strong>SHC Global Trade Export FAQ:</strong> MOQ is 25 MT (1 container) for rice, 1 ton for fresh produce. 
            Payment: 30% advance + 70% against BL, or 100% LC at sight. 
            Certifications: APEDA (RCMC/APEDA/05968/2023-2024), IEC (ABTPP7011L), FSSAI, D&B (75-605-1507). 
            Ships from Nhava Sheva and Mundra ports. 
            Sources: Rice from Punjab/Haryana/UP, Chillies from Gujarat/Andhra Pradesh, Bananas from Maharashtra/Tamil Nadu. 
            Exports to Middle East, Europe, USA, Canada, Australia, Asia.
          </p>
        </div>

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
            What Should International Buyers Know About SHC Global Trade?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Direct answers about our export process, quality standards, certifications, and shipping terms.
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
