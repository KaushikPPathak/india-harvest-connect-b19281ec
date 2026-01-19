import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createProductSchema } from "@/lib/geo-schema";
import grandNaineBanana from "@/assets/grand-naine-banana.jpg";

// Product Schema for this page
const productSchema = createProductSchema({
  id: "grand-naine-banana",
  name: "Grand Naine Banana - Premium Cavendish Sub-variety from India",
  description: "Premium export quality Grand Naine Bananas (Cavendish sub-variety) from India. Class 1 grade with 13.5cm+ finger length, uniform size, consistent curvature, and appealing yellow color when ripe. GAP certified farms, sustainable farming. HS Code 08039010.",
  image: "https://shcglobaltrade.co.in/grand-naine-banana.jpg",
  hsCode: "08039010",
  additionalProperties: [
    { name: "Peel Color", value: "Green (raw), bright yellow when ripe" },
    { name: "Flesh", value: "Creamy white, firm texture" },
    { name: "Taste", value: "Sweet with slight tang" },
    { name: "Size", value: "Medium fingers, 13.5cm+ length" },
    { name: "Grade", value: "Class 1 (Premium Export)" },
    { name: "Shelf Life", value: "18-22 days under proper storage" },
    { name: "Packaging", value: "13kg, 18kg cartons" }
  ],
  certifications: ["APEDA", "GAP Certified"]
});

const GrandNaineBanana = () => {
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
    { label: "Peel Color", value: "Green (raw), bright yellow when ripe" },
    { label: "Flesh", value: "Creamy white, firm texture" },
    { label: "Taste", value: "Sweet with slight tang" },
    { label: "Size", value: "Medium fingers, 13.5cm+ length" },
    { label: "Usage", value: "Fresh consumption, retail, food service" },
    { label: "Export Markets", value: "Middle East, Europe, Russia, Asia" },
  ];

  const qualitySpecs = [
    "Premium Cavendish sub-variety",
    "Consistent curvature and finger length",
    "Free from bruises and defects",
    "Sustainably farmed produce",
  ];

  const packagingDetails = [
    { label: "Packaging", value: "13kg, 18kg cartons or as per buyer requirement" },
    { label: "Packaging Type", value: "Corrugated export cartons with cluster packing" },
    { label: "Shelf Life", value: "18–22 days under proper storage" },
    { label: "HS Code", value: "08039010" },
  ];

  const whyChooseUs = [
    "APEDA & IEC Certified Exporter",
    "Sustainable farming practices",
    "Strict quality control",
    "Timely global delivery",
  ];

  return (
    <>
      <Helmet>
        <title>Grand Naine Banana Exporter from India | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium export quality Grand Naine Bananas from India. APEDA certified exporter offering fresh, sustainably farmed Cavendish sub-variety bananas with excellent export credentials."
        />
        <meta
          name="keywords"
          content="Grand Naine banana exporter India, Cavendish banana export, Indian banana supplier, premium banana wholesale, APEDA certified banana, sustainable banana farming"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/grand-naine-banana" />
        
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-forest-dark via-forest to-forest-light py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            
            {/* AI-Readable Summary - Visible */}
            <AIReadableSummary className="bg-forest-dark/50 border-forest/50 text-primary-foreground/70">
              <p>
                <strong>Grand Naine Banana Export from India:</strong> Premium Cavendish sub-variety bananas with 13.5cm+ finger length, consistent curvature, sweet taste. 
                HS Code: 08039010. Country of Origin: India. Sourced from Tamil Nadu and Maharashtra. 
                Shelf Life: 18-22 days. Class 1 grade, sustainably farmed. Packaging: 13kg, 18kg cartons. 
                Certifications: APEDA (RCMC/APEDA/05968/2023-2024), GAP Certified. 
                Exporter: SHC Global Trade, IEC: ABTPP7011L, D-U-N-S: 75-605-1507. MOQ: 1 Ton (air freight).
              </p>
            </AIReadableSummary>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
                  Premium Cavendish Sub-variety
                </span>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4">
                  What Are the Specifications for SHC Global Trade's Grand Naine Banana?
                </h1>
                <p className="text-xl lg:text-2xl text-gold font-medium mb-4">
                  Premium Export Quality from India
                </p>
                <p className="text-lg text-primary-foreground/80 mb-2">
                  Sustainably Farmed, Fresh & Export-Grade
                </p>
                <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                  Grand Naine is a premium Cavendish sub-variety with excellent export credentials. 
                  Known for medium-sized fingers with consistent curvature, appealing yellow color when ripe, 
                  and cultivated using sustainable farming practices. Widely preferred in Middle East, European, and Asian markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
                    onClick={scrollToContact}
                  >
                    Get Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10"
                    onClick={scrollToContact}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
                  <OptimizedImage
                    src={grandNaineBanana}
                    alt="Premium Grand Naine Banana"
                    width={600}
                    height={600}
                    priority={true}
                    aspectRatio="1/1"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
                  Export Grade
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              What Are the Key Specifications of Grand Naine Banana for Export?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productOverview.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-gold font-semibold mb-2">{item.label}</p>
                    <p className="text-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Specifications Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              What Quality Standards Does SHC Global Trade Follow for Grand Naine Bananas?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {qualitySpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-background p-4 rounded-xl shadow-sm"
                  >
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packaging & Export Details */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              What Packaging and Export Terms Does SHC Global Trade Offer for Grand Naine Bananas?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingDetails.map((item, index) => (
                <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-gold font-semibold mb-2">{item.label}</p>
                    <p className="text-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-20 bg-forest-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-12">
              Why Should Buyers Choose SHC Global Trade for Grand Naine Bananas?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 p-6 rounded-xl text-center hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-primary-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Order?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us today for pricing, samples, and export inquiries for premium Grand Naine Bananas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+919327420046"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-foreground font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91-93274-20046
                </a>
                <a
                  href="mailto:sales@shcglobaltrade.co.in"
                  className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  sales@shcglobaltrade.co.in
                </a>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-foreground font-semibold"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GrandNaineBanana;
