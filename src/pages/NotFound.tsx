import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Package, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <title>Page Not Found | SHC Global Trade</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our premium Basmati Rice, Green Chillies & Banana products." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://shcglobaltrade.co.in" />
      </Helmet>

      <Header />

      <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-display font-bold text-primary/10 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gold/20 rounded-full flex items-center justify-center">
                  <Package className="w-12 h-12 md:w-16 md:h-16 text-gold" />
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link to="/#products">
                  <Package className="w-5 h-5" />
                  Browse Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Go to Homepage
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Quick Links
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-left">
                <Link 
                  to="/pusa-basmati-1121" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-gold font-bold">🌾</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Pusa Basmati 1121</p>
                    <p className="text-sm text-muted-foreground">Premium Basmati Rice</p>
                  </div>
                </Link>
                <Link 
                  to="/pusa-basmati-1509" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-gold font-bold">🌾</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Pusa Basmati 1509</p>
                    <p className="text-sm text-muted-foreground">Export Quality Rice</p>
                  </div>
                </Link>
                <Link 
                  to="/gauri-green-chilli" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">🌶️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Gauri Green Chilli</p>
                    <p className="text-sm text-muted-foreground">Fresh Green Chillies</p>
                  </div>
                </Link>
                <Link 
                  to="/cavendish-banana" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">🍌</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Cavendish Banana</p>
                    <p className="text-sm text-muted-foreground">Export Grade Bananas</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Need help?</span>
              <a href="tel:+919327420046" className="text-primary hover:underline font-medium">
                +91-93274-20046
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
