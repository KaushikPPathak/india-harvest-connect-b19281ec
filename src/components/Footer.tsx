import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
                <span className="font-display font-bold text-foreground text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                AgroExports
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Your trusted partner for premium agricultural exports from India.
              Quality, reliability, and excellence in every shipment.
            </p>
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
              {["Basmati Rice", "Green Chillies", "Raw Banana", "Custom Orders"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
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
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>123 Export House, Trade Center Road</li>
              <li>Mumbai, Maharashtra 400001</li>
              <li>India</li>
              <li className="pt-2">
                <a href="tel:+912212345678" className="hover:text-gold transition-colors">
                  +91 22 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:exports@agroexports.in"
                  className="hover:text-gold transition-colors"
                >
                  exports@agroexports.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} AgroExports India. All rights reserved.
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
