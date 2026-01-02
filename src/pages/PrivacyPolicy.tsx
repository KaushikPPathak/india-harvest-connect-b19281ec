import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SHC Global Trade</title>
        <meta name="description" content="Privacy Policy for SHC Global Trade - Learn how we collect, use, and protect your business contact information for export inquiries." />
        <link rel="canonical" href="https://shcglobaltrade.co.in/privacy-policy" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2026</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90">
              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  We primarily collect "Business Contact Information" (Name, Email, Company Name) to facilitate export orders and trade inquiries. We may also collect technical data (IP address, cookies) via tools like Google Analytics to improve website performance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">We use your data solely for legitimate business purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide price quotes for products.</li>
                  <li>To process export orders and generate documentation (Invoices, Bill of Lading).</li>
                  <li>To comply with Indian Export laws and Customs regulations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  3. International Data Transfer
                </h2>
                <p>
                  As an export business, we communicate with clients globally. By providing your information, you acknowledge and consent to the transfer and processing of your data in India, where data protection laws may differ from those in your home country.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  4. Data Sharing
                </h2>
                <p>
                  We do not sell your personal information. We share data only with trusted logistics partners (to deliver goods) or Government authorities (Customs/GST) if required by law.
                </p>
              </section>

              <section className="mb-8 bg-muted/30 p-6 rounded-lg border border-border">
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  5. Grievance Officer
                </h2>
                <p className="mb-4">
                  In accordance with the Information Technology Act, 2000, if you have any questions regarding our data practices, please contact:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Name:</strong> Kaushik Pathak (Founder)</li>
                  <li><strong>Company:</strong> SHC GLOBAL TRADE</li>
                  <li><strong>Address:</strong> 204, Suraj Darshan Apt, Gopipura, Surat - 395001, Gujarat, India.</li>
                  <li><strong>Email:</strong> info@shcglobaltrade.co.in</li>
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

export default PrivacyPolicy;
