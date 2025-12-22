import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "products", label: "Products" },
    { href: "about", label: "About Us" },
    { href: "quality", label: "Quality" },
    { href: "contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Logic: Check if we are on the Home page
    if (location.pathname === "/") {
      // If on Home, just scroll smoothly
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      // If NOT on Home (e.g., on Privacy Policy), go to Home first
      navigate("/");
      
      // Wait a split second for Home to load, then scroll
      setTimeout(() => {
        if (sectionId === "home") {
          window.scrollTo(0, 0);
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-foreground text-lg">S</span>
            </div>
            <div>
              <span className={`font-display font-bold text-xl ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                SHC Global Trade
              </span>
              <span className={`block text-xs ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                Premium Indian Exports
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant={isScrolled ? "default" : "hero"} size="lg" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Get Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-medium text-foreground hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-2" asChild>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Get Quote</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
