import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | SHC Global Trade</title>
        <meta name="description" content="Refund, Return & Cancellation Policy for SHC Global Trade - Policies for perishable agricultural exports." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Refund, Return & Cancellation Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2026</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                At SHC GLOBAL TRADE, we are committed to delivering premium quality agricultural products. Due to the nature of international trade and the perishable nature of our goods (Fruits, Vegetables), our policy is strictly governed by the following terms, in alignment with Indian Export Regulations.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. Order Cancellation Policy
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Timeframe:</strong> Orders can be cancelled by the buyer within 24 hours of signing the Proforma Invoice (PI) or Sales Contract.</li>
                  <li><strong>Processing Status:</strong> Once the procurement process has begun or packaging materials have been customized (e.g., printed boxes with buyer branding), the order cannot be cancelled.</li>
                  <li>
                    <strong>Cancellation Fees:</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>If cancelled before procurement starts: Full refund (minus bank transfer charges).</li>
                      <li>If cancelled after procurement/booking of freight: The buyer is liable for all costs incurred (transport, packaging, container booking fees).</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. Refund & Quality Claims Policy
                </h2>
                <p className="mb-4">
                  Due to the perishable nature of agricultural commodities (Bananas, Green Chilli, etc.), SHC GLOBAL TRADE does not accept physical returns of goods once they have left the Indian port. Refunds are processed only under "Quality Claims" subject to the following:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Quality Disputes:</strong> Any claim regarding quality or quantity must be raised within 48 hours of the container arriving at the destination port.</li>
                  <li><strong>Evidence Required:</strong> The buyer must provide a survey report from an independent, recognized surveyor (e.g., SGS, Bureau Veritas) at the destination port proving that the goods did not meet the agreed specifications in the contract.</li>
                  <li><strong>Settlement:</strong> If a quality claim is valid and accepted by SHC Global Trade, we will issue a Credit Note for future orders, OR a partial refund will be processed through authorized banking channels (AD Bank) in accordance with RBI guidelines.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Non-Refundable Situations
                </h2>
                <p className="mb-4">We are not liable for refunds in cases of:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delays caused by Shipping Lines or Force Majeure (natural disasters, war, port strikes).</li>
                  <li>Goods deteriorating due to improper storage or handling at the buyer's warehouse.</li>
                  <li>Buyer failing to clear customs in time at the destination port.</li>
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

export default RefundPolicy;
