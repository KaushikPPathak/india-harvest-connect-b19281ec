import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to section with offset for fixed header
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
    // Close mobile menu first
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home page - just scroll
      // Use setTimeout to allow menu close animation
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 50);
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      // Wait for navigation and DOM to be ready
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    }
  }, [location.pathname, navigate, scrollToSection]);

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
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-foreground text-lg">
                S
              </span>
            </div>
            <div>
              <span
                className={`font-display font-bold text-xl ${
                  isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground"
                }`}
              >
                SHC Global Trade
              </span>
              <span
                className={`block text-xs ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/70"
                }`}
              >
                Premium Indian Exports
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium transition-colors hover:text-gold bg-transparent border-none p-0 cursor-pointer ${
                  isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              onClick={() => handleNavClick("contact")}
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
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
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-foreground hover:text-primary py-2 text-left bg-transparent border-none cursor-pointer"
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
