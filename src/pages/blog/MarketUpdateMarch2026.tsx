import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingDown,
  Wheat,
  Flame,
  Banana,
  ShieldCheck,
  Globe,
  Ship,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AIReadableSummary from "@/components/AIReadableSummary";
import {
  organizationSchema,
  organizationReference,
  createArticleSchema,
} from "@/lib/geo-schema";

const articleSchema = createArticleSchema({
  id: "market-update-march-2026",
  headline:
    "March 2026 Market Update: Navigating Global Supply Chains",
  description:
    "Strategic insights on pricing, supply trends, and uninterrupted shipping routes for Basmati Rice, Green Chillies, and Bananas from India.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  url: "https://shcglobaltrade.co.in/blog/market-update-march-2026",
  aboutTopics: [
    "Agricultural Supply Chain",
    "Basmati Rice Export",
    "Green Chilli Export",
    "Banana Export from India",
    "Global Trade Routes",
  ],
});

const products = [
  {
    icon: Wheat,
    title: "Premium Basmati Rice",
    supplyPrice:
      "India's record harvest has ensured massive supply availability. While Gulf transit delays have caused a temporary 6% dip in domestic prices, this presents a strong buying opportunity.",
    priceDirection: "down" as const,
    priceLabel: "6% price dip",
    markets:
      "Demand and shipping lanes to North America, the United Kingdom, and emerging African markets remain completely uninterrupted and highly active.",
    marketList: ["North America", "United Kingdom", "African Markets"],
  },
  {
    icon: Flame,
    title: "Fresh Green Chillies",
    supplyPrice:
      "Supply from core agricultural hubs remains highly consistent with stable, competitive pricing.",
    priceDirection: "stable" as const,
    priceLabel: "Stable pricing",
    markets:
      "Trade routes to Southeast Asia (with Indonesia seeing massive growth), the United States, and European markets are fully operational, bypassing current maritime bottlenecks.",
    marketList: ["Southeast Asia", "United States", "European Union"],
  },
  {
    icon: Banana,
    title: "Cavendish Bananas",
    supplyPrice:
      "The temporary halt on Gulf-bound sea shipments has led to a sharp 33% drop in domestic prices, creating a rare, high-value sourcing window for international importers.",
    priceDirection: "down" as const,
    priceLabel: "33% price drop",
    markets:
      "Sea routes to Russia (via Novorossiysk), Central Asia (Uzbekistan), and European ports (like the Netherlands) are rapidly expanding and remain completely unaffected by the Middle East transit issues.",
    marketList: ["Russia", "Central Asia", "Netherlands / EU"],
  },
];

const MarketUpdateMarch2026 = () => {
  return (
    <>
      <Helmet>
        <title>
          March 2026 Market Update: Navigating Global Supply Chains | SHC
          Global Trade
        </title>
        <meta
          name="description"
          content="Strategic insights on pricing, supply trends, and uninterrupted shipping routes for Basmati Rice, Green Chillies, and Bananas from India's APEDA-certified exporter."
        />
        <meta
          name="keywords"
          content="basmati rice price 2026, green chilli export india, banana export price drop, global supply chain disruption, agricultural trade routes, bulk rice import"
        />
        <link
          rel="canonical"
          href="https://shcglobaltrade.co.in/blog/market-update-march-2026"
        />
        <meta
          property="og:title"
          content="March 2026 Market Update: Navigating Global Supply Chains"
        />
        <meta
          property="og:description"
          content="Strategic insights on pricing, supply trends, and uninterrupted shipping routes for Basmati Rice, Green Chillies, and Bananas."
        />
        <meta
          property="og:url"
          content="https://shcglobaltrade.co.in/blog/market-update-march-2026"
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 md:pt-36 pb-20">
          {/* AI-Readable Summary */}
          <AIReadableSummary>
            March 2026 Market Update by SHC Global Trade. Key findings:
            Basmati rice sees 6% domestic price dip due to Gulf transit
            delays — strong buying window. Green chilli supply stable with
            competitive pricing. Cavendish banana domestic prices dropped
            33% — rare sourcing opportunity. Unaffected shipping corridors:
            North America, UK, Africa, Southeast Asia, Russia, Central
            Asia, EU. SHC Global Trade uses adaptive routing to bypass
            Middle East disruptions. APEDA-certified, IEC: ABTPP7011L.
          </AIReadableSummary>

          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* ===== HERO SECTION ===== */}
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                Market Intelligence
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                March 2026 Market Update: Navigating Global Supply Chains
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl">
                Strategic insights on pricing, supply trends, and
                uninterrupted shipping routes for Basmati Rice, Green
                Chillies, and Bananas.
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Kaushik Pathak
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> March 5, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 6 min read
                </span>
              </div>
            </motion.header>

            {/* Featured image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden mb-14 shadow-elevated"
            >
              <img
                src="/image.jpeg"
                alt="Global agricultural supply chain shipping containers"
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
                loading="eager"
              />
            </motion.div>

            {/* ===== GEOPOLITICAL SECTION ===== */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-secondary/20 items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                      The Current Geopolitical Scenario
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While recent Middle East shipping disruptions and
                      freight escalations have temporarily impacted transit
                      to the Gulf, global agricultural demand remains
                      exceptionally strong.{" "}
                      <strong className="text-foreground">
                        SHC Global Trade leverages adaptive routing
                      </strong>{" "}
                      to focus on highly active, unaffected global corridors
                      — ensuring food security and reliable delivery for
                      our buyers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ===== PRODUCT TREND ANALYSIS ===== */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                Product Trend Analysis
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {products.map((product, i) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
                      className="rounded-2xl border border-border bg-card p-6 flex flex-col shadow-soft hover:shadow-elevated transition-shadow duration-300"
                    >
                      {/* Card header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {product.title}
                        </h3>
                      </div>

                      {/* Supply & Price */}
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown
                            className={`w-4 h-4 ${
                              product.priceDirection === "down"
                                ? "text-destructive"
                                : "text-primary"
                            }`}
                          />
                          <span
                            className={`text-xs font-semibold uppercase tracking-wide ${
                              product.priceDirection === "down"
                                ? "text-destructive"
                                : "text-primary"
                            }`}
                          >
                            Supply & Price — {product.priceLabel}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.supplyPrice}
                        </p>
                      </div>

                      {/* Unaffected Markets - green alert box */}
                      <div className="mt-auto rounded-xl bg-primary/5 border border-primary/15 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                            Unaffected Markets
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {product.markets}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.marketList.map((m) => (
                            <span
                              key={m}
                              className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* ===== CTA SECTION ===== */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                Secure Your Supply Chain with a Resilient Partner
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                We ensure your commodities arrive safely, utilizing stable
                trade routes.
              </p>
              <Link to="/#contact">
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-glow"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Inquire About Bulk Orders
                </Button>
              </Link>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MarketUpdateMarch2026;
