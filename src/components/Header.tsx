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

  // 1. Scroll Appearance Logic (Transparency vs Solid background)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. The Safe Scroll Function
  // We use requestAnimationFrame to make sure the browser is ready to scroll
  const scrollToSection = (sectionId: string) => {
    requestAnimationFrame(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          // "block: start" aligns the element to the top of the screen
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  };

  // 3. EFFECT: Handle scroll AFTER navigation completes
  // This is the key fix for Mobile. It waits for the page to change, checks if
  // there is a "target" in the state, and THEN scrolls.
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      
      // Small delay ensures the mobile menu animation is finished
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);

      // Clear the state so it doesn't keep scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About Us" },
    { id: "quality", label: "Quality" },
    { id: "contact", label: "Contact" },
  ];

  // 4. The Click Handler
  const handleNavClick = (sectionId: string) => {
    // Always close the mobile menu first
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // If we are already on Home, just scroll
      scrollToSection(sectionId);
    } else {
      // If on another page (Privacy, etc.), go to Home and tell it where to scroll
      navigate("/", { state: { scrollTo: sectionId } });
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
          {/* Logo Button */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left bg-transparent border-none p-0 cursor-pointer"
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
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium transition-colors hover:text-gold bg-transparent border-none p-0 cursor-pointer ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button variant={isScrolled ? "default" : "hero"} size="lg" onClick={() => handleNavClick("contact")}>
              Get Quote
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
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-foreground hover:text-primary py-2 text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="default" size="lg" className="mt-2 w-full" onClick={() => handleNavClick("contact")}>
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
