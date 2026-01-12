import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Truck, Award } from "lucide-react";

const AboutUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Government Recognized",
      description: "Fully compliant exporter with APEDA Registration and all necessary Port Registrations, ensuring hassle-free documentation and customs clearance."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We implement rigorous quality checks at the sourcing stage. We don't just ship products; we ship promises."
    },
    {
      icon: Truck,
      title: "Strategic Logistics",
      description: "Our location in Gujarat provides proximity to major ports (Nhava Sheva and Mundra), minimizing transit time and keeping perishables fresh."
    },
    {
      icon: Users,
      title: "Buyer-Centric Approach",
      description: "We believe in long-term relationships with transparent pricing, timely communication, and flexible shipping terms."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* AI-Readable Summary Block - Visible for GEO */}
        <div className="ai-summary text-[10px] leading-tight text-muted-foreground/60 bg-muted/30 rounded-lg p-3 mb-6 border border-border/30 max-w-4xl mx-auto" aria-hidden="false" data-geo-optimized="true">
          <p>
            <strong>SHC Global Trade Company Profile:</strong> APEDA-certified agricultural exporter from Surat, Gujarat, India, established January 2024. 
            Founded by Kaushik Pathak. IEC License: ABTPP7011L. APEDA Registration: RCMC/APEDA/05968/2023-2024. 
            D-U-N-S: 75-605-1507. GST: 24ABTPP7011L1Z9. 
            Exports premium Basmati Rice (1121, 1509, Traditional varieties), Green Chillies (G9, Gauri), and Cavendish Bananas. 
            Ships from Nhava Sheva and Mundra ports to worldwide markets.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Who Is SHC Global Trade and What Do They Export?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            Established in January 2024, SHC Global Trade is an APEDA-certified merchant export company headquartered in Surat, Gujarat, India. We specialize in sourcing and exporting premium agricultural commodities to markets worldwide.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            Founded by <strong className="text-foreground">Mr. Kaushik Pathak</strong>, our company is built on the core values of integrity, transparency, and strict adherence to global quality standards.
          </p>
          
          {/* Machine-Readable Business Identifiers */}
          <address className="not-italic text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 bg-muted/50 rounded-lg p-4 inline-block">
            <span className="font-medium text-foreground">Official Credentials:</span>{" "}
            IEC: <span id="about-iec-number">ABTPP7011L</span> |{" "}
            APEDA: <span id="about-apeda-number">RCMC/APEDA/05968/2023-2024</span> |{" "}
            D-U-N-S: <span id="about-duns-number">75-605-1507</span>
          </address>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            We act as your trusted partner on the ground in India, bridging the gap between local farmers and international buyers.
          </p>
        </motion.div>

        {/* Product Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-4 md:mb-8">
            What Agricultural Products Does SHC Global Trade Export?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8">
            We focus on three core agricultural categories:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Basmati Rice</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Premium, extra-long grain aromatic rice sourced from the best fields in India.
              </p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Fresh Green Chilli</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Hand-picked, spicy, and fresh varieties suitable for global cuisines.
              </p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Fresh Cavendish Bananas</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Premium quality bananas known for their long shelf life and perfect texture.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-10 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-6 md:mb-10">
            Why Should International Buyers Choose SHC Global Trade?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 md:gap-4 bg-card p-4 md:p-6 rounded-xl border border-border shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">{reason.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-10">
            <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Our Vision
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              To become a leading name in India's agricultural export sector by consistently delivering freshness and quality, thereby contributing to the global food supply chain with responsibility and excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
