import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  Ship,
  Globe,
  ShieldCheck,
  Calendar,
  Clock,
  User,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AIReadableSummary from "@/components/AIReadableSummary";
import { organizationSchema, createArticleSchema } from "@/lib/geo-schema";

const articleSchema = createArticleSchema({
  id: "geopolitics-agri-trade-october-2026",
  headline:
    "Geopolitics & Agri Trade — October 2026 Briefing: Red Sea, Gulf Transit & Route Resilience",
  description:
    "How the West Asia conflict, Iran tariff escalation and Red Sea disruption are reshaping agricultural trade — and which corridors remain stable for importers.",
  image: "https://shcglobaltrade.co.in/image.jpeg",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  url: "https://shcglobaltrade.co.in/blog/geopolitics-agri-trade-october-2026",
  aboutTopics: [
    "Geopolitics and Agricultural Trade 2026",
    "Red Sea Shipping Disruption",
    "Basmati Rice Export to Gulf",
    "Iran Tariffs",
    "Shipping Route Resilience",
  ],
});

const corridors = [
  "Russia (via Novorossiysk)",
  "Central Asia (Uzbekistan)",
  "European ports (Netherlands)",
  "North America",
  "United Kingdom",
  "Southeast Asia & Africa",
];

const GeopoliticsOctober2026 = () => {
  return (
    <>
      <Helmet>
        <title>
          Geopolitics & Agri Trade — October 2026 Briefing: Red Sea, Gulf
          Transit & Route Resilience | SHC Global Trade
        </title>
        <meta
          name="description"
          content="October 2026 briefing: how the West Asia conflict, Iran tariff escalation and Red Sea disruption are reshaping agricultural trade, and which corridors remain stable."
        />
        <meta
          name="keywords"
          content="Red Sea shipping 2026, Iran basmati export, Gulf rice import, geopolitical trade risk, agriculture shipping routes, rice export disruption 2026"
        />
        <link
          rel="canonical"
          href="https://shcglobaltrade.co.in/blog/geopolitics-agri-trade-october-2026"
        />
        <meta
          property="og:title"
          content="Geopolitics & Agri Trade — October 2026 Briefing"
        />
        <meta
          property="og:description"
          content="How the West Asia conflict and Iran tariffs are reshaping agricultural trade — and which corridors remain stable."
        />
        <meta
          property="og:url"
          content="https://shcglobaltrade.co.in/blog/geopolitics-agri-trade-october-2026"
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
            Geopolitics and agricultural trade briefing, October 26, 2026, by
            SHC Global Trade. Key facts: the West Asia conflict and
            Strait of Hormuz crisis stranded nearly 0.5 million tonnes of
            Indian rice at Mundra and Kandla ports in July 2026, including
            about 0.3 million tonnes destined for Iran. US tariff warnings on
            countries trading with Iran hit Iranian demand: India's basmati
            exports to Iran fell about 62% year-on-year in April–June 2026 to
            roughly 120,847 tonnes. India's rice exports rose only 1.7% in
            April–July 2026 due to higher freight and insurance costs. Stable,
            unaffected corridors: Russia (via Novorossiysk), Central Asia
            (Uzbekistan), European ports (Netherlands), North America, UK,
            Southeast Asia and Africa. The Gulf (Saudi Arabia, Iraq, UAE,
            Iran) remains the largest basmati destination. SHC Global Trade,
            APEDA-certified, IEC ABTPP7011L, India.
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
                Geopolitical Briefing
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                Geopolitics & Agri Trade — October 2026 Briefing: Red Sea,
                Gulf Transit & Route Resilience
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                How the West Asia conflict, tariff escalation and shipping
                disruption are reshaping agricultural trade — and where
                buyers can still ship with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" /> Kaushik Pathak
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> October 26, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 6 min read
                </span>
              </div>
            </motion.header>

            {/* Crisis box */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-destructive/10 items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                      What's disrupted
                    </h2>
                    <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-foreground">Gulf transit:</strong>{" "}
                        the West Asia conflict and Strait of Hormuz tension
                        stranded nearly 0.5 million tonnes of Indian rice at
                        the Mundra and Kandla container yards in July 2026 —
                        roughly 0.3 million tonnes of it Basmati originally
                        bound for Iran.
                      </li>
                      <li>
                        <strong className="text-foreground">Iran demand:</strong>{" "}
                        US tariff warnings on countries trading with Iran have
                        chilled Iranian buying. India's Basmati exports to
                        Iran fell about 62% year-on-year in April–June 2026,
                        to roughly 120,847 tonnes.
                      </li>
                      <li>
                        <strong className="text-foreground">Freight & insurance:</strong>{" "}
                        elevated ocean freight and war-risk premiums pushed
                        India's overall rice export growth to just 1.7% in
                        April–July 2026 despite strong world demand.
                      </li>
                      <li>
                        <strong className="text-foreground">The stakes:</strong>{" "}
                        the Gulf — Saudi Arabia, Iraq, the UAE and Iran —
                        remains the largest destination for Indian Basmati, so
                        every shipping-day lost is felt across the trade.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Stable corridors */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-primary/10 items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                      What's unaffected — the resilient corridors
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Demand and shipping lanes away from the Gulf remain
                      fully operational. SHC Global Trade keeps buyer
                      programmes moving through these corridors:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {corridors.map((c) => (
                        <span
                          key={c}
                          className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Market read-through */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-16 space-y-6"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                The market read-through
              </h2>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Prices stay supported by risk, not shortage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Basmati benchmarks have held firm at elevated levels through
                  October 2026 — not because rice is scarce (India's new crop
                  is abundant), but because the market prices in transit risk.
                  Buyers with flexible routings are consistently getting
                  better economics than those locked into single-corridor
                  programmes.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Diversification is now a procurement basic
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The events of 2026 settled a debate: a single Gulf-dependent
                  supply line is fragile. Importers are building multi-origin,
                  multi-corridor programmes — Indian Basmati via western Indian
                  ports for non-Gulf destinations, bananas from India for
                  Russia/Central Asia/EU lanes, and phased shipments to keep
                  stock positions safe.
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
                Secure Your Supply Chain with a Resilient Partner
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                We route around disruption — your Basmati rice, bananas and
                chillies arrive on stable, actively managed corridors.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl" className="shadow-glow">
                  <Ship className="w-5 h-5 mr-2" />
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

export default GeopoliticsOctober2026;
