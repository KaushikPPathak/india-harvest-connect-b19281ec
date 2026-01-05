import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import DownloadCatalogue from "@/components/DownloadCatalogue";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {

  /* ✅ GOOGLE TRANSLATE - Script loaded in index.html */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SHC Global Trade",
    description:
      "Leading exporter of premium Basmati Rice, Green Chillies & Cavendish Bananas from India",
    url: "https://shcglobaltrade.co.in",
    telephone: "+91-9327420046",
    email: "info@shcglobaltrade.co.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Surat",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395003",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1702",
      longitude: "72.8311",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/in/kaushik-pathak-83945927/"],
    priceRange: "$$",
    image: "https://shcglobaltrade.co.in/og-image.jpg",
  };

  return (
    <>
      <Helmet>
        <title>
          Premium Basmati Rice Exporter from India | 1121 & Pusa Rice, Green Chillies, Bananas – SHC Global Trade
        </title>
        <meta
          name="description"
          content="India's trusted exporter of Extra Long Grain 1121 Basmati Rice, Pusa Basmati, G9 & Gauri Green Chillies, and Cavendish Bananas. APEDA certified, globally shipped. Get competitive quotes today!"
        />
        <meta
          name="keywords"
          content="basmati rice exporter india, 1121 basmati rice wholesale, pusa basmati rice supplier, extra long grain basmati, green chillies exporter, G9 chilli export, gauri green chilli, cavendish banana exporter, grand naine banana india, APEDA certified rice exporter, gujarat rice exporter, bulk basmati rice, indian agricultural exports, premium rice supplier"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Premium Basmati Rice Exporter from India | SHC Global Trade"
        />
        <meta
          property="og:description"
          content="Your trusted source for Extra Long Grain 1121 Basmati Rice, Pusa Basmati, Green Chillies & Cavendish Bananas. APEDA certified, competitive pricing, global delivery."
        />
        <meta property="og:url" content="https://shcglobaltrade.co.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SHC Global Trade" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Basmati Rice Exporter from India | SHC Global Trade"
        />
        <meta
          name="twitter:description"
          content="Extra Long Grain 1121 Basmati Rice, Pusa Basmati, G9 Green Chillies & Cavendish Bananas. APEDA certified exporter with global delivery."
        />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* ✅ GOOGLE TRANSLATE DROPDOWN (VISIBLE PLACE) */}
       <div id="google_translate_floating">
  <div id="google_translate_element"></div>
</div>

        <Header />

        <main>
          <Hero />
          <AboutUs />
          <Products />
          <WhyChooseUs />
          <Certifications />
          <DownloadCatalogue />
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
