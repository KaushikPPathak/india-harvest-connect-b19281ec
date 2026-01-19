import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Award, 
  Shield, 
  Globe, 
  Truck, 
  Users, 
  Target, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Building2,
  Leaf,
  Star,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const credentials = [
    { label: "IEC License", value: "ABTPP7011L" },
    { label: "APEDA Registration", value: "RCMC/APEDA/05968/2023-2024" },
    { label: "D-U-N-S Number", value: "75-605-1507" },
    { label: "GST Number", value: "24ABTPP7011L1Z9" },
  ];

  const reasons = [
    {
      icon: Award,
      title: "Government Recognized",
      description: "APEDA certified and registered with all relevant export authorities ensuring complete legal compliance.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks at sourcing stage. Every shipment meets international food safety standards.",
    },
    {
      icon: Truck,
      title: "Strategic Logistics",
      description: "Located near Nhava Sheva and Mundra ports for optimized shipping routes and reduced transit times.",
    },
    {
      icon: Users,
      title: "Buyer-Centric Approach",
      description: "Transparent pricing, flexible payment terms, and dedicated support for every client relationship.",
    },
  ];

  const products = [
    {
      name: "Basmati Rice",
      description: "Premium extra-long grain aromatic rice including 1121, 1509, and Traditional varieties.",
      icon: "🌾",
    },
    {
      name: "Fresh Green Chilli",
      description: "Hand-picked G9 and Gauri varieties with excellent pungency and shelf life.",
      icon: "🌶️",
    },
    {
      name: "Cavendish Bananas",
      description: "Premium Grand Naine variety known for perfect texture and long shelf life.",
      icon: "🍌",
    },
  ];

  const milestones = [
    { year: "2024", event: "Company Established", description: "Founded in Surat, Gujarat" },
    { year: "2024", event: "APEDA Certification", description: "Official export certification received" },
    { year: "2024", event: "First Shipments", description: "Successful exports to multiple countries" },
    { year: "2025", event: "Global Expansion", description: "Expanding to new international markets" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | SHC Global Trade - APEDA Certified Agricultural Exporter from India</title>
        <meta
          name="description"
          content="Learn about SHC Global Trade, India's trusted APEDA-certified exporter of Basmati Rice, Green Chillies & Bananas. Founded by Mr. Kaushik Pathak in 2024."
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/about-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Gradient */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Established 2024
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Bridging India's Farms to <span className="text-primary">Global Tables</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                SHC Global Trade is your trusted partner for premium agricultural exports from India. 
                We connect the finest produce from Indian farms directly to international markets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Credentials Bar */}
        <section className="py-6 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm">
                    <span className="text-muted-foreground">{cred.label}:</span>{" "}
                    <span className="font-semibold text-foreground">{cred.value}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who Is SHC Global Trade?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in <strong className="text-foreground">January 2024</strong> by 
                    <strong className="text-foreground"> Mr. Kaushik Pathak</strong>, SHC Global Trade 
                    is an APEDA-certified merchant export company headquartered in 
                    <strong className="text-foreground"> Surat, Gujarat, India</strong>.
                  </p>
                  <p className="leading-relaxed">
                    Our company is built on the core values of <em>integrity, transparency, 
                    and strict adherence to global quality standards</em>. We specialize in sourcing 
                    and exporting premium agricultural commodities to markets worldwide.
                  </p>
                  <p className="leading-relaxed">
                    We act as your trusted partner on the ground in India, bridging the gap 
                    between local farmers and international buyers. Our strategic location in Gujarat 
                    provides access to rich agricultural resources and proximity to major ports.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-3xl p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                        <p className="text-sm text-muted-foreground">
                          204 Suraj Darshan Apartment, Gopipura, Surat, Gujarat 395003
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Established</h4>
                        <p className="text-sm text-muted-foreground">January 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Export Reach</h4>
                        <p className="text-sm text-muted-foreground">
                          Middle East, Europe, North America, Australia, Asia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Shipping Ports</h4>
                        <p className="text-sm text-muted-foreground">
                          Nhava Sheva (JNPT) & Mundra Port
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Export
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We focus on three core agricultural categories, each sourced from the finest regions of India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{product.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link to="/#products">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Products <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose SHC Global Trade?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We bring together quality, compliance, and customer service to deliver exceptional export experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                      <reason.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-8 shadow-xl">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                To become a <span className="text-primary font-semibold">leading name</span> in 
                India's agricultural export sector by consistently delivering{" "}
                <span className="text-primary font-semibold">freshness, quality, and reliability</span> 
                {" "}to our global partners.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Star className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Quality First</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Partner Focused</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Company Milestones
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-bold text-foreground">{milestone.event}</h4>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get in touch today to discuss your agricultural import requirements. 
                We're here to help you source the finest products from India.
              </p>
              <Link to="/#contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                >
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
        <ChatWidget />
      </div>
    </>
  );
};

export default AboutUs;
