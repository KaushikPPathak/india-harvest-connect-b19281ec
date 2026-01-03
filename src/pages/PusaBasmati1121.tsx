import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Globe, Award, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";

import rawBasmati from "@/assets/1121-raw-basmati.jpg";
import steamBasmati from "@/assets/1121-steam-basmati.jpg";
import sellaBasmati from "@/assets/1121-sella-basmati.jpg";
import goldenSella from "@/assets/1121-golden-sella.jpg";
import whiteSella from "@/assets/1121-white-sella.jpg";

const riceTypes = [
  {
    name: "1121 Raw Basmati Rice",
    image: rawBasmati,
    description: "Premium unprocessed extra-long grain basmati with exceptional aroma and pure white appearance.",
  },
  {
    name: "1121 Steam Basmati Rice",
    image: steamBasmati,
    description: "Steam-processed for enhanced texture and aroma, perfect for biryani and special occasions.",
  },
  {
    name: "1121 Sella (Parboiled) Basmati Rice",
    image: sellaBasmati,
    description: "Parboiled rice with superior nutritional retention and excellent grain separation after cooking.",
  },
  {
    name: "1121 Golden Sella Basmati Rice",
    image: goldenSella,
    description: "Beautiful golden-hued parboiled rice, highly sought after in Middle Eastern and African markets.",
  },
  {
    name: "1121 White / Creamy Sella Basmati Rice",
    image: whiteSella,
    description: "Creamy white parboiled rice offering premium aesthetics with outstanding cooking performance.",
  },
];

const productSpecs = [
  { label: "Grain Length", value: "Extra-Long" },
  { label: "Aroma", value: "Strong & Natural" },
  { label: "Texture", value: "Fluffy, Non-Sticky" },
  { label: "Ideal For", value: "Biryani, Pulao, Premium Cuisines" },
  { label: "Export Markets", value: "Middle East, Europe, USA, Africa" },
];

const whyChooseUs = [
  { icon: Award, title: "APEDA & IEC Certified", description: "Government-certified exporter with all licenses" },
  { icon: Shield, title: "Strict Quality Control", description: "Multi-stage quality testing at every step" },
  { icon: Package, title: "Export-Grade Packaging", description: "Professional packaging meeting global standards" },
  { icon: Truck, title: "Timely Global Shipments", description: "Reliable logistics to any destination worldwide" },
];

const PusaBasmati1121 = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Pusa Basmati 1121 Rice Exporter | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium Pusa Basmati 1121 rice exporter from India. Extra-long grain basmati rice with exceptional aroma. APEDA certified. Raw, Steam, Sella, Golden Sella varieties. HS Code: 10063020"
        />
        <meta
          name="keywords"
          content="Pusa Basmati 1121, 1121 basmati rice, basmati rice exporter India, 1121 sella rice, golden sella rice, steam basmati rice, Indian rice exporter, APEDA certified"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/pusa-basmati-1121" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gold/20 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold-dark rounded-full text-sm font-medium mb-6">
              Premium Extra-Long Grain
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Pusa Basmati 1121 – Premium Extra-Long Grain Basmati Rice
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium mb-6">
              APEDA & IEC Certified Exporter from India
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Pusa Basmati 1121 is a premium basmati rice variety known for its extra-long slender grains, 
              rich aroma, and exceptional elongation after cooking. It is one of the most demanded basmati 
              rice varieties in global export markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" onClick={scrollToContact}>
                Get Quote
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Product Overview
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key specifications of Pusa Basmati 1121 for international export markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {productSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elegant transition-shadow"
              >
                <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
                <p className="font-semibold text-foreground">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Types */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-gold/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Available Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our premium range of Pusa Basmati 1121 varieties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riceTypes.map((rice, index) => (
              <motion.div
                key={rice.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={rice.image}
                    alt={rice.name}
                    width={400}
                    height={300}
                    aspectRatio="4/3"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-3">{rice.name}</h3>
                  <p className="text-muted-foreground text-sm">{rice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Export Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Packaging & Export Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                  <Package className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Packaging Options</h4>
                    <p className="text-muted-foreground">5kg, 10kg, 25kg, 40kg, 50kg or customized packaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                  <Award className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Private Labeling</h4>
                    <p className="text-muted-foreground">Custom branding and private label options available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                  <Globe className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">HS Code</h4>
                    <p className="text-muted-foreground font-mono">10063020</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gold via-gold-dark to-gold rounded-2xl p-8 text-foreground"
            >
              <h3 className="font-display text-2xl mb-6">Premium Export Quality</h3>
              <p className="mb-8 opacity-90">
                Get the finest Pusa Basmati 1121 rice directly from certified Indian farms. 
                Our export team ensures premium quality and competitive pricing for bulk orders.
              </p>
              <div className="space-y-3">
                <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90" onClick={scrollToContact}>
                  Request a Quote
                </Button>
                <Button variant="outline" size="lg" className="w-full border-foreground/30 text-foreground hover:bg-foreground/10" onClick={scrollToContact}>
                  Contact Sales Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Why Choose SHC Global Trade?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              India's trusted partner for premium Pusa Basmati 1121 exports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Start Exporting Premium Basmati 1121 Today
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact our export team for competitive pricing, sample requests, and customized packaging solutions 
              for your market requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" onClick={scrollToContact}>
                Get Quote
              </Button>
              <Button variant="heroOutline" size="lg" className="border-white/30 text-white hover:bg-white/10" onClick={scrollToContact}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PusaBasmati1121;
