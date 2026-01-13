import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Package, Truck, Award, Leaf, Thermometer, Clock, Flame } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createProductSchema } from "@/lib/geo-schema";
import g9ChilliImage from "@/assets/g9-green-chilli.jpg";

// Product Schema for this page
const productSchema = createProductSchema({
  id: "g9-green-chilli",
  name: "G9 Green Chilli - High Pungency Export Quality",
  description: "Premium G9 Green Chilli exporter from India. High pungency export quality green chilli with dark green color, long shelf life (12-15 days). HACCP certified processing with cold chain maintained. HS Code 07096010. Sourced from Gujarat, India.",
  image: "https://shcglobaltrade.co.in/g9-green-chilli.jpg",
  hsCode: "07096010",
  additionalProperties: [
    { name: "Color", value: "Dark green" },
    { name: "Pungency", value: "High" },
    { name: "Size", value: "Long and slender" },
    { name: "Texture", value: "Thick skin, firm body" },
    { name: "Shelf Life", value: "12-15 days under cold storage" },
    { name: "Packaging", value: "2kg, 5kg, 10kg cartons" },
    { name: "Storage", value: "Cold chain maintained" }
  ],
  certifications: ["APEDA", "FSSAI", "HACCP"]
});

const G9GreenChilli = () => {
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
  
  const productOverview = [
    { label: "Color", value: "Dark green" },
    { label: "Pungency", value: "High" },
    { label: "Size", value: "Long and slender" },
    { label: "Texture", value: "Thick skin, firm body" },
    { label: "Usage", value: "Spicy cuisines, sauces, pickles, food processing" },
    { label: "Export Markets", value: "Middle East, Africa, Asia" },
  ];

  const qualitySpecs = [
    "Uniform size and color",
    "Freshly harvested",
    "Chemical residue-controlled",
    "Export-quality grading",
  ];

  const packagingDetails = [
    { label: "Packaging", value: "2kg, 5kg, 10kg cartons" },
    { label: "Packaging Type", value: "Ventilated export cartons" },
    { label: "Shelf Life", value: "12–15 days under cold storage" },
    { label: "HS Code", value: "07096010" },
  ];

  const whyChooseUs = [
    { icon: Truck, title: "Reliable Export Partner", description: "Trusted by global buyers" },
    { icon: Check, title: "Quality-Assured Sourcing", description: "Strict selection process" },
    { icon: Package, title: "Flexible Packaging", description: "Custom options available" },
    { icon: Award, title: "Global Logistics Support", description: "Efficient delivery network" },
  ];

  return (
    <>
      <Helmet>
        <title>G9 Green Chilli Exporter from India | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium G9 Green Chilli exporter from India. High pungency export quality green chilli with dark green color and long shelf life. Quality-assured sourcing."
        />
        <meta
          name="keywords"
          content="G9 green chilli, green chilli exporter India, high pungency chilli, Indian green chillies, fresh green chillies export"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/g9-green-chilli" />
        
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
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          {/* AI-Readable Summary - Visible */}
          <AIReadableSummary className="bg-emerald-900/50 border-emerald-700/50 text-emerald-100/80">
            <p>
              <strong>G9 Green Chilli Export from India:</strong> High pungency green chilli variety with dark green color, long slender shape, thick skin. 
              HS Code: 07096010. Country of Origin: India. Sourced from Gujarat and Andhra Pradesh. 
              Shelf Life: 12-15 days under cold storage. Packaging: 2kg, 5kg, 10kg ventilated cartons. 
              Certifications: APEDA (RCMC/APEDA/05968/2023-2024), FSSAI, HACCP. 
              Exporter: SHC Global Trade, IEC: ABTPP7011L, D-U-N-S: 75-605-1507. MOQ: 1 Ton (air freight).
            </p>
          </AIReadableSummary>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-200 rounded-full text-sm font-medium mb-6">
                <Flame className="w-4 h-4" />
                High Pungency
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                What Are the Specifications for SHC Global Trade's G9 Green Chilli?
              </h1>
              <p className="text-emerald-100 text-lg mb-4 font-medium">
                Strong Flavor, Long Shelf Life
              </p>
              <p className="text-emerald-200/80 text-lg mb-8 leading-relaxed">
                G9 Green Chilli is a high-pungency chilli variety widely grown in India and highly demanded in export markets. It is known for its dark green color, longer size, and strong spiciness, making it ideal for culinary and industrial use.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-emerald-300/30 text-white hover:bg-emerald-300/20"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={g9ChilliImage}
                  alt="Premium G9 Green Chilli for Export"
                  width={600}
                  height={400}
                  priority={true}
                  aspectRatio="3/2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Are the Key Specifications of G9 Green Chilli for Export?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications of our premium G9 Green Chilli
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productOverview.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border hover:border-emerald-500/30 hover:shadow-lg transition-all"
              >
                <span className="text-muted-foreground text-sm">{item.label}</span>
                <p className="text-foreground font-semibold text-lg mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Specifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Quality Standards Does SHC Global Trade Follow for G9 Chilli?
              </h2>
              <p className="text-muted-foreground mb-8">
                We ensure the highest quality standards for all our G9 green chilli exports through rigorous quality control processes.
              </p>
              <div className="space-y-4">
                {qualitySpecs.map((spec, index) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-foreground">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Leaf className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">100% Fresh</h4>
                <p className="text-muted-foreground text-sm">Farm to export</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Thermometer className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Cold Chain</h4>
                <p className="text-muted-foreground text-sm">Temperature controlled</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Flame className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">High Pungency</h4>
                <p className="text-muted-foreground text-sm">Strong spice level</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Clock className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">12-15 Days</h4>
                <p className="text-muted-foreground text-sm">Shelf life</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging & Export Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Packaging and Export Terms Does SHC Global Trade Offer for Green Chilli?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingDetails.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-6 rounded-xl border border-emerald-500/20"
              >
                <span className="text-emerald-600 text-sm font-medium">{item.label}</span>
                <p className="text-foreground font-semibold mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Should Buyers Choose SHC Global Trade for G9 Green Chilli?
            </h2>
            <p className="text-emerald-200 max-w-2xl mx-auto">
              Your trusted partner for premium G9 green chilli exports from India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-800/50 p-6 rounded-xl text-center hover:bg-emerald-800/70 transition-colors"
              >
                <item.icon className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-emerald-200 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="bg-white text-emerald-900 hover:bg-emerald-100"
                onClick={scrollToContact}
              >
                Get Quote
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
                onClick={scrollToContact}
              >
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

export default G9GreenChilli;
