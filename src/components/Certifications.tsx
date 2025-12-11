import { motion } from "framer-motion";
import { CheckCircle2, Shield, FileCheck, Award } from "lucide-react";

const certifications = [
  {
    name: "APEDA",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    description: "License No: RCMC/APEDA/05968/2023-2024",
    icon: Award,
  },
  {
    name: "IEC",
    fullName: "Import Export Code",
    description: "License No: ABTPP7011L - Authorized for international trade",
    icon: FileCheck,
  },
  {
    name: "D&B Certified",
    fullName: "Dun & Bradstreet Business Verification",
    description: "D-U-N-S: 75-605-1507 - Verified business credibility",
    icon: Shield,
  },
  {
    name: "GST Registered",
    fullName: "Goods and Services Tax",
    description: "GSTIN: 24ABTPP7011L1Z9 - Compliant taxation",
    icon: CheckCircle2,
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
            SHC Global Trade operates with full regulatory compliance and internationally 
            recognized certifications, ensuring trust and quality in every transaction.
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
                <cert.icon className="w-8 h-8 text-gold" />
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
            All our products comply with international food safety standards including FSSAI, 
            HACCP, and ISO 22000 requirements. We ensure complete documentation for seamless 
            customs clearance in destination countries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
