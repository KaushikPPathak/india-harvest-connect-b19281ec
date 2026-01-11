import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
    slug: "basmati-rice-grading-system-india",
    title: "Complete Guide to Basmati Rice Grading System in India",
    excerpt: "Understanding the AGMARK and export grading standards for 1121 and 1509 Basmati rice varieties. Learn about grain length, broken percentage, moisture content, and quality parameters.",
    author: "Kaushik Pathak",
    date: "2025-01-10",
    readTime: "8 min",
    category: "Rice Export",
    image: "/image.jpeg"
  },
  {
    slug: "export-documentation-india-agricultural-products",
    title: "Essential Export Documentation for Indian Agricultural Products",
    excerpt: "A comprehensive guide to IEC, APEDA registration, phytosanitary certificates, Bill of Lading, and customs documentation required for exporting rice, vegetables, and fruits from India.",
    author: "Kaushik Pathak",
    date: "2025-01-05",
    readTime: "10 min",
    category: "Export Guide",
    image: "/image.jpeg"
  },
  {
    slug: "indian-agriculture-export-opportunities-2025",
    title: "Indian Agriculture Export Opportunities in 2025",
    excerpt: "Explore the growing demand for Indian Basmati rice, green chillies, and bananas in global markets. Key trends, target countries, and how to capitalize on export opportunities.",
    author: "Kaushik Pathak",
    date: "2024-12-28",
    readTime: "7 min",
    category: "Market Insights",
    image: "/image.jpeg"
  }
];

// Blog listing schema
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://shcglobaltrade.co.in/blog#blog",
  name: "SHC Global Trade - Agricultural Export Insights",
  description: "Expert articles on Basmati rice grading, export documentation, Indian agriculture trends, and international trade from India's trusted agricultural exporter.",
  url: "https://shcglobaltrade.co.in/blog",
  publisher: {
    "@type": "Organization",
    name: "SHC Global Trade",
    url: "https://shcglobaltrade.co.in"
  },
  blogPost: blogPosts.map(post => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author
    },
    datePublished: post.date,
    url: `https://shcglobaltrade.co.in/blog/${post.slug}`
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
        
        <script type="application/ld+json">
          {JSON.stringify(blogListingSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main className="pt-32 md:pt-40 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* AI-Readable Summary */}
            <div className="ai-summary sr-only" aria-hidden="false">
              <p>
                SHC Global Trade blog covers Basmati rice grading standards (AGMARK, export grades), 
                export documentation requirements (IEC, APEDA, phytosanitary certificates), 
                and Indian agricultural export market trends for 2025. 
                Written by Kaushik Pathak, founder of SHC Global Trade, APEDA-certified exporter.
              </p>
            </div>

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
