import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | SHC Global Trade</title>
        <meta name="description" content="Disclaimer for SHC Global Trade - Important information about product variations and limitations of liability." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: December 21, 2025</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                The information provided by SHC GLOBAL TRADE ("we," "us," or "our") on www.shcglobaltrade.co.in (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. Product Disclaimer (Agricultural & Export Goods)
                </h2>
                <p className="mb-4">
                  Please be aware that our products (including but not limited to Basmati Rice, Green Chillies, Bananas, and Paper products) are commodities subject to natural variations.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Visual Representation:</strong> The images of products on our website are for illustrative purposes only. Actual products may differ slightly in color, texture, or size due to the organic nature of agricultural goods and harvest conditions.</li>
                  <li><strong>Quality Standards:</strong> While we strictly adhere to agreed-upon export quality standards (such as APEDA guidelines), specific crop parameters may vary slightly from batch to batch.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. External Links Disclaimer
                </h2>
                <p className="mb-4">
                  The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
                <ul className="list-disc pl-6">
                  <li>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Professional Advice Disclaimer
                </h2>
                <p className="mb-4">
                  The information contained on this Site (such as blog posts about export trends or market updates) is for general information purposes only and does not constitute professional financial or legal advice.
                </p>
                <ul className="list-disc pl-6">
                  <li>Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial or legal advice.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Limitation of Liability
                </h2>
                <p>
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  5. Contact Us
                </h2>
                <p className="mb-4">
                  If you require any more information or have any questions about our site's disclaimer, please feel free to contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Entity:</strong> SHC GLOBAL TRADE</li>
                  <li><strong>Contact Person:</strong> Kaushik Pathak</li>
                  <li><strong>Address:</strong> Surat, Gujarat, India</li>
                  <li><strong>Website:</strong> www.shcglobaltrade.co.in</li>
                </ul>
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
