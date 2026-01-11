import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://shcglobaltrade.co.in/blog/basmati-rice-grading-system-india#article",
  headline: "Complete Guide to Basmati Rice Grading System in India",
  description: "Understanding the AGMARK and export grading standards for 1121 and 1509 Basmati rice varieties. Learn about grain length, broken percentage, moisture content, and quality parameters.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  author: {
    "@type": "Person",
    name: "Kaushik Pathak",
    url: "https://www.linkedin.com/in/kaushik-pathak-83945927/"
  },
  publisher: {
    "@type": "Organization",
    name: "SHC Global Trade",
    logo: {
      "@type": "ImageObject",
      url: "https://shcglobaltrade.co.in/logo.jpeg"
    }
  },
  datePublished: "2025-01-10",
  dateModified: "2025-01-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shcglobaltrade.co.in/blog/basmati-rice-grading-system-india"
  }
};

const BasmatiRiceGrading = () => {
  return (
    <>
      <Helmet>
        <title>Basmati Rice Grading System in India | 1121 & 1509 Quality Standards - SHC Global Trade</title>
        <meta
          name="description"
          content="Complete guide to Basmati rice grading: AGMARK standards, export grades for 1121 and 1509 varieties, grain length specifications, broken percentage, moisture content, and quality parameters."
        />
        <meta
          name="keywords"
          content="basmati rice grading, 1121 basmati quality, 1509 basmati grade, AGMARK rice standards, basmati export grade, rice grain length, basmati moisture content"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/blog/basmati-rice-grading-system-india" />
        
        <meta property="og:title" content="Basmati Rice Grading System in India | SHC Global Trade" />
        <meta property="og:description" content="Complete guide to Basmati rice grading standards for 1121 and 1509 varieties." />
        <meta property="og:url" content="https://shcglobaltrade.co.in/blog/basmati-rice-grading-system-india" />
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
                Basmati rice grading in India follows AGMARK and APEDA standards. 
                1121 Basmati: 8.3mm+ grain length, 2.5x elongation, max 2% broken for Grade A. 
                1509 Basmati: 7.5mm+ grain length, 2.2x elongation. 
                Key parameters: moisture (max 14%), foreign matter (max 0.5%), damaged grains (max 1.5%). 
                Export grades: Sella (parboiled), Raw, Steam, Golden Sella, White Sella.
                HS Code for Basmati: 1006.30.
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
                Rice Export
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Is the Basmati Rice Grading System in India?
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Kaushik Pathak
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 10, 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 min read
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
                alt="Premium Basmati Rice Grains"
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
                Basmati rice grading in India is governed by AGMARK (Agricultural Marketing) standards and APEDA (Agricultural and Processed Food Products Export Development Authority) guidelines. Understanding these standards is essential for international buyers seeking consistent quality.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Are the Key Parameters for Basmati Rice Grading?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Basmati rice is graded based on several measurable quality parameters that determine its export grade and market value:
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">1121 Basmati Rice Specifications (Premium Grade)</h3>
                <ul className="space-y-2">
                  {[
                    "Grain Length (Raw): 8.3mm to 8.4mm minimum",
                    "Grain Length (Cooked): 20mm+ after cooking",
                    "Elongation Ratio: 2.5x (doubles and a half)",
                    "Broken Percentage: Maximum 2% for Grade A",
                    "Moisture Content: Maximum 14%",
                    "Foreign Matter: Maximum 0.5%",
                    "Damaged/Discolored Grains: Maximum 1.5%"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">1509 Basmati Rice Specifications (Standard Grade)</h3>
                <ul className="space-y-2">
                  {[
                    "Grain Length (Raw): 7.5mm to 8.0mm",
                    "Grain Length (Cooked): 15mm to 18mm",
                    "Elongation Ratio: 2.2x to 2.3x",
                    "Broken Percentage: Maximum 2% for Grade A",
                    "Moisture Content: Maximum 14%",
                    "Aroma: Characteristic Basmati fragrance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Are the Different Processing Types for Export?
              </h2>

              <p className="text-muted-foreground mb-6">
                Basmati rice is available in five primary processing types, each suited for different culinary applications:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { type: "Raw Basmati", desc: "Unprocessed white rice with natural aroma. Ideal for Biryani and Pulao." },
                  { type: "Sella (Parboiled)", desc: "Partially boiled in husk. Firmer texture, higher nutritional value." },
                  { type: "Golden Sella", desc: "Parboiled with golden color. Popular in Middle Eastern markets." },
                  { type: "White Sella", desc: "Parboiled and polished to white. Combines Sella benefits with white appearance." },
                  { type: "Steam Basmati", desc: "Lightly steamed for softer texture. Quick cooking variety." }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">{item.type}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Is the HS Code for Basmati Rice Export?
              </h2>

              <p className="text-muted-foreground mb-6">
                Basmati rice is classified under HS Code <strong>1006.30</strong> (Semi-milled or wholly milled rice). This code is essential for customs documentation, duty calculation, and trade compliance.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-2">Quality Assurance at SHC Global Trade</h3>
                <p className="text-muted-foreground">
                  As an APEDA-certified exporter (Registration: RCMC/APEDA/05968/2023-2024), SHC Global Trade ensures all Basmati rice shipments meet international quality standards. Our IEC License (ABTPP7011L) and D&B verification (D-U-N-S: 75-605-1507) provide buyers with verified, reliable sourcing.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-forest-dark text-primary-foreground rounded-2xl p-8 mt-10 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to Source Premium Basmati Rice?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get competitive quotes for 1121 and 1509 Basmati rice varieties. MOQ: 25 MT (1x20ft container).
                </p>
                <Link to="/#contact">
                  <Button variant="hero" size="lg">
                    Request Quote
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

export default BasmatiRiceGrading;
