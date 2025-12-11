import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AgroExports India - Premium Basmati Rice, Green Chillies & Raw Banana Exports</title>
        <meta
          name="description"
          content="Leading exporter of premium Basmati Rice, Fresh Green Chillies, and Raw Bananas from India. APEDA certified, serving 45+ countries with quality agricultural products."
        />
        <meta
          name="keywords"
          content="basmati rice exporter, green chillies export, raw banana export, Indian agricultural exports, APEDA certified exporter"
        />
        <link rel="canonical" href="https://agroexports.in" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
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
