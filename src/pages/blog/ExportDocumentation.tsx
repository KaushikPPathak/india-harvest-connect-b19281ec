import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, FileText, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://shcglobaltrade.co.in/blog/export-documentation-india-agricultural-products#article",
  headline: "Essential Export Documentation for Indian Agricultural Products",
  description: "A comprehensive guide to IEC, APEDA registration, phytosanitary certificates, Bill of Lading, and customs documentation required for exporting rice, vegetables, and fruits from India.",
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
  datePublished: "2025-01-05",
  dateModified: "2025-01-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shcglobaltrade.co.in/blog/export-documentation-india-agricultural-products"
  }
};

const ExportDocumentation = () => {
  return (
    <>
      <Helmet>
        <title>Export Documentation for Indian Agricultural Products | IEC, APEDA Guide - SHC Global Trade</title>
        <meta
          name="description"
          content="Complete guide to export documentation: IEC code, APEDA registration, phytosanitary certificate, Bill of Lading, commercial invoice, packing list, and customs clearance for Indian agricultural exports."
        />
        <meta
          name="keywords"
          content="export documentation india, IEC code, APEDA registration, phytosanitary certificate, bill of lading, agricultural export documents, customs clearance india"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/blog/export-documentation-india-agricultural-products" />
        
        <meta property="og:title" content="Export Documentation for Indian Agricultural Products | SHC Global Trade" />
        <meta property="og:description" content="Complete guide to IEC, APEDA, and export documentation for agricultural products from India." />
        <meta property="og:url" content="https://shcglobaltrade.co.in/blog/export-documentation-india-agricultural-products" />
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
                Export documentation for Indian agricultural products requires: 
                IEC (Import Export Code) from DGFT, APEDA Registration (RCMC) for agricultural exports, 
                Phytosanitary Certificate from Plant Quarantine, FSSAI License for food products, 
                Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin. 
                For Basmati rice: HS Code 1006.30. For green chillies: HS Code 0709.60. For bananas: HS Code 0803.90.
                SHC Global Trade credentials: IEC ABTPP7011L, APEDA RCMC/APEDA/05968/2023-2024.
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
                Export Guide
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Documentation Is Required for Exporting Agricultural Products from India?
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Kaushik Pathak
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 5, 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  10 min read
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
                alt="Export Documentation"
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
                Exporting agricultural products from India requires a comprehensive set of documents to ensure compliance with Indian export regulations and destination country import requirements. This guide covers all essential documentation for rice, vegetables, and fruit exports.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Is the IEC Code and Why Is It Required?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                The Import Export Code (IEC) is a 10-digit unique identification number issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for any business entity engaged in import/export activities in India.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">IEC Code Details</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Issuing Authority: DGFT (Directorate General of Foreign Trade)</li>
                      <li>• Validity: Lifetime (no renewal required)</li>
                      <li>• Application: Online via DGFT portal</li>
                      <li>• Example: SHC Global Trade IEC - ABTPP7011L</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Is APEDA Registration and Who Needs It?
              </h2>

              <p className="text-muted-foreground mb-6">
                APEDA (Agricultural and Processed Food Products Export Development Authority) registration is required for exporting scheduled products including Basmati rice, fruits, vegetables, and processed foods. The Registration Cum Membership Certificate (RCMC) is essential for availing export incentives.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">Products Requiring APEDA Registration</h3>
                <ul className="space-y-2">
                  {[
                    "Basmati Rice (HS Code: 1006.30)",
                    "Fresh Vegetables including Green Chillies (HS Code: 0709.60)",
                    "Fresh Fruits including Bananas (HS Code: 0803.90)",
                    "Processed Foods and Cereals",
                    "Meat and Poultry Products"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Shipping Documents Are Required for Export?
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Bill of Lading (B/L)",
                    desc: "Document of title issued by shipping line. Contains shipment details, consignee information, and serves as receipt of goods."
                  },
                  {
                    title: "Commercial Invoice",
                    desc: "Detailed invoice with product description, quantity, unit price, total value, Incoterms, and payment terms."
                  },
                  {
                    title: "Packing List",
                    desc: "Itemized list of package contents, weights, dimensions, and marks for customs and receiving verification."
                  },
                  {
                    title: "Certificate of Origin",
                    desc: "Document certifying the country of manufacture. Required for preferential duty rates under trade agreements."
                  },
                  {
                    title: "Phytosanitary Certificate",
                    desc: "Issued by Plant Quarantine Authority confirming products are pest-free. Mandatory for agricultural exports."
                  },
                  {
                    title: "Fumigation Certificate",
                    desc: "Proof of pest treatment, especially for grain exports. Required by many destination countries."
                  }
                ].map((doc, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">{doc.title}</h4>
                    <p className="text-sm text-muted-foreground">{doc.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                What Quality Certificates Are Required?
              </h2>

              <p className="text-muted-foreground mb-6">
                Depending on the destination country and product, additional quality certifications may be required:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { cert: "FSSAI License", desc: "Food Safety and Standards Authority of India certification" },
                  { cert: "ISO 22000", desc: "Food safety management system certification" },
                  { cert: "HACCP", desc: "Hazard Analysis Critical Control Points certification" },
                  { cert: "SGS/BV Inspection", desc: "Third-party quality inspection reports" }
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">{item.cert}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-2">SHC Global Trade Documentation Support</h3>
                <p className="text-muted-foreground">
                  As an APEDA-certified exporter (RCMC/APEDA/05968/2023-2024) with IEC License (ABTPP7011L), SHC Global Trade handles all export documentation. Our proximity to Nhava Sheva and Mundra ports ensures efficient customs clearance and shipment processing.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-forest-dark text-primary-foreground rounded-2xl p-8 mt-10 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Need Help with Export Documentation?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  SHC Global Trade provides complete documentation support for international buyers.
                </p>
                <Link to="/#contact">
                  <Button variant="hero" size="lg">
                    Contact Us
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

export default ExportDocumentation;
