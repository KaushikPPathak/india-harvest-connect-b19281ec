import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Package, Truck, Award, Leaf, Thermometer, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createProductSchema } from "@/lib/geo-schema";
import gauriChilliImage from "@/assets/gauri-green-chilli.jpg";

// Product Schema for this page
const productSchema = createProductSchema({
  id: "gauri-green-chilli",
  name: "Gauri Green Chilli - Premium Indian Export Quality",
  description: "Premium Gauri Green Chilli exporter from India. Fresh, spicy, export-grade quality green chillies with bright green color and medium pungency. APEDA certified processing. HS Code 07096010. Sourced from Andhra Pradesh and Gujarat, India.",
  image: "https://shcglobaltrade.co.in/gauri-green-chilli.jpg",
  hsCode: "07096010",
  additionalProperties: [
    { name: "Color", value: "Bright glossy green" },
    { name: "Pungency", value: "Medium to high" },
    { name: "Size", value: "Medium length, uniform" },
    { name: "Texture", value: "Smooth skin, firm flesh" },
    { name: "Shelf Life", value: "10-14 days under cold storage" },
    { name: "Packaging", value: "2kg, 5kg, 10kg cartons" },
    { name: "Storage", value: "Cold chain maintained" }
  ],
  certifications: ["APEDA", "FSSAI"]
});

const GauriGreenChilli = () => {
  const productOverview = [
    { label: "Color", value: "Bright glossy green" },
    { label: "Pungency", value: "Medium to high" },
    { label: "Size", value: "Medium length, uniform" },
    { label: "Texture", value: "Smooth skin, firm flesh" },
    { label: "Usage", value: "Culinary, food processing, restaurants" },
    { label: "Export Markets", value: "Middle East, Europe, Southeast Asia" },
  ];

  const qualitySpecs = [
    "Fresh hand-picked produce",
    "Free from pests and diseases",
    "Export-grade sorting and grading",
    "Hygienic handling and packing",
  ];

  const packagingDetails = [
    { label: "Packaging", value: "2kg, 5kg, 10kg cartons or as per buyer requirement" },
    { label: "Packaging Type", value: "Corrugated boxes / ventilated cartons" },
    { label: "Shelf Life", value: "10–14 days under proper cold storage" },
    { label: "HS Code", value: "07096010" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "APEDA & IEC Certified", description: "Government recognized exporter" },
    { icon: Leaf, title: "Farm-Sourced Fresh", description: "Direct from quality farms" },
    { icon: Check, title: "Strict Quality Control", description: "Multi-level inspection process" },
    { icon: Truck, title: "Timely Global Delivery", description: "Efficient logistics network" },
  ];

  return (
    <>
      <Helmet>
        <title>Gauri Green Chilli Exporter from India | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium Gauri Green Chilli exporter from India. Fresh, spicy, export-grade quality green chillies with bright green color and medium pungency. APEDA certified."
        />
        <meta
          name="keywords"
          content="Gauri green chilli, green chilli exporter India, Indian green chillies, fresh green chillies export, APEDA certified chilli exporter"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/gauri-green-chilli" />
        
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
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          {/* AI-Readable Summary - Visible */}
          <AIReadableSummary className="bg-green-900/50 border-green-700/50 text-green-100/80">
            <p>
              <strong>Gauri Green Chilli Export from India:</strong> Premium green chilli variety with bright glossy green color, medium to high pungency, uniform size. 
              HS Code: 07096010. Country of Origin: India. Sourced from Andhra Pradesh and Gujarat. 
              Shelf Life: 10-14 days under cold storage. Packaging: 2kg, 5kg, 10kg ventilated cartons. 
              Certifications: APEDA (RCMC/APEDA/05968/2023-2024), FSSAI. 
              Exporter: SHC Global Trade, IEC: ABTPP7011L, D-U-N-S: 75-605-1507. MOQ: 1 Ton (air freight).
            </p>
          </AIReadableSummary>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-200 rounded-full text-sm font-medium mb-6">
                Premium Export Quality
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                What Are the Specifications for SHC Global Trade's Gauri Green Chilli?
              </h1>
              <p className="text-green-100 text-lg mb-4 font-medium">
                Fresh, Spicy & Export-Grade Quality
              </p>
              <p className="text-green-200/80 text-lg mb-8 leading-relaxed">
                Gauri Green Chilli is a premium Indian green chilli variety known for its bright green color, medium pungency, and uniform size. It is widely preferred in international markets for its freshness, shelf life, and consistent quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="bg-green-500 hover:bg-green-400 text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Quote
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-green-300/30 text-white hover:bg-green-300/20"
                  asChild
                >
                  <a href="/#contact">Contact Us</a>
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
                  src={gauriChilliImage}
                  alt="Premium Gauri Green Chilli for Export"
                  width={600}
                  height={400}
                  priority={true}
                  aspectRatio="3/2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
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
              What Are the Key Specifications of Gauri Green Chilli for Export?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications of our premium Gauri Green Chilli
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
                className="bg-card p-6 rounded-xl border border-border hover:border-green-500/30 hover:shadow-lg transition-all"
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
                What Quality Standards Does SHC Global Trade Follow for Gauri Chilli?
              </h2>
              <p className="text-muted-foreground mb-8">
                We ensure the highest quality standards for all our green chilli exports through rigorous quality control processes.
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
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
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
                <Leaf className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">100% Fresh</h4>
                <p className="text-muted-foreground text-sm">Farm to export</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Thermometer className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Cold Chain</h4>
                <p className="text-muted-foreground text-sm">Temperature controlled</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Package className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Export Pack</h4>
                <p className="text-muted-foreground text-sm">International standard</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Clock className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">10-14 Days</h4>
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
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 rounded-xl border border-green-500/20"
              >
                <span className="text-green-600 text-sm font-medium">{item.label}</span>
                <p className="text-foreground font-semibold mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Should Buyers Choose SHC Global Trade for Gauri Green Chilli?
            </h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Your trusted partner for premium green chilli exports from India
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
                className="bg-green-800/50 p-6 rounded-xl text-center hover:bg-green-800/70 transition-colors"
              >
                <item.icon className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-green-200 text-sm">{item.description}</p>
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
                className="bg-white text-green-900 hover:bg-green-100"
                asChild
              >
                <a href="/#contact">Get Quote</a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GauriGreenChilli;
