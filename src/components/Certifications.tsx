import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  {
    name: "APEDA",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    description: "Government of India certification for agricultural exports",
  },
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description: "Ensures food safety and quality standards compliance",
  },
  {
    name: "ISO 22000",
    fullName: "Food Safety Management System",
    description: "International standard for food safety management",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis Critical Control Points",
    description: "Systematic preventive approach to food safety",
  },
];

const Certifications = () => {
  return (
    <section id="quality" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Quality Standards
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Certified for Excellence
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Our operations meet the highest international standards for food safety,
            quality management, and sustainable practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                {cert.name}
              </h3>
              <p className="text-primary-foreground/90 text-sm font-medium mb-2">
                {cert.fullName}
              </p>
              <p className="text-primary-foreground/70 text-xs">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
