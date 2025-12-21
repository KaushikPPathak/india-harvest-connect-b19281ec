import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to handle navigation to sections on the Home page
  const handleScrollToSection = (sectionId: string) => {
    // If we are NOT on the home page, go there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a split second for the home page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If we are already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to ensure new pages start at the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-forest-dark py-10 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-foreground text-sm md:text-lg">S</span>
              </div>
              <span className="font-display font-bold text-base md:text-xl text-primary-foreground">
                SHC Global Trade
              </span>
            </div>
            <p className="text-primary-foreground/70 text-xs md:text-sm mb-3 md:mb-4">
              Your trusted partner for premium agricultural exports from India since 2024.
            </p>
            <div className="text-[10px] md:text-xs text-primary-foreground/60 space-y-1 mb-3 md:mb-4">
              <p><span className="font-medium">GST:</span> 24ABTPP7011L1Z9</p>
              <p><span className="font-medium">IEC:</span> ABTPP7011L</p>
            </div>
            <div className="flex gap-2 md:gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors group"
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground group-hover:text-foreground" />
                </a>
              ))}
            </div>
            
            {/* Founder LinkedIn */}
            <div className="mt-3 md:mt-4">
              <a
                href="https://www.linkedin.com/in/kaushik-pathak-83945927/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <div 
                  className="w-6 h-6 md:w-7 md:h-7 rounded flex items-center justify-center"
                  style={{ backgroundColor: "#0A66C2" }}
                >
                  <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[10px] md:text-xs">Founder & Director – LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-3 md:mb-4 text-sm md:text-base">
              Our Products
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                "1121 Basmati Rice",
                "Traditional Basmati",
                "Pusa Basmati Rice",
                "Gauri Green Chillies",
                "G9 Green Chillies",
                "Cavendish Banana",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScrollToSection('products')}
                    className="text-left text-primary-foreground/70 hover:text-gold transition-colors text-xs md:text-sm bg-transparent border-none p-0 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="font-display font-semibold text-primary-foreground mb-3 md:mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Quality Standards", id: "quality" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScrollToSection(item.id)}
                    className="text-left text-primary-foreground/70 hover:text-gold transition-colors text-xs md:text-sm bg-transparent border-none p-0 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display font-semibold text-primary-foreground mb-3 md:mb-4 mt-4 md:mt-6 text-sm md:text-base">
              Certifications
            </h4>
            <ul className="space-y-1 md:space-y-2 text-[10px] md:text-xs text-primary-foreground/60">
              <li>APEDA Certified</li>
              <li>FSSAI Certified</li>
              <li>ISO 22000 Compliant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-3 md:mb-4 text-sm md:text-base">
              Contact Info
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  Gopipura, Surat<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
                <a href="tel:+919327420046" className="hover:text-gold transition-colors">
                  +91-93274-20046
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sales@shcglobaltrade.co.in"
                  className="hover:text-gold transition-colors text-xs md:text-sm break-all"
                >
                  sales@shcglobaltrade.co.in
                </a>
              </li>
            </ul>
            
            <div className="mt-4 md:mt-6">
              <a 
                href="https://shcglobaltrade.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 text-xs md:text-sm font-medium"
              >
                www.shcglobaltrade.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-left">
            © {currentYear} SHC Global Trade. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="text-primary-foreground/60 hover:text-gold transition-colors text-xs md:text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/terms-and-conditions"
              onClick={scrollToTop}
              className="text-primary-foreground/60 hover:text-gold transition-colors text-xs md:text-sm"
            >
              Terms
            </Link>
            <Link
              to="/disclaimer"
              onClick={scrollToTop}
              className="text-primary-foreground/60 hover:text-gold transition-colors text-xs md:text-sm"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
