import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

// IMPORT THE IMAGE
import logoImage from "./logo.jpeg";

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
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-black/5 backdrop-blur-[1px] py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO & TITLE SECTION */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 md:gap-4 bg-transparent border-none p-0 cursor-pointer text-left group"
          >
            {/* LOGO IMAGE - BIG SIZE */}
            {!imageError ? (
              <img 
                src={logoImage}
                alt="SHC Logo"
                onError={() => setImageError(true)}
                // Mobile: w-20 (80px), Desktop: w-28 (112px) -> VERY VISIBLE
                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-xl flex-shrink-0"
              />
            ) : (
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-gold flex items-center justify-center border-2 border-white shadow-xl flex-shrink-0">
                <span className="font-display font-bold text-foreground text-4xl">S</span>
              </div>
            )}
            
            <div className="flex flex-col justify-center">
              {/* BRAND NAME */}
              <span
                className={`font-display font-bold text-xl md:text-3xl leading-none transition-colors duration-300 ${
                  isScrolled 
                    ? "bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm"
                    : "text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]" // Heavy shadow for readability
                }`}
              >
                SHC Global Trade
              </span>
              
              {/* DESCRIPTION / SUBTITLE - INCREASED SIZE */}
              <span
                className={`block mt-1 font-medium leading-tight tracking-wide transition-colors duration-300
                  text-sm md:text-base          /* Mobile: Small, Desktop: Normal (Reading size) */
                  max-w-[240px] md:max-w-xl     /* Wider width to prevent squashing */
                  ${
                  isScrolled 
                    ? "text-gray-700" 
                    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]" // Very strong shadow
                }`}
              >
                Premium Indian Agriculture Exporter of Basmati Rice, Green Chilli, and Banana
              </span>
            </div>
          </button>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-bold text-base transition-colors hover:text-amber-500 bg-transparent border-none p-0 cursor-pointer ${
                    isScrolled 
                      ? "text-slate-800" 
                      : "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* LANGUAGE SELECTOR */}
            <LanguageSelector />

            {/* CTA (DESKTOP ONLY) */}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              onClick={() => handleNavClick("contact")}
              className="hidden lg:inline-flex shadow-lg font-bold"
            >
              Get Quote
            </Button>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-lg text-slate-800 hover:text-amber-600 py-2 text-left bg-transparent border-none cursor-pointer"
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
