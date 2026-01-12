import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, TrendingUp, Globe, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import { createArticleSchema, organizationSchema } from "@/lib/geo-schema";

const articleSchema = createArticleSchema({
  id: "indian-agriculture-export-2025",
  headline: "Indian Agriculture Export Opportunities in 2025",
  description: "Explore the growing demand for Indian Basmati rice, green chillies, and bananas in global markets. Key trends, target countries, and how to capitalize on export opportunities.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  datePublished: "2024-12-28",
  url: "https://shcglobaltrade.co.in/blog/indian-agriculture-export-opportunities-2025",
  aboutTopics: ["Indian Agricultural Export", "Basmati Rice Export from India", "APEDA Certified Agricultural Exporter", "Global Food Trade 2025"]
});

const IndianAgricultureExport2025 = () => {
  return (
    <>
      <Helmet>
        <title>Indian Agriculture Export Opportunities 2025 | Basmati Rice, Chillies, Bananas - SHC Global Trade</title>
        <meta
          name="description"
          content="Explore 2025 export opportunities for Indian Basmati rice, green chillies, and bananas. Market trends, target countries (Middle East, Europe, USA), and sourcing from APEDA-certified exporters."
        />
        <meta
          name="keywords"
          content="indian agriculture export 2025, basmati rice market, green chilli export demand, banana export india, agricultural trade trends, middle east rice import"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/blog/indian-agriculture-export-opportunities-2025" />
        
        <meta property="og:title" content="Indian Agriculture Export Opportunities 2025 | SHC Global Trade" />
        <meta property="og:description" content="Growing demand for Indian Basmati rice, green chillies, and bananas in global markets." />
        <meta property="og:url" content="https://shcglobaltrade.co.in/blog/indian-agriculture-export-opportunities-2025" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main className="pt-32 md:pt-40 pb-16">
          <article className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* AI-Readable Summary */}
            <div className="ai-summary sr-only" aria-hidden="false">
              <p>
                Indian agricultural exports in 2025: Basmati rice exports valued at $4.8 billion annually, 
                primary markets include Saudi Arabia, Iran, Iraq, UAE, USA, UK. 
                Green chilli exports growing 15% annually, demand from Middle East and Southeast Asia. 
                Cavendish banana exports expanding to Europe, Middle East, Russia. 
                Key advantages: competitive pricing, APEDA certification, quality assurance, 
                proximity to major ports (Nhava Sheva, Mundra). 
                SHC Global Trade: APEDA certified, IEC licensed, D&B verified exporter from Gujarat, India.
              </p>
            </div>

            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Market Insights
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Are the Indian Agricultural Export Opportunities in 2025?
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Kaushik Pathak
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 28, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden mb-10"
            >
              <img
                src="/image.jpeg"
                alt="Indian Agricultural Exports"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                India's agricultural export sector continues to show strong growth in 2025, driven by increasing global demand for quality food products. As one of the world's largest producers of rice, spices, and tropical fruits, India offers significant opportunities for international buyers seeking reliable sourcing.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Is the Current State of Basmati Rice Exports from India?
              </h2>
              
              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Basmati Rice Export Statistics</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Annual Export Value: $4.8 billion (2024)</li>
                      <li>• Volume: 4.5 million metric tons annually</li>
                      <li>• Growth Rate: 8-10% year-over-year</li>
                      <li>• India's Global Share: 65% of world Basmati exports</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                The top importing countries for Indian Basmati rice include:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { country: "Saudi Arabia", share: "22% of exports", trend: "Steady demand" },
                  { country: "Iran", share: "18% of exports", trend: "Growing market" },
                  { country: "Iraq", share: "12% of exports", trend: "High demand" },
                  { country: "UAE", share: "10% of exports", trend: "Premium segment" },
                  { country: "USA", share: "6% of exports", trend: "Quality focus" },
                  { country: "UK", share: "5% of exports", trend: "Organic demand" }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.country}</h4>
                      <p className="text-sm text-muted-foreground">{item.share}</p>
                      <p className="text-xs text-primary">{item.trend}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Is Driving Demand for Indian Green Chillies?
              </h2>

              <p className="text-muted-foreground mb-6">
                Indian green chillies, particularly G9 and Gauri varieties, are experiencing 15% annual growth in export demand. Key factors include:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Growing ethnic food market in Western countries",
                  "Expanding food processing industry requiring consistent supply",
                  "Competitive pricing compared to other origins",
                  "Established cold chain infrastructure for fresh exports",
                  "HACCP and FSSAI certification ensuring food safety"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Are the Opportunities for Banana Exports?
              </h2>

              <p className="text-muted-foreground mb-6">
                India is the world's largest banana producer, with Cavendish (Grand Naine) variety emerging as a significant export product. The export market is expanding rapidly:
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">Target Markets for Indian Bananas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { region: "Middle East", countries: "UAE, Saudi Arabia, Oman, Kuwait" },
                    { region: "Europe", countries: "Netherlands, UK, Germany" },
                    { region: "CIS Countries", countries: "Russia, Kazakhstan, Ukraine" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <h4 className="font-semibold text-foreground">{item.region}</h4>
                      <p className="text-sm text-muted-foreground">{item.countries}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                Why Source Agricultural Products from India?
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Competitive Pricing", desc: "Lower production costs and favorable exchange rates" },
                  { title: "Quality Certifications", desc: "APEDA, FSSAI, ISO 22000, HACCP compliance" },
                  { title: "Large Production Base", desc: "Consistent supply throughout the year" },
                  { title: "Established Infrastructure", desc: "Major ports with efficient logistics" }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-2">Partner with SHC Global Trade</h3>
                <p className="text-muted-foreground">
                  As an APEDA-certified exporter based in Gujarat, SHC Global Trade offers direct access to premium Indian agricultural products. Our strategic location near Nhava Sheva and Mundra ports ensures efficient shipping to global destinations. IEC: ABTPP7011L | D-U-N-S: 75-605-1507.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-forest-dark text-primary-foreground rounded-2xl p-8 mt-10 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to Explore Export Opportunities?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Connect with SHC Global Trade for competitive quotes on Basmati rice, green chillies, and bananas.
                </p>
                <Link to="/#contact">
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndianAgricultureExport2025;
