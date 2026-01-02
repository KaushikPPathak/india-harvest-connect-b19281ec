import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SHC Global Trade",
    "description": "Leading exporter of premium Basmati Rice, Green Chillies & Cavendish Bananas from India",
    "url": "https://shcglobaltrade.co.in",
    "telephone": "+91-9327420046",
    "email": "info@shcglobaltrade.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Surat",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1702",
      "longitude": "72.8311"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/kaushik-pathak-83945927/"
    ],
    "priceRange": "$$",
    "image": "https://shcglobaltrade.co.in/og-image.jpg"
  };

  return (
    <>
      <Helmet>
        <title>Merchant Exporter of Basmati Rice, Banana & Green Chilli | SHC Global Trade</title>
        <meta
          name="description"
          content="SHC Global Trade - Leading merchant exporter of premium 1121 Basmati Rice, Pusa Basmati, Gauri & G9 Green Chillies, and Cavendish Bananas from India. APEDA certified, IEC licensed."
        />
        <meta
          name="keywords"
          content="basmati rice exporter, 1121 basmati rice, pusa basmati rice, green chillies export, gauri chillies, g9 chillies, banana export india, cavendish banana, grand naine banana, indian agricultural exports, APEDA certified exporter, surat exporter, gujarat exporter, shc global trade"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Merchant Exporter of Basmati Rice, Banana & Green Chilli | SHC Global Trade" />
        <meta property="og:description" content="Premium Basmati Rice, Green Chillies & Bananas from India. APEDA certified, globally trusted exporter." />
        <meta property="og:url" content="https://shcglobaltrade.co.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SHC Global Trade" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Merchant Exporter of Basmati Rice, Banana & Green Chilli | SHC Global Trade" />
        <meta name="twitter:description" content="Premium Basmati Rice, Green Chillies & Bananas from India. APEDA certified." />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Products />
          <WhyChooseUs />
          <Certifications />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
