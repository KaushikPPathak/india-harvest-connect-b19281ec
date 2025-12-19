import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>SHC Global Trade - Premium Basmati Rice, Green Chillies & Banana Exports from India</title>
        <meta
          name="description"
          content="SHC Global Trade - Leading exporter of premium 1121 Basmati Rice, Traditional Basmati, Pusa Basmati, Gauri & G9 Green Chillies, and Cavendish Bananas from India. APEDA certified, IEC licensed. Based in Surat, Gujarat."
        />
        <meta
          name="keywords"
          content="basmati rice exporter, 1121 basmati rice, pusa basmati rice, green chillies export, gauri chillies, g9 chillies, banana export india, cavendish banana, grand naine banana, indian agricultural exports, APEDA certified exporter, surat exporter, gujarat exporter, shc global trade"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SHC Global Trade - Premium Indian Agricultural Exports" />
        <meta property="og:description" content="Export quality Basmati Rice, Green Chillies & Bananas from India. APEDA certified, globally trusted." />
        <meta property="og:url" content="https://shcglobaltrade.co.in" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SHC Global Trade - Premium Indian Agricultural Exports" />
        <meta name="twitter:description" content="Export quality Basmati Rice, Green Chillies & Bananas from India." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Products />
          <WhyChooseUs />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
