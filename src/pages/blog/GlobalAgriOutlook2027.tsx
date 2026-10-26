import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wheat,
  Banana,
  Flame,
  TrendingUp,
  TrendingDown,
  Globe,
  Ship,
  ShieldCheck,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createArticleSchema } from "@/lib/geo-schema";

const articleSchema = createArticleSchema({
  id: "global-agri-outlook-2026-2027",
  headline:
    "Global Agricultural Outlook 2026–27: Crop Positions, Trade Flows & Price Trends",
  description:
    "Worldwide crop positions, exporting and importing countries, and price trends for 2026 and 2027 for Basmati rice, Cavendish bananas and green chillies.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  url: "https://shcglobaltrade.co.in/blog/global-agri-outlook-2026-2027",
  aboutTopics: [
    "Global Crop Position 2026-27",
    "Basmati Rice Export",
    "Banana Export from India",
    "Green Chilli Export",
    "Agricultural Price Trends 2027",
  ],
});

const overview = [
  {
    icon: Wheat,
    title: "Rice (Global)",
    text: "World rice production in 2026/27 is tracking about 2% below last season while consumption is heading to a record near 541 million tonnes. USDA puts global output around 537.8 million tonnes (milled), roughly 5 million tonnes below 2025/26. Stocks remain historically high, which cushions prices, but the balance is tightening at the margin.",
  },
  {
    icon: Banana,
    title: "Bananas (Global)",
    text: "Latin American availability has tightened — production declines in Costa Rica and Colombia — while Ecuador stays the volume anchor. India's export quotes are recovering, with heat-stress-driven supply tightness across key producing states keeping prices range-bound near USD 460–475 per tonne.",
  },
  {
    icon: Flame,
    title: "Chilli (India-led)",
    text: "Guntur APMC dry chilli has traded near the top of its two-year range (around ₹27,000–27,500 per quintal) on tight old-crop stocks. Fresh new-crop arrivals are just beginning; green chilli remains firm until volumes normalize in the new season.",
  },
];

const tradeTable = [
  {
    product: "Basmati Rice (1121 steam)",
    exporters: "India, Pakistan",
    importers: "Iran, Saudi Arabia, UAE, Iraq, Yemen, Kuwait, EU, UK, USA",
    priceNow: "≈ USD 505–545 / t FOB",
    trend2027: "Softening — larger Indian crop",
    up: false,
  },
  {
    product: "Cavendish Banana",
    exporters: "Ecuador, India, Philippines, Colombia, Guatemala",
    importers: "USA, EU, Russia, China, Middle East",
    priceNow: "India ≈ USD 475 / MT; Ecuador ≈ USD 620 / MT",
    trend2027: "Range-bound; India gaining share",
    up: true,
  },
  {
    product: "Green / Dried Chilli",
    exporters: "India (Andhra, Karnataka, Maharashtra, Gujarat)",
    importers: "Bangladesh, UAE, Saudi Arabia, UK, USA, China",
    priceNow: "Dry ≈ ₹27,000 / quintal; green ₹38–55 / kg",
    trend2027: "Firm till new crop, easing after",
    up: true,
  },
];

const GlobalAgriOutlook2027 = () => {
  return (
    <>
      <Helmet>
        <title>
          Global Agricultural Outlook 2026–27: Crop Positions & Price Trends |
          SHC Global Trade
        </title>
        <meta
          name="description"
          content="Worldwide crop positions, exporting and importing countries, and price trends for 2026–2027 for Basmati rice, Cavendish bananas and green chillies — updated October 2026."
        />
        <meta
          name="keywords"
          content="global crop position 2026, basmati rice price 2027, banana export price 2026, green chilli market, agricultural trade 2027, rice production forecast"
        />
        <link
          rel="canonical"
          href="https://shcglobaltrade.co.in/blog/global-agri-outlook-2026-2027"
        />
        <meta
          property="og:title"
          content="Global Agricultural Outlook 2026–27: Crop Positions, Trade Flows & Price Trends"
        />
        <meta
          property="og:description"
          content="Crop positions, exporters and importers, and price trends for Basmati rice, bananas and green chillies."
        />
        <meta
          property="og:url"
          content="https://shcglobaltrade.co.in/blog/global-agri-outlook-2026-2027"
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
          <AIReadableSummary>
            Global Agricultural Outlook 2026–27 by SHC Global Trade (October
            26, 2026). World rice production 2026/27 down about 2% while
            consumption reaches a record near 541 million tonnes. Basmati:
            India's expanded 2026-27 crop arrives October–November; 1121 steam
            near USD 505–545/tonne FOB, prices expected to soften in 2027.
            Bananas: India ~USD 475/MT FOB, Ecuador ~USD 620/MT; Latin American
            supply tightening. Green chilli: Guntur dry chilli near ₹27,000 per
            quintal, firm till new crop. Author: Kaushik Pathak, APEDA-certified
            exporter, IEC ABTPP7011L, India.
          </AIReadableSummary>

          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

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
                Global Agricultural Outlook 2026–27: Crop Positions, Trade
                Flows & Price Trends
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Where the world's crops stand today, who ships and who buys,
                and what prices are likely to do through 2027.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Kaushik Pathak
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> October 26, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 8 min read
                </span>
              </div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden mb-14 shadow-elevated"
            >
              <img
                src="/image.jpeg"
                alt="Global agricultural trade outlook 2026-27"
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
                loading="eager"
              />
            </motion.div>

            {/* Global crop position cards */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Global Crop Position, October 2026
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {overview.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                      className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Trade flow table */}
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
                <table className="w-full text-sm min-w-[720px]">
                  <thead>
                    <tr className="bg-muted/60 text-left">
                      <th className="px-4 py-3 font-semibold text-foreground">Commodity</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Top exporters</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Key importers</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Price now</th>
                      <th className="px-4 py-3 font-semibold text-foreground">2027 direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradeTable.map((row) => (
                      <tr
                        key={row.product}
                        className="border-t border-border text-muted-foreground"
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{row.product}</td>
                        <td className="px-4 py-3">{row.exporters}</td>
                        <td className="px-4 py-3">{row.importers}</td>
                        <td className="px-4 py-3">{row.priceNow}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1.5">
                            {row.up ? (
                              <TrendingUp className="w-4 h-4 text-destructive" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-primary" />
                            )}
                            {row.trend2027}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* 2027 outlook */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-16 space-y-6"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Price Trends into 2027
              </h2>
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Basmati rice — from firm to softer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prices have held at elevated levels through late 2026
                  (1121 steam around USD 505–545/tonne FOB), supported by
                  steady Gulf demand and tight paddy. With India's 2026–27
                  basmati crop expanded and fresh arrivals building from
                  October–November, the exportable surplus grows — pointing to
                  gradually softening prices through the first half of 2027.
                  The swing factors are Iranian import demand and ocean
                  freight.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Bananas — range-bound with India on the rise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  India's export prices are recovering toward USD 460–475 per
                  tonne and are projected to stay in the USD 462–522 band near
                  term, while heat-stress supply tightness keeps values
                  supported. With Costa Rica and Colombia producing less,
                  Indian Cavendish (G9, Grand Naine) is well positioned to
                  gain share in Gulf, Russia and Central Asia corridors
                  through 2027.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Chillies — firm until the new crop lands
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tight old-crop stocks have pushed Guntur dry chilli near
                  record highs. New-crop arrivals should ease prices from
                  early 2027, but a strong El Niño winter makes the rabi crop
                  the variable to watch. Green chilli remains a
                  weather-sensitive, air-freight-led trade for premium
                  markets.
                </p>
              </div>
            </motion.section>

            {/* Buyer guidance */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-16 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
                  <Ship className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                    How buyers should plan 2026–27 procurement
                  </h2>
                  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    <li>
                      Basmati: contract fresh-crop (Q4 2026) volumes early to
                      lock pre-softening prices; phase later shipments into
                      H1 2027.
                    </li>
                    <li>
                      Bananas: secure quarterly programmes from Indian origins
                      while Latin supply is tightening.
                    </li>
                    <li>
                      Chillies: cover near-term needs before new-crop
                      uncertainty clears; monitor the rabi season.
                    </li>
                    <li>
                      Everywhere: keep routing flexibility — geopolitical and
                      weather shocks are both live in this cycle.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
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
                Position Your 2027 Supply Early
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                Get crop-position-informed quotations on Basmati rice,
                bananas and green chillies from an APEDA-certified Indian
                exporter.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl" className="shadow-glow">
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

export default GlobalAgriOutlook2027;
