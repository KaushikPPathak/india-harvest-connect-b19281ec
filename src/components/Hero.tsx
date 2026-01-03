import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 animate-fade-up opacity-0">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">
              APEDA & IEC Certified | Est. 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 animate-fade-up opacity-0 stagger-1">
            SHC Global Trade
            <span className="block text-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">Premium Indian Agricultural Exports</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-xl mb-8 md:mb-10 animate-fade-up opacity-0 stagger-2">
            Your trusted partner for premium Basmati Rice varieties, Fresh Green Chillies (Gauri & G9), 
            and Export-Grade Bananas from India.
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
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 md:mb-2">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">
                  Global
                </span>
              </div>
              <p className="text-xs md:text-sm text-primary-foreground/70">Export Reach</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 md:mb-2">
                <Truck className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">
                  7+
                </span>
              </div>
              <p className="text-xs md:text-sm text-primary-foreground/70">Products</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 md:mb-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">
                  100%
                </span>
              </div>
              <p className="text-xs md:text-sm text-primary-foreground/70">Quality</p>
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
