import { Shield, Leaf, Clock, Award, Globe, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage ensures only the finest products reach your destination.",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    description:
      "Direct sourcing from certified farms guarantees freshness and traceability of all our products.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Efficient logistics network ensures on-time delivery to ports worldwide with cold chain management.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description:
      "ISO, FSSAI, and APEDA certified operations meeting international food safety standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Established trade relationships in 45+ countries across Middle East, Europe, and Americas.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partnership",
    description:
      "Long-term relationships built on transparency, reliability, and mutual growth with our partners.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in
              <span className="text-primary block">Agricultural Exports</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 14 years of experience in agricultural exports, we have built
              a reputation for excellence, reliability, and customer satisfaction.
              Our commitment to quality and sustainable practices sets us apart.
            </p>

            {/* Highlight Box */}
            <div className="bg-gradient-hero p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary-foreground text-lg mb-2">
                    APEDA Registered Exporter
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    We are a registered member of the Agricultural and Processed Food
                    Products Export Development Authority, Government of India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
