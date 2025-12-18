import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cavendishBanana from "@/assets/cavendish-banana.jpg";

const CavendishBanana = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productOverview = [
    { label: "Peel Color", value: "Green (raw), bright yellow when ripe" },
    { label: "Flesh", value: "Creamy white, firm texture" },
    { label: "Taste", value: "Mild and sweet" },
    { label: "Size", value: "Medium to large, uniform" },
    { label: "Usage", value: "Fresh consumption, retail, food service" },
    { label: "Export Markets", value: "Middle East, Europe, Russia, Asia" },
  ];

  const qualitySpecs = [
    "Uniform hand size and finger length",
    "Free from bruises and defects",
    "Naturally ripened",
    "Export-grade sorting and grading",
  ];

  const packagingDetails = [
    { label: "Packaging", value: "5kg, 7kg, 13kg cartons or as per buyer requirement" },
    { label: "Packaging Type", value: "Corrugated export cartons with padding" },
    { label: "Shelf Life", value: "20–25 days under proper storage" },
    { label: "HS Code", value: "08039010" },
  ];

  const whyChooseUs = [
    "APEDA & IEC Certified Exporter",
    "Farm-sourced fresh produce",
    "Strict quality control",
    "Timely global delivery",
  ];

  return (
    <>
      <Helmet>
        <title>Cavendish Banana Exporter from India | SHC Global Trade India</title>
        <meta
          name="description"
          content="Premium export quality Cavendish Bananas from India. APEDA certified exporter offering fresh, naturally grown bananas with long shelf life for international markets."
        />
        <meta
          name="keywords"
          content="Cavendish banana exporter India, fresh banana export, Indian banana supplier, premium banana wholesale, APEDA certified banana"
        />
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
                  Premium Fresh Produce
                </span>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4">
                  Cavendish Banana
                </h1>
                <p className="text-xl lg:text-2xl text-gold font-medium mb-4">
                  Premium Export Quality Bananas from India
                </p>
                <p className="text-lg text-primary-foreground/80 mb-2">
                  Naturally Grown, Fresh & Export-Grade
                </p>
                <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                  Cavendish Banana is the most widely traded banana variety globally, known for its uniform size, smooth yellow peel, sweet taste, and long shelf life. Indian Cavendish bananas are highly preferred in international markets due to their quality and consistency.
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
                  <img
                    src={cavendishBanana}
                    alt="Premium Cavendish Banana"
                    className="w-full h-full object-cover"
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
              Product Overview
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
              Quality Specifications
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
              Packaging & Export Details
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
              Why Choose SHC Global Trade India
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
                Contact us today for pricing, samples, and export inquiries for premium Cavendish Bananas.
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
                <Link to="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CavendishBanana;
