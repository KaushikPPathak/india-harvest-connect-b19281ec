import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Globe, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";

import rawBasmati from "@/assets/1509-raw-basmati.jpg";
import steamBasmati from "@/assets/1509-steam-basmati.jpg";
import sellaBasmati from "@/assets/1509-sella-basmati.jpg";
import goldenSella from "@/assets/1509-golden-sella.jpg";
import whiteSella from "@/assets/1509-white-sella.jpg";

const riceTypes = [
  {
    name: "1509 Raw Basmati Rice",
    image: rawBasmati,
    description: "Premium unprocessed long grain basmati with natural aroma and pure white color.",
  },
  {
    name: "1509 Steam Basmati Rice",
    image: steamBasmati,
    description: "Steam-processed for enhanced texture, ideal for biryani and daily meals.",
  },
  {
    name: "1509 Sella (Parboiled) Basmati Rice",
    image: sellaBasmati,
    description: "Parboiled rice with improved nutritional retention and firm grain texture.",
  },
  {
    name: "1509 Golden Sella Basmati Rice",
    image: goldenSella,
    description: "Golden-hued parboiled rice, perfect for restaurants and catering services.",
  },
  {
    name: "1509 White / Creamy Sella Basmati Rice",
    image: whiteSella,
    description: "Creamy white parboiled rice combining aesthetics with excellent cooking quality.",
  },
];

const productSpecs = [
  { label: "Grain Length", value: "Long to Extra-Long" },
  { label: "Aroma", value: "Pleasant & Natural" },
  { label: "Texture", value: "Soft, Fluffy, Non-Sticky" },
  { label: "Ideal For", value: "Daily Meals, Restaurants, Catering" },
  { label: "Export Markets", value: "Middle East, Africa, Asia" },
];

const whyChooseUs = [
  { icon: Award, title: "Reliable Export Partner", description: "Years of experience in international trade" },
  { icon: Check, title: "Quality-Assured Sourcing", description: "Stringent quality control at every step" },
  { icon: Package, title: "Flexible Packaging", description: "Custom packaging and branding options" },
  { icon: Truck, title: "Global Delivery Network", description: "Efficient logistics worldwide" },
];

const PusaBasmati1509 = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Pusa Basmati 1509 Rice Exporter | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium Pusa Basmati 1509 rice exporter from India. High-quality long grain basmati rice with excellent aroma. Raw, Steam, Sella, Golden Sella varieties available. HS Code: 10063020"
        />
        <meta
          name="keywords"
          content="Pusa Basmati 1509, 1509 basmati rice, basmati rice exporter India, 1509 sella rice, golden sella rice, steam basmati rice, Indian rice exporter"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/pusa-basmati-1509" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-gold/10">
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
              Premium Basmati Rice
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Pusa Basmati 1509 – High-Quality Long Grain Basmati Rice
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Trusted Export Quality from India
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Pusa Basmati 1509 is a high-quality basmati rice variety valued for its excellent aroma, 
              uniform grains, and cost-effective pricing, making it ideal for high-volume exports.
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
              Key specifications of Pusa Basmati 1509 for export markets
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
              Available Types
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of Pusa Basmati 1509 varieties
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
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Package className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Packaging Options</h4>
                    <p className="text-muted-foreground">5kg, 10kg, 25kg, 40kg, 50kg bags available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Award className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Custom Branding</h4>
                    <p className="text-muted-foreground">Private labeling and custom packaging available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
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
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-primary-foreground"
            >
              <h3 className="font-display text-2xl mb-6">Ready to Order?</h3>
              <p className="mb-8 opacity-90">
                Get competitive pricing and flexible terms for bulk orders. Our team is ready to assist you with your export requirements.
              </p>
              <div className="space-y-3">
                <Button variant="gold" size="lg" className="w-full" onClick={scrollToContact}>
                  Request a Quote
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10" onClick={scrollToContact}>
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
              Your trusted partner for premium basmati rice exports from India
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
              Start Your Export Order Today
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Connect with our export team for competitive pricing, sample requests, and custom packaging solutions.
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

export default PusaBasmati1509;
