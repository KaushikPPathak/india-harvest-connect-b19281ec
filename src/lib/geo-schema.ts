/**
 * GEO (Generative Engine Optimization) Schema Utilities
 * Centralized structured data for AI search engines like ChatGPT, Perplexity, and Google SGE
 */

// Canonical Organization Schema - used across all pages
export const organizationSchema = {
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
    },
    {
      "@type": "PropertyValue",
      name: "Business Type",
      value: "Agricultural Exporter"
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
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "IEC License",
      credentialCategory: "Import Export Code",
      recognizedBy: {
        "@type": "Organization",
        name: "Directorate General of Foreign Trade"
      }
    }
  ]
};

// Organization reference for use in Product schemas
export const organizationReference = {
  "@type": "Organization",
  "@id": "https://shcglobaltrade.co.in/#organization"
};

// Helper to create Product schema with Organization reference
export function createProductSchema(product: {
  id: string;
  name: string;
  description: string;
  image: string;
  hsCode: string;
  countryOfOrigin?: string;
  additionalProperties?: Array<{ name: string; value: string }>;
  certifications?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://shcglobaltrade.co.in/#${product.id}`,
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "SHC Global Trade"
    },
    manufacturer: organizationReference,
    countryOfOrigin: {
      "@type": "Country",
      name: product.countryOfOrigin || "India"
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "HS Code", value: product.hsCode },
      ...(product.additionalProperties?.map(prop => ({
        "@type": "PropertyValue",
        name: prop.name,
        value: prop.value
      })) || []),
      ...(product.certifications ? [{
        "@type": "PropertyValue",
        name: "Certifications",
        value: product.certifications.join(", ")
      }] : [])
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: organizationReference
    }
  };
}

// Helper to create Article schema with Organization publisher reference
export function createArticleSchema(article: {
  id: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  aboutTopics?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${article.url}#article`,
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: "Kaushik Pathak",
      url: "https://www.linkedin.com/in/kaushik-pathak-83945927/"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://shcglobaltrade.co.in/#organization",
      name: "SHC Global Trade",
      logo: {
        "@type": "ImageObject",
        url: "https://shcglobaltrade.co.in/logo.jpeg"
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    },
    ...(article.aboutTopics && {
      about: article.aboutTopics.map(topic => ({
        "@type": "Thing",
        name: topic
      }))
    })
  };
}

// Business trust identifiers for machine readability
export const businessIdentifiers = {
  legalName: "SHC Global Trade",
  gst: "24ABTPP7011L1Z9",
  iec: "ABTPP7011L",
  apeda: "RCMC/APEDA/05968/2023-2024",
  duns: "75-605-1507",
  country: "India",
  businessType: "Agricultural Exporter"
};
