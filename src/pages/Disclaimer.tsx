import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | SHC Global Trade</title>
        <meta name="description" content="Disclaimer for SHC Global Trade - Important information about agricultural product variations and limitations of liability." />
        <link rel="canonical" href="https://shcglobaltrade.co.in/disclaimer" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2026</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                The information provided by SHC GLOBAL TRADE on www.shcglobaltrade.co.in is for general informational purposes only.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. Product Disclaimer (Agricultural Goods)
                </h2>
                <p>
                  Please be aware that our products (Basmati Rice, Green Chillies, Bananas, etc.) are commodities subject to natural variations. Actual products may differ slightly in color or size due to harvest conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. Pricing & Availability
                </h2>
                <p>
                  Prices and availability of products listed on the Site are subject to change without notice. Due to the volatile nature of the agricultural market and currency exchange rates (USD/INR), the final price is confirmed only via a written Proforma Invoice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Professional Advice Disclaimer
                </h2>
                <p>
                  Any nutritional data or health benefits mentioned on the Site regarding our products are for general informational purposes only and do not constitute medical advice. Furthermore, market updates on this site do not constitute financial advice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Limitation of Liability
                </h2>
                <p>
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site. Your use of the site is solely at your own risk.
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
