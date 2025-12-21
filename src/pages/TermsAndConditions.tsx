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
            <p className="text-muted-foreground mb-8">Last Updated: December 21, 2025</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                Welcome to SHC GLOBAL TRADE. These Terms and Conditions ("Terms") govern your use of our website www.shcglobaltrade.co.in (the "Site") and the purchase of products from SHC GLOBAL TRADE. By accessing our Site or placing an order with us, you agree to be bound by these Terms.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. General Information
                </h2>
                <p className="mb-4">
                  SHC GLOBAL TRADE is an export business registered in India, engaged in the global trade of agricultural products (Basmati rice, Green Chillies, Bananas, etc.) and paper products.
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Jurisdiction:</strong> These terms are governed by the laws of India.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. User Agreement
                </h2>
                <p>
                  By using this website, you represent that you are at least 18 years of age (or the age of majority in your jurisdiction) and possess the legal authority to enter into a binding contract under the Indian Contract Act, 1872.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Product Information & Disclaimer
                </h2>
                <p className="mb-4">
                  We strive to ensure that the descriptions and specifications of our products are accurate. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Agricultural Variance:</strong> Agricultural products are subject to natural variations in color, size, and texture. Images on the website are for illustrative purposes only.</li>
                  <li><strong>Accuracy:</strong> We do not warrant that product descriptions or other content on this site are error-free. We reserve the right to correct any errors, inaccuracies, or omissions at any time without prior notice.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Pricing and Payment
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dynamic Pricing:</strong> Prices displayed on the website or provided via quotes are subject to change without notice due to market fluctuations in commodity prices and currency exchange rates.</li>
                  <li><strong>Final Price:</strong> The final price and payment terms will be confirmed only upon the issuance of a formal Proforma Invoice.</li>
                  <li><strong>Payment Disputes:</strong> Any payment delays or failures may result in the suspension of future shipments and legal action under the MSMED Act, 2006 (if applicable).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  5. Shipping and Delivery (Export Policy)
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Incoterms:</strong> All international shipments are governed by the specific Incoterms (e.g., FOB, CIF, EXW) agreed upon in the Sales Contract.</li>
                  <li><strong>Customs:</strong> The buyer is responsible for complying with all laws and regulations of the destination country. SHC GLOBAL TRADE is not responsible for delays caused by customs clearance processes in the destination country.</li>
                  <li><strong>Force Majeure:</strong> We are not liable for any failure to perform our obligations where such failure results from any cause beyond our reasonable control, including, without limitation, mechanical, electronic or communications failure, natural disasters, or government restrictions.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable law, SHC GLOBAL TRADE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p>
                  All content included on this site, such as text, graphics, logos, and images, is the property of SHC GLOBAL TRADE and is protected by Indian and international copyright laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  8. Governing Law and Jurisdiction
                </h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India.
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Exclusive Jurisdiction:</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat, India.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  9. Contact Information
                </h2>
                <p className="mb-4">
                  For any questions regarding these Terms, please contact us at:
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

export default TermsAndConditions;
