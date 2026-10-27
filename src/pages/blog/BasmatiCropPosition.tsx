import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wheat,
  Globe,
  Ship,
  ShieldCheck,
  Calendar,
  Clock,
  User,
  TrendingDown,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createArticleSchema } from "@/lib/geo-schema";

const articleSchema = createArticleSchema({
  id: "basmati-rice-crop-position-2026-27",
  headline:
    "Basmati Rice Crop Position 2026–27: Harvest, Exporters, Importers & Price Trends",
  description:
    "India's expanded 2026-27 Basmati crop is arriving October–November with robust yields. Harvest quality, exporting and importing countries, and 2027 price outlook.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  url: "https://shcglobaltrade.co.in/blog/basmati-rice-crop-position-2026-27",
  aboutTopics: [
    "Basmati Rice Crop 2026-27",
    "Basmati Rice Exporters",
    "Basmati Rice Importers",
    "1121 Basmati Price",
    "Basmati Price Forecast 2027",
  ],
});

const facts = [
  { label: "New-crop arrivals", value: "Oct–Nov 2026" },
  { label: "1121 steam FOB", value: "≈ USD 505–545 / t" },
  { label: "1121 creamy sella", value: "≈ USD 545–580 / t" },
  { label: "Early-crop moisture", value: "14.5%+ — needs drying" },
];

const BasmatiCropPosition = () => {
  return (
    <>
      <Helmet>
        <title>
          Basmati Rice Crop Position 2026–27: Harvest, Exporters, Importers &
          Prices | SHC Global Trade
        </title>
        <meta
          name="description"
          content="India's 2026-27 Basmati harvest is arriving with robust yields. Crop position, exporting and importing countries, current FOB prices and the 2027 outlook."
        />
        <meta
          name="keywords"
          content="basmati crop 2026 27, 1121 basmati price, basmati exporters importers, India basmati harvest, basmati price forecast 2027, paddy arrivals Haryana Punjab"
        />
        <link
          rel="canonical"
          href="https://shcglobaltrade.co.in/blog/basmati-rice-crop-position-2026-27"
        />
        <meta
          property="og:title"
          content="Basmati Rice Crop Position 2026–27: Harvest, Exporters, Importers & Prices"
        />
        <meta
          property="og:description"
          content="Crop position, trade flows, current FOB prices and the 2027 outlook for Basmati rice."
        />
        <meta
          property="og:url"
          content="https://shcglobaltrade.co.in/blog/basmati-rice-crop-position-2026-27"
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
            Basmati Rice Crop Position 2026–27, by SHC Global Trade (October
            26, 2026). India's 2026-27 Basmati acreage is expanded and the
            kharif harvest is arriving October–November 2026 with robust
            yields in Haryana and Punjab; early-harvest moisture runs 14.5%+
            and requires proper drying before shipment. No Minimum Export
            Price applies. India is the world's dominant Basmati exporter,
            ahead of Pakistan, and remains cost-competitive in Saudi Arabia
            and the UAE. Top importers: Iran (about 1 million tonnes in a
            normal year, down ~62% in Apr–Jun 2026 on tariff pressure), Saudi
            Arabia, UAE, Iraq, Yemen, Kuwait, Qatar, plus the EU, UK and US.
            Current prices: 1121 steam ≈ USD 505–545/tonne FOB; 1121 creamy
            sella ≈ USD 545–580/tonne; European benchmarks stable at
            elevated levels (1121 steam ≈ EUR 0.70/kg FOB). Outlook 2027: a
            larger exportable surplus points to gradually softening prices;
            swing factors are Iranian demand and ocean freight. Author:
            Kaushik Pathak, APEDA-certified exporter, IEC ABTPP7011L, India.
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
                Crop Report
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Basmati Rice Crop Position 2026–27: Harvest, Exporters,
                Importers & Price Trends
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                The new Indian crop is landing. Here's the full picture —
                acreage, quality, who buys it, what it costs today, and where
                prices head in 2027.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Kaushik Pathak
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> October 26, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 7 min read
                </span>
              </div>
            </motion.header>

            {/* Key facts strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
            >
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {f.label}
                  </p>
                  <p className="font-display font-bold text-foreground">
                    {f.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Harvest section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-secondary/20 items-center justify-center">
                    <Wheat className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                      The 2026–27 Indian harvest
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      India's Basmati acreage for 2026–27 is up, and the
                      kharif harvest now moving through Haryana and Punjab
                      shows robust yields. With no Minimum Export Price in
                      force, the exportable surplus is set to expand
                      significantly as fresh-crop arrivals build through
                      October–November — a structural shift for world Basmati
                      buyers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Quality note:</strong>{" "}
                      fresh-harvest paddy is arriving at 14.5%+ moisture.
                      Buyers should specify age-curing, drying and milling
                      parameters — moisture, elongation ratio and broken
                      percentage — in contracts, and favour exporters with
                      in-house processing control.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Trade flows */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Who exports, who imports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <Ship className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground">
                      Exporters
                    </h3>
                  </div>
                  <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-foreground">India</strong> — the
                      dominant origin (roughly 60%+ of world Basmati trade);
                      remains cost-competitive against Pakistan in Saudi
                      Arabia and the UAE.
                    </li>
                    <li>
                      <strong className="text-foreground">Pakistan</strong> —
                      the second origin, competing mainly on Super Kernel and
                      Gulf/EU supermarket shelves.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground">
                      Importers
                    </h3>
                  </div>
                  <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-foreground">Iran</strong> — up
                      to ~1 million tonnes in a normal year, but purchases
                      collapsed ~62% in April–June 2026 under tariff
                      pressure.
                    </li>
                    <li>
                      <strong className="text-foreground">Gulf:</strong>{" "}
                      Saudi Arabia, UAE, Iraq, Yemen, Kuwait, Qatar.
                    </li>
                    <li>
                      <strong className="text-foreground">West:</strong> EU,
                      UK and USA — premium aged and specialty grades.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Prices & outlook */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16 space-y-6"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Prices now, prices in 2027
              </h2>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Where the market stands (late October 2026)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  1121 steam is indicated around USD 505–545 per tonne FOB,
                  with 1121 creamy sella near USD 545–580 per tonne. In
                  European terms, 1121 steam holds near EUR 0.70/kg FOB —
                  stable at elevated levels rather than surging, as exporters
                  and mills compete for a limited paddy pool ahead of full
                  new-crop arrival.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-foreground">
                    The 2027 outlook: softening, gradually
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A larger crop means a larger exportable surplus, and the
                  traditional mechanics of the trade point toward gradually
                  softening export prices through the first half of 2027 as
                  new-crop supply builds. The upside risks are an Iranian
                  demand recovery and any fresh freight shock. Buyers fixing
                  fresh-crop contracts in Q4 2026 are well placed; waiting
                  into H1 2027 favours them on price but risks crop and
                  weather variables.
                </p>
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
                Buy Fresh-Crop Basmati at Season Prices
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                1121, 1509 and Traditional Basmati — APEDA-certified, with
                mill-level quality control from paddy to container.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl" className="shadow-glow">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Request a Season Quote
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

export default BasmatiCropPosition;
