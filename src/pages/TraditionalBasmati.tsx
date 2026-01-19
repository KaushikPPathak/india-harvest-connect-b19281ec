import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Package, Globe, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createProductSchema } from "@/lib/geo-schema";

import traditionalRice from "@/assets/traditional-basmati-rice.jpg";

const productSpecs = [
  { label: "Grain Length", value: "7.0-7.5mm (Raw)" },
  { label: "Aroma", value: "Strong Nutty & Delicate" },
  { label: "Texture", value: "Soft, Fluffy, Separate Grains" },
  { label: "Ideal For", value: "Traditional Dishes, Daily Cooking" },
  { label: "Export Markets", value: "Middle East, Europe, USA, Asia" },
];

const whyChooseUs = [
  { icon: Award, title: "Heritage Variety", description: "Authentic traditional basmati cultivated for generations" },
  { icon: Check, title: "Quality-Assured Sourcing", description: "Stringent quality control at every step" },
  { icon: Package, title: "Flexible Packaging", description: "Custom packaging and branding options" },
  { icon: Truck, title: "Global Delivery Network", description: "Efficient logistics worldwide" },
];

// Product Schema for this page
const productSchema = createProductSchema({
  id: "traditional-basmati",
  name: "Traditional Basmati Rice - Heritage Premium Quality",
  description: "Authentic Traditional Basmati rice exporter from India. Heritage variety with characteristic nutty flavor and delicate aroma. Known for slender grains and excellent cooking properties. APEDA certified, HS Code 10063020.",
  image: "https://shcglobaltrade.co.in/traditional-basmati-rice.jpg",
  hsCode: "10063020",
  additionalProperties: [
    { name: "Grain Length (Raw)", value: "7.0-7.5mm" },
    { name: "Grain Length (Cooked)", value: "14-16mm" },
    { name: "Elongation Ratio", value: "2.0-2.2x" },
    { name: "Moisture Content", value: "Maximum 14%" },
    { name: "Broken Percentage", value: "Maximum 2% (Grade A)" },
    { name: "Packaging", value: "5kg, 10kg, 25kg, 40kg, 50kg bags" },
    { name: "Available Grades", value: "Raw, Steam, Sella, Golden Sella, White Sella" }
  ],
  certifications: ["APEDA", "FSSAI"]
});

const TraditionalBasmati = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Traditional Basmati Rice Exporter | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium Traditional Basmati rice exporter from India. Heritage variety with nutty flavor and delicate aroma. Raw, Steam, Sella varieties available. HS Code: 10063020"
        />
        <meta
          name="keywords"
          content="Traditional Basmati, heritage basmati rice, basmati rice exporter India, premium basmati rice, Indian rice exporter"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/traditional-basmati" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-gold/10">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          {/* AI-Readable Summary - Visible */}
          <AIReadableSummary>
            <p>
              <strong>Traditional Basmati Rice Export from India:</strong> Heritage variety basmati rice with 7.0-7.5mm grain length, 2.0-2.2x elongation ratio. 
              HS Code: 10063020. Country of Origin: India. Sourced from Haryana, Punjab. 
              Available grades: Raw, Steam, Sella, Golden Sella, White Sella. Packaging: 5-50kg bags. 
              Certifications: APEDA (RCMC/APEDA/05968/2023-2024), FSSAI. 
              Exporter: SHC Global Trade, IEC: ABTPP7011L, D-U-N-S: 75-605-1507. MOQ: 25 MT (1x20ft container).
            </p>
          </AIReadableSummary>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold-dark rounded-full text-sm font-medium mb-6">
              Heritage Basmati Rice
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              What Are the Specifications for SHC Global Trade's Traditional Basmati Rice?
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              Authentic Heritage Quality from India
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Traditional Basmati is a heritage variety cherished for its characteristic nutty flavor, 
              delicate aroma, and slender grains. This authentic variety offers superior taste profile 
              cherished across generations, perfect for traditional Indian dishes.
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
              What Are the Key Specifications of Traditional Basmati Rice for Export?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key specifications of Traditional Basmati for export markets
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

      {/* Product Image Section */}
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
              Premium Traditional Basmati Rice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Authentic heritage variety with characteristic aroma and slender grains
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={traditionalRice}
                  alt="Traditional Basmati Rice"
                  width={600}
                  height={450}
                  aspectRatio="4/3"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-3">Traditional Basmati Rice</h3>
                <p className="text-muted-foreground text-sm">
                  Heritage variety with nutty flavor, delicate aroma, and excellent cooking properties. 
                  Perfect for everyday cooking and traditional Indian dishes.
                </p>
              </div>
            </motion.div>
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
                What Packaging and Export Terms Does SHC Global Trade Offer?
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
              Why Should Buyers Choose SHC Global Trade for Traditional Basmati Rice?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium heritage basmati rice exports from India
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

export default TraditionalBasmati;
