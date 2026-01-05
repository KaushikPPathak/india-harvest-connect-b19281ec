import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-exports.jpg";
import heroImageWebp from "@/assets/hero-exports.jpg?format=webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with WebP support */}
      <picture className="absolute inset-0">
        <source srcSet={heroImageWebp} type="image/webp" />
        <img
          src={heroImage}
          alt="Premium Indian Agricultural Exports"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8 animate-fade-up opacity-0">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-3 py-1.5 md:px-4 md:py-2">
              <Award className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm font-bold text-gold uppercase tracking-wider">
                APEDA Certified
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5 md:px-4 md:py-2">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-primary-foreground">
                IEC Licensed Exporter
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 animate-fade-up opacity-0 stagger-1">
            <span className="text-gold">SHC</span> Global Trade
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 font-semibold tracking-wide">
              From India's Farms to the World's Table
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-xl mb-8 md:mb-10 animate-fade-up opacity-0 stagger-2 leading-relaxed">
            <strong className="text-gold">Premium Extra Long Grain Basmati Rice</strong> • Fresh G9 & Gauri Green Chillies • Export-Grade Cavendish Bananas — Trusted by importers across the globe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                Request Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-up opacity-0 stagger-4">
            <div className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-primary-foreground/10">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                1121
              </span>
              <p className="text-xs md:text-sm text-primary-foreground/80 mt-1">Extra Long Grain Rice</p>
            </div>
            <div className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-primary-foreground/10">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                20+
              </span>
              <p className="text-xs md:text-sm text-primary-foreground/80 mt-1">Countries Served</p>
            </div>
            <div className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-primary-foreground/10">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                100%
              </span>
              <p className="text-xs md:text-sm text-primary-foreground/80 mt-1">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
