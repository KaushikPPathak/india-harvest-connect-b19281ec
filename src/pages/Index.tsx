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
import { organizationSchema, organizationReference, createProductSchema } from "@/lib/geo-schema";

const Index = () => {

  /* ✅ GOOGLE TRANSLATE - Script loaded in index.html */

  // Product Schemas for each category - with Organization reference
  const productSchemas = [
    createProductSchema({
      id: "1121-basmati-rice",
      name: "1121 Basmati Rice",
      description: "Premium extra-long grain 1121 Basmati Rice with 8.3mm+ grain length, 2.5x elongation ratio after cooking. Aged for minimum 2 years. Available in Raw, Sella, Golden Sella, White Sella, and Steam varieties. APEDA certified export quality from India.",
      image: "https://shcglobaltrade.co.in/1121-basmati-rice.jpg",
      hsCode: "1006.30",
      additionalProperties: [
        { name: "Grain Length", value: "8.3mm+" },
        { name: "Elongation Ratio", value: "2.5x" },
        { name: "Aging", value: "Minimum 2 years" },
        { name: "Packaging", value: "25/50 Kg PP Bags, Jute Bags" },
        { name: "Available Grades", value: "Raw, Sella, Golden Sella, White Sella, Steam" }
      ],
      certifications: ["APEDA", "FSSAI", "ISO 22000"]
    }),
    createProductSchema({
      id: "1509-basmati-rice",
      name: "Pusa Basmati 1509 Rice",
      description: "High-yielding Pusa 1509 Basmati variety developed by IARI with excellent cooking qualities. Features pearly white grains with 7.5mm+ length and consistent quality. Available in Raw, Sella, Golden Sella, White Sella, and Steam varieties. APEDA certified export from India.",
      image: "https://shcglobaltrade.co.in/pusa-basmati-rice.jpg",
      hsCode: "1006.30",
      additionalProperties: [
        { name: "Grain Length", value: "7.5mm+" },
        { name: "Variety", value: "Pusa 1509" },
        { name: "Packaging", value: "25/50 Kg PP Bags, Jute Bags" },
        { name: "Available Grades", value: "Raw, Sella, Golden Sella, White Sella, Steam" }
      ],
      certifications: ["APEDA", "FSSAI"]
    }),
    createProductSchema({
      id: "green-chillies",
      name: "Fresh Green Chillies (G9 & Gauri Varieties)",
      description: "Export-grade fresh green chillies from India. G9 variety offers high pungency with excellent shelf life. Gauri variety features balanced heat and vibrant color. Processed under HACCP standards with cold chain maintained. HS Code 0709.60.",
      image: "https://shcglobaltrade.co.in/green-chillies.jpg",
      hsCode: "0709.60",
      additionalProperties: [
        { name: "Varieties", value: "G9, Gauri" },
        { name: "Packaging", value: "5/10 Kg Cartons, Reefer Containers" },
        { name: "Storage", value: "Cold Chain Maintained" },
        { name: "Shelf Life", value: "12-15 days" }
      ],
      certifications: ["APEDA", "FSSAI", "HACCP"]
    }),
    createProductSchema({
      id: "cavendish-banana",
      name: "Fresh Cavendish Bananas (Grand Naine)",
      description: "Premium Cavendish variety bananas, including Grand Naine sub-variety. Class 1 grade with 13.5cm+ finger length. GAP certified farms ensure quality from cultivation to export. Ideal for supermarket chains worldwide. HS Code 0803.90.",
      image: "https://shcglobaltrade.co.in/cavendish-banana.jpg",
      hsCode: "0803.90",
      additionalProperties: [
        { name: "Grade", value: "Class 1" },
        { name: "Finger Length", value: "13.5cm+" },
        { name: "Packaging", value: "13/18 Kg Cartons, Cluster Packing" },
        { name: "Shelf Life", value: "20-25 days" }
      ],
      certifications: ["APEDA", "GAP Certified"]
    })
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Minimum Order Quantity (MOQ) for SHC Global Trade exports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For sea shipments (Basmati Rice), the MOQ is one 20ft container, approximately 25 metric tons. For air shipments (Fresh Vegetables and Fruits including Green Chillies and Bananas), the MOQ is 1 metric ton."
        }
      },
      {
        "@type": "Question",
        name: "What payment terms does SHC Global Trade accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade accepts two payment options: (1) 30% advance payment with 70% against scanned Bill of Lading (BL), or (2) 100% Irrevocable Letter of Credit (LC) at sight."
        }
      },
      {
        "@type": "Question",
        name: "Does SHC Global Trade offer private labeling services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, SHC Global Trade offers private labeling. We can print your brand name and logo on bags, boxes, and cartons according to buyer specifications and requirements."
        }
      },
      {
        "@type": "Question",
        name: "What certifications does SHC Global Trade hold for agricultural exports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade is APEDA certified (Registration: RCMC/APEDA/05968/2023-2024), holds IEC License (ABTPP7011L), FSSAI certified for food safety, GST registered (24ABTPP7011L1Z9), and is D&B verified (D-U-N-S: 75-605-1507)."
        }
      },
      {
        "@type": "Question",
        name: "Which ports does SHC Global Trade use for international shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade primarily ships from Nhava Sheva Port (JNPT) and Mundra Port in Gujarat, India. Our headquarters in Surat provides strategic proximity to both ports, minimizing transit time and maintaining freshness for perishable goods."
        }
      },
      {
        "@type": "Question",
        name: "What quality standards does SHC Global Trade follow for exports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade implements rigorous quality checks at the sourcing stage. Products meet international food safety standards including FSSAI certification, ISO 22000 compliance for applicable products, and HACCP certification for processed items."
        }
      },
      {
        "@type": "Question",
        name: "Where does SHC Global Trade source its agricultural products from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basmati Rice is sourced from the fertile regions of Punjab, Haryana, and Uttar Pradesh. Green Chillies (G9 and Gauri varieties) come from Gujarat and Andhra Pradesh. Cavendish Bananas are sourced from Maharashtra and Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        name: "Which countries does SHC Global Trade export to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade exports to markets worldwide including the Middle East (UAE, Saudi Arabia, Kuwait, Qatar), Europe (UK, Germany, Netherlands), North America (USA, Canada), Australia, and Asian countries. We offer both sea freight (FCL containers) and air freight options."
        }
      }
    ]
  };

  // LocalBusiness Schema (enhanced)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shcglobaltrade.co.in/#localbusiness",
    name: "SHC Global Trade",
    description: "Leading APEDA-certified exporter of premium Basmati Rice, Green Chillies & Cavendish Bananas from India",
    url: "https://shcglobaltrade.co.in",
    telephone: "+91-9327420046",
    email: "sales@shcglobaltrade.co.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gopipura",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395003",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1702",
      longitude: "72.8311"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    },
    sameAs: ["https://www.linkedin.com/in/kaushik-pathak-83945927/"],
    priceRange: "$$",
    image: "https://shcglobaltrade.co.in/logo.jpeg"
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

        {/* Organization Schema - Canonical */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* Product Schemas */}
        {productSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

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
