import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-foreground text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                SHC Global Trade
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Your trusted partner for premium agricultural exports from India.
              Quality, reliability, and excellence in every shipment since 2024.
            </p>
            <div className="text-xs text-primary-foreground/60 space-y-1 mb-4">
              <p><span className="font-medium">GST:</span> 24ABTPP7011L1Z9</p>
              <p><span className="font-medium">IEC:</span> ABTPP7011L</p>
              <p><span className="font-medium">D&B D-U-N-S:</span> 75-605-1507</p>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors group"
                >
                  <Icon className="w-4 h-4 text-primary-foreground group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                "1121 Basmati Rice",
                "Traditional Basmati Rice",
                "Pusa Basmati Rice",
                "Gauri Green Chillies",
                "G9 Green Chillies",
                "Cavendish Banana",
                "Grand Naine Banana",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Quality Standards", href: "#quality" },
                { label: "Export Process", href: "#" },
                { label: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display font-semibold text-primary-foreground mb-4 mt-6">
              Certifications
            </h4>
            <ul className="space-y-2 text-xs text-primary-foreground/60">
              <li>APEDA License: RCMC/APEDA/05968/2023-2024</li>
              <li>FSSAI Certified</li>
              <li>ISO 22000 Compliant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  204, Suraj Darshan Apartment<br />
                  Gopipura, Surat<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919327420046" className="hover:text-gold transition-colors">
                  +91-93274-20046
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:sales@shcglobaltrade.co.in"
                    className="hover:text-gold transition-colors"
                  >
                    sales@shcglobaltrade.co.in
                  </a>
                  <a
                    href="mailto:info@shcglobaltrade.co.in"
                    className="hover:text-gold transition-colors"
                  >
                    info@shcglobaltrade.co.in
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://shcglobaltrade.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 text-sm font-medium"
              >
                www.shcglobaltrade.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} SHC Global Trade. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
