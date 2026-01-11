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

  // Organization Schema with full business identifiers
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://shcglobaltrade.co.in/#organization",
    name: "SHC Global Trade",
    legalName: "SHC Global Trade",
    description: "APEDA-certified agricultural exporter from India specializing in premium Basmati Rice, Green Chillies, and Cavendish Bananas. IEC licensed with D&B verified credentials.",
    url: "https://shcglobaltrade.co.in",
    logo: "https://shcglobaltrade.co.in/logo.jpeg",
    telephone: "+91-9327420046",
    email: "sales@shcglobaltrade.co.in",
    foundingDate: "2024-01",
    founder: {
      "@type": "Person",
      name: "Kaushik Pathak",
      sameAs: "https://www.linkedin.com/in/kaushik-pathak-83945927/"
    },
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
    areaServed: "Worldwide",
    sameAs: [
      "https://www.linkedin.com/in/kaushik-pathak-83945927/"
    ],
    taxID: "24ABTPP7011L1Z9",
    duns: "75-605-1507",
    naics: "111199",
    isicV4: "0111",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "IEC Number",
        value: "ABTPP7011L"
      },
      {
        "@type": "PropertyValue",
        name: "APEDA Registration",
        value: "RCMC/APEDA/05968/2023-2024"
      },
      {
        "@type": "PropertyValue",
        name: "D-U-N-S Number",
        value: "75-605-1507"
      },
      {
        "@type": "PropertyValue",
        name: "GST Number",
        value: "24ABTPP7011L1Z9"
      }
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "APEDA Registration",
        credentialCategory: "Export License",
        recognizedBy: {
          "@type": "Organization",
          name: "Agricultural and Processed Food Products Export Development Authority"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "FSSAI License",
        credentialCategory: "Food Safety Certification"
      }
    ]
  };

  // Product Schemas for each category
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://shcglobaltrade.co.in/#1121-basmati-rice",
      name: "1121 Basmati Rice",
      description: "Premium extra-long grain 1121 Basmati Rice with 8.3mm+ grain length, 2.5x elongation ratio after cooking. Aged for minimum 2 years. Available in Raw, Sella, Golden Sella, White Sella, and Steam varieties.",
      image: "https://shcglobaltrade.co.in/1121-basmati-rice.jpg",
      brand: {
        "@type": "Brand",
        name: "SHC Global Trade"
      },
      manufacturer: {
        "@type": "Organization",
        name: "SHC Global Trade"
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India"
      },
      material: "Non-GMO Basmati Rice",
      additionalProperty: [
        { "@type": "PropertyValue", name: "HS Code", value: "1006.30" },
        { "@type": "PropertyValue", name: "Grain Length", value: "8.3mm+" },
        { "@type": "PropertyValue", name: "Elongation Ratio", value: "2.5x" },
        { "@type": "PropertyValue", name: "Aging", value: "Minimum 2 years" },
        { "@type": "PropertyValue", name: "Packaging", value: "25/50 Kg PP Bags, Jute Bags" },
        { "@type": "PropertyValue", name: "Certifications", value: "APEDA, FSSAI, ISO 22000" }
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD"
        },
        seller: {
          "@type": "Organization",
          name: "SHC Global Trade"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://shcglobaltrade.co.in/#1509-basmati-rice",
      name: "Pusa Basmati 1509 Rice",
      description: "High-yielding Pusa 1509 Basmati variety developed by IARI with excellent cooking qualities. Features pearly white grains with 7.5mm+ length and consistent quality. Available in Raw, Sella, Golden Sella, White Sella, and Steam varieties.",
      image: "https://shcglobaltrade.co.in/pusa-basmati-rice.jpg",
      brand: {
        "@type": "Brand",
        name: "SHC Global Trade"
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India"
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "HS Code", value: "1006.30" },
        { "@type": "PropertyValue", name: "Grain Length", value: "7.5mm+" },
        { "@type": "PropertyValue", name: "Variety", value: "Pusa 1509" },
        { "@type": "PropertyValue", name: "Packaging", value: "25/50 Kg PP Bags, Jute Bags" },
        { "@type": "PropertyValue", name: "Certifications", value: "APEDA, FSSAI" }
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "SHC Global Trade" }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://shcglobaltrade.co.in/#green-chillies",
      name: "Fresh Green Chillies (G9 & Gauri Varieties)",
      description: "Export-grade fresh green chillies from India. G9 variety offers high pungency with excellent shelf life. Gauri variety features balanced heat and vibrant color. Processed under HACCP standards with cold chain maintained.",
      image: "https://shcglobaltrade.co.in/green-chillies.jpg",
      brand: {
        "@type": "Brand",
        name: "SHC Global Trade"
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India"
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "HS Code", value: "0709.60" },
        { "@type": "PropertyValue", name: "Varieties", value: "G9, Gauri" },
        { "@type": "PropertyValue", name: "Packaging", value: "5/10 Kg Cartons, Reefer Containers" },
        { "@type": "PropertyValue", name: "Storage", value: "Cold Chain Maintained" },
        { "@type": "PropertyValue", name: "Certifications", value: "APEDA, FSSAI, HACCP" }
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "SHC Global Trade" }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://shcglobaltrade.co.in/#cavendish-banana",
      name: "Fresh Cavendish Bananas (Grand Naine)",
      description: "Premium Cavendish variety bananas, including Grand Naine sub-variety. Class 1 grade with 13.5cm+ finger length. GAP certified farms ensure quality from cultivation to export. Ideal for supermarket chains worldwide.",
      image: "https://shcglobaltrade.co.in/cavendish-banana.jpg",
      brand: {
        "@type": "Brand",
        name: "SHC Global Trade"
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "India"
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "HS Code", value: "0803.90" },
        { "@type": "PropertyValue", name: "Grade", value: "Class 1" },
        { "@type": "PropertyValue", name: "Finger Length", value: "13.5cm+" },
        { "@type": "PropertyValue", name: "Packaging", value: "13/18 Kg Cartons, Cluster Packing" },
        { "@type": "PropertyValue", name: "Certifications", value: "APEDA, GAP Certified" }
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "SHC Global Trade" }
      }
    }
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
          text: "For sea shipments (Rice/Sugar), the MOQ is one 20ft container (approximately 25 MT). For air shipments (Vegetables/Fruits), the MOQ is 1 Ton."
        }
      },
      {
        "@type": "Question",
        name: "What payment terms does SHC Global Trade accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept 30% Advance with 70% against scanned Bill of Lading (BL), or 100% Irrevocable Letter of Credit (LC) at sight."
        }
      },
      {
        "@type": "Question",
        name: "Does SHC Global Trade offer private labeling services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer private labeling services. We can print your brand and logo on bags/boxes as per buyer requirements."
        }
      },
      {
        "@type": "Question",
        name: "What certifications does SHC Global Trade hold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SHC Global Trade is APEDA certified (RCMC/APEDA/05968/2023-2024), holds IEC License (ABTPP7011L), FSSAI certified, and is D&B verified (D-U-N-S: 75-605-1507)."
        }
      },
      {
        "@type": "Question",
        name: "Which ports does SHC Global Trade use for shipping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We primarily use Nhava Sheva (JNPT) and Mundra Port in Gujarat, India. Our strategic location in Surat minimizes transit time and ensures freshness for perishable goods."
        }
      },
      {
        "@type": "Question",
        name: "What quality standards does SHC Global Trade follow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement rigorous quality checks at the sourcing stage. Our products meet international food safety standards including FSSAI, ISO 22000, and HACCP compliance for applicable products."
        }
      },
      {
        "@type": "Question",
        name: "Where does SHC Global Trade source its products from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basmati Rice is sourced from Punjab, Haryana, and Uttar Pradesh. Green Chillies come from Gujarat and Andhra Pradesh. Bananas are sourced from Maharashtra and Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        name: "Does SHC Global Trade ship internationally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we export to markets worldwide including the Middle East, Europe, USA, Canada, Australia, and Asian countries. We offer both sea freight (FCL) and air freight options."
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

        {/* Organization Schema */}
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
