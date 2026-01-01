import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | SHC Global Trade</title>
        <meta name="description" content="Terms and Conditions for SHC Global Trade - Premium agricultural product exports from India." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2026</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                Welcome to SHC GLOBAL TRADE. These Terms and Conditions ("Terms") govern your use of our website www.shcglobaltrade.co.in and the purchase of products from SHC GLOBAL TRADE.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. General Information
                </h2>
                <p>
                  SHC GLOBAL TRADE is an export business registered in India (Surat, Gujarat), engaged in the global trade of agricultural products and paper products.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. Product Information & Disclaimer
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Agricultural Variance:</strong> Agricultural products are subject to natural variations in color, size, and texture. Images on the website are for illustrative purposes only.</li>
                  <li><strong>Accuracy:</strong> We do not warrant that product descriptions are error-free. We reserve the right to correct any errors without prior notice.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Pricing and Payment
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Dynamic Pricing:</strong> Prices displayed on the website or provided via quotes are subject to change without notice due to market fluctuations in commodity prices and currency exchange rates.</li>
                  <li><strong>Final Price:</strong> The final price and payment terms will be confirmed only upon the issuance of a formal Proforma Invoice.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Shipping and Inspection
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Incoterms:</strong> All international shipments are governed by the specific Incoterms (e.g., FOB, CIF) agreed upon in the Sales Contract.</li>
                  <li><strong>Pre-Shipment Inspection:</strong> We encourage buyers to appoint a third-party inspection agency (such as SGS or Bureau Veritas) at the time of loading in India. Once the Goods are inspected and the Clean Report of Findings (CRF) is issued, SHC GLOBAL TRADE is deemed to have fulfilled its quality obligations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  5. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable law, SHC GLOBAL TRADE shall not be liable for any indirect, incidental, or consequential damages. Notwithstanding any other provision, the total liability of SHC GLOBAL TRADE for any claim arising out of this agreement shall not exceed the total price paid by the buyer for the specific shipment that gave rise to the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  6. Governing Law and Dispute Resolution
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Jurisdiction:</strong> These Terms shall be governed by the laws of India.</li>
                  <li><strong>Arbitration:</strong> In the event of any dispute arising out of or in connection with these Terms, the parties shall first attempt to resolve the matter amicably. If unresolved, the dispute shall be referred to arbitration in Surat, Gujarat, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration shall be English.</li>
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

export default TermsAndConditions;
