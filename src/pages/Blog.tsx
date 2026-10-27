import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { organizationSchema, organizationReference } from "@/lib/geo-schema";
import AIReadableSummary from "@/components/AIReadableSummary";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "global-agri-outlook-2026-2027",
    title: "Global Agricultural Outlook 2026–27: Crop Positions, Trade Flows & Price Trends",
    excerpt: "Worldwide crop positions, exporting and importing countries, and price trends for 2026 and 2027 for Basmati rice, Cavendish bananas and green chillies.",
    author: "Kaushik Pathak",
    date: "2026-10-26",
    readTime: "8 min",
    category: "Market Outlook",
    image: "/image.jpeg"
  },
  {
    slug: "strong-el-nino-2026-27-crop-impact",
    title: "Strong El Niño 2026–27: What the Climate Outlook Means for Global Crop Supply",
    excerpt: "NOAA expects a strong-to-very-strong El Niño through January–March 2027. What it means for rice, banana and chilli crops worldwide — and how importers should plan.",
    author: "Kaushik Pathak",
    date: "2026-10-26",
    readTime: "7 min",
    category: "Climate & Markets",
    image: "/image.jpeg"
  },
  {
    slug: "geopolitics-agri-trade-october-2026",
    title: "Geopolitics & Agri Trade — October 2026 Briefing: Red Sea, Gulf Transit & Route Resilience",
    excerpt: "How the West Asia conflict, Iran tariff escalation and Red Sea disruption are reshaping agricultural trade — and which corridors remain stable for importers.",
    author: "Kaushik Pathak",
    date: "2026-10-26",
    readTime: "6 min",
    category: "Geopolitics",
    image: "/image.jpeg"
  },
  {
    slug: "basmati-rice-crop-position-2026-27",
    title: "Basmati Rice Crop Position 2026–27: Harvest, Exporters, Importers & Price Trends",
    excerpt: "India's expanded 2026-27 Basmati crop is arriving with robust yields. Harvest quality, exporting and importing countries, and the 2027 price outlook.",
    author: "Kaushik Pathak",
    date: "2026-10-26",
    readTime: "7 min",
    category: "Rice Export",
    image: "/image.jpeg"
  },
  {
    slug: "banana-green-chilli-market-2026-27",
    title: "Banana & Green Chilli World Market 2026–27: Exporters, Importers & Price Outlook",
    excerpt: "Global banana and green chilli crop positions: exporting and importing countries, current price levels, and the outlook into 2027.",
    author: "Kaushik Pathak",
    date: "2026-10-26",
    readTime: "7 min",
    category: "Market Insights",
    image: "/image.jpeg"
  }
];

// Enhanced Blog listing schema with GEO optimization
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://shcglobaltrade.co.in/blog#blog",
  name: "SHC Global Trade - Agricultural Export Insights",
  description: "Expert articles on Basmati rice grading, export documentation, Indian agriculture trends, and international trade from India's trusted APEDA-certified agricultural exporter.",
  url: "https://shcglobaltrade.co.in/blog",
  inLanguage: "en-US",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shcglobaltrade.co.in/blog"
  },
  about: [
    {
      "@type": "Thing",
      name: "Basmati Rice Export from India"
    },
    {
      "@type": "Thing",
      name: "Indian Agricultural Export Documentation"
    },
    {
      "@type": "Thing",
      name: "APEDA Certified Agricultural Exporter"
    },
    {
      "@type": "Thing",
      name: "1121 Basmati Rice Grading Standards"
    }
  ],
  publisher: organizationReference,
  blogPost: blogPosts.map(post => ({
    "@type": "BlogPosting",
    "@id": `https://shcglobaltrade.co.in/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.linkedin.com/in/kaushik-pathak-83945927/"
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://shcglobaltrade.co.in/blog/${post.slug}`,
    image: `https://shcglobaltrade.co.in${post.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shcglobaltrade.co.in/blog/${post.slug}`
    },
    publisher: organizationReference,
    about: [
      {
        "@type": "Thing",
        name: post.category === "Rice Export" 
          ? "Basmati Rice Export from India" 
          : post.category === "Export Guide" 
          ? "Indian Agricultural Export Documentation"
          : "Indian Agricultural Export Market"
      }
    ]
  }))
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Agricultural Export Blog | Basmati Rice, Export Docs, India Trade - SHC Global Trade</title>
        <meta
          name="description"
          content="Expert insights on Basmati rice grading, export documentation, APEDA certification, and Indian agricultural export opportunities. Learn from India's trusted exporter."
        />
        <meta
          name="keywords"
          content="basmati rice grading, export documentation india, APEDA registration, agricultural export, indian rice export, 1121 basmati quality, export certificate india"
        />
        <link rel="canonical" href="https://shcglobaltrade.co.in/blog" />
        
        <meta property="og:title" content="Agricultural Export Blog | SHC Global Trade" />
        <meta property="og:description" content="Expert insights on Basmati rice grading, export documentation, and Indian agricultural export opportunities." />
        <meta property="og:url" content="https://shcglobaltrade.co.in/blog" />
        <meta property="og:type" content="blog" />
        
        {/* Organization Schema - canonical across all pages */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Blog Listing Schema with enhanced GEO */}
        <script type="application/ld+json">
          {JSON.stringify(blogListingSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main className="pt-32 md:pt-40 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* AI-Readable Summary - Visible for GEO */}
            <AIReadableSummary>
              SHC Global Trade blog provides expert insights on Indian agricultural exports. 
              Topics covered: Basmati rice grading standards (AGMARK, export grades for 1121 and 1509 varieties), 
              export documentation (IEC, APEDA registration, phytosanitary certificates, Bill of Lading), 
              and Indian agricultural export market trends for 2025. Author: Kaushik Pathak, 
              founder of SHC Global Trade, APEDA-certified exporter (IEC: ABTPP7011L). 
              Country: India. Business Type: Agricultural Exporter.
            </AIReadableSummary>

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Export Knowledge Hub
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                What Should Buyers Know About Indian Agricultural Exports?
              </h1>
              <p className="text-muted-foreground text-lg">
                Expert articles on rice grading, export documentation, certifications, and market opportunities from India's trusted agricultural exporter.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;