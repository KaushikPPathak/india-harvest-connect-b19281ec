import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About Us" },
    { id: "quality", label: "Quality" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = useCallback((sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => scrollToSection(sectionId), 50);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 150);
    }
  }, [location.pathname, navigate, scrollToSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-2"
          : "bg-black/20 backdrop-blur-[2px] py-4" // Darker tint for better text contrast
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO & TITLE SECTION */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer text-left group"
          >
            {/* LOGO IMAGE */}
            {!imageError ? (
              <img 
                src="/logo" // Kept your working path
                alt="SHC Logo" 
                onError={() => setImageError(true)} 
                // UPDATED: Much bigger sizing (w-16 mobile / w-24 desktop)
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/80 shadow-lg"
              />
            ) : (
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-gold flex items-center justify-center border-2 border-white/50 shadow-lg">
                <span className="font-display font-bold text-foreground text-2xl">S</span>
              </div>
            )}
            
            <div className="flex flex-col">
              {/* MAIN TITLE */}
              <span
                className={`font-display font-bold text-lg md:text-2xl leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                SHC Global Trade
              </span>
              
              {/* SUBTITLE */}
              <span
                className={`block text-[11px] md:text-xs mt-1 max-w-[180px] md:max-w-md leading-tight font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${
                  isScrolled ? "text-muted-foreground" : "text-white/90"
                }`}
              >
                Premium Indian Agriculture Exporter of Basmati Rice, Green Chilli, and Banana
              </span>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium text-base transition-colors hover:text-gold bg-transparent border-none p-0 cursor-pointer drop-shadow-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <GoogleTranslate />
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              onClick={() => handleNavClick("contact")}
              className="shadow-lg"
            >
              Get Quote
            </Button>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 drop-shadow-md ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-lg text-foreground hover:text-primary py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                size="lg"
                className="mt-2 w-full"
                onClick={() => handleNavClick("contact")}
              >
                Get Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
