import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SHC Global Trade</title>
        <meta name="description" content="Privacy Policy for SHC Global Trade - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: December 21, 2025</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <p className="text-lg mb-8">
                Welcome to SHC GLOBAL TRADE ("we," "us," or "our"). We are an export business based in Surat, Gujarat, India. We respect your privacy and are committed to protecting the personal data you share with us.
              </p>
              <p className="mb-8">
                This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website www.shcglobaltrade.co.in or contact us for business inquiries. This policy is published in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We primarily collect "Business Contact Information" to facilitate export orders and trade inquiries. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, Email Address, Phone Number, and Company Name provided voluntarily via our Contact Forms, WhatsApp links, or email inquiries.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and time zone setting (collected automatically via cookies to help us understand where our website traffic comes from).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use your data solely for legitimate business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Trade Inquiries:</strong> To provide price quotes for our products (Basmati Rice, Green Chillies, Bananas, Paper products, etc.).</li>
                  <li><strong>Order Processing:</strong> To process and deliver export orders and generate necessary documentation (Invoices, Bill of Lading).</li>
                  <li><strong>Compliance:</strong> To comply with legal or regulatory requirements under Indian Export laws and Customs regulations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share data only in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted logistics partners and shipping lines to deliver your goods.</li>
                  <li><strong>Legal Obligations:</strong> If required by Indian law, legal process, or government officials (e.g., Indian Customs or GST authorities).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Cookies
                </h2>
                <p>
                  Our website may use standard cookies to improve user experience. You can choose to disable cookies through your individual browser options.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p>
                  We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  6. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to other websites. We are not responsible for the privacy practices of other sites. We encourage you to read their privacy statements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  7. Grievance Officer
                </h2>
                <p className="mb-4">
                  In accordance with the Information Technology Act, 2000 and rules made thereunder, the contact details of the Grievance Officer are provided below:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Name:</strong> Kaushik Pathak</li>
                  <li><strong>Company:</strong> SHC GLOBAL TRADE</li>
                  <li><strong>Address:</strong> Surat, Gujarat, India</li>
                  <li><strong>Website:</strong> www.shcglobaltrade.co.in</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
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

export default PrivacyPolicy;
