import { Shield, Leaf, Clock, Award, Globe, HeartHandshake, Rocket, Zap, Target, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Quality First",
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
      "FSSAI and APEDA certified operations meeting international food safety standards.",
  },
  {
    icon: Zap,
    title: "Agile & Responsive",
    description:
      "As a startup, we offer quick decision-making and personalized attention to every client.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Focus",
    description:
      "Building long-term relationships based on transparency, reliability, and mutual growth.",
  },
];

const stats = [
  {
    icon: Rocket,
    label: "Founded",
    value: "Jan 2024",
    isText: true,
  },
  {
    icon: Target,
    label: "Our Mission",
    value: "Quality",
    isText: true,
  },
  {
    icon: Globe,
    label: "Shipping",
    value: "Worldwide",
    isText: true,
  },
  {
    icon: Handshake,
    label: "Approach",
    value: "Client-First",
    isText: true,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="quality" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-hero p-6 rounded-2xl text-center group hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <p className="text-primary-foreground/80 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Fresh Perspective in
              <span className="text-primary block">Agricultural Exports</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Established in January 2024, SHC Global Trade brings a fresh, 
              startup mindset to agricultural exports. We combine modern business 
              practices with deep industry knowledge, offering personalized service 
              and competitive pricing that larger, established players often can't match.
            </p>

            {/* Highlight Box */}
            <div className="bg-gradient-hero p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary-foreground text-lg mb-2">
                    Startup Advantage
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Being new means we're hungry to prove ourselves. Every client matters, 
                    every shipment is handled with care, and we go the extra mile to earn 
                    your trust and build lasting partnerships.
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
