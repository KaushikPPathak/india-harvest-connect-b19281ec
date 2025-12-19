import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import heroImage from "@/assets/hero-exports.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-primary-foreground">
              APEDA & IEC Certified Exporter | Established 2024
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            SHC Global Trade
            <span className="block text-gold">Premium Indian Agricultural Exports</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 animate-fade-up opacity-0 stagger-2">
            Your trusted partner for premium Basmati Rice varieties, Fresh Green Chillies (Gauri & G9), 
            and Export-Grade Bananas from India. Quality assured, globally delivered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-up opacity-0 stagger-4">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Globe className="w-5 h-5 text-gold" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  Global
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70">Export Reach</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Truck className="w-5 h-5 text-gold" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  7+
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70">Product Varieties</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  100%
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70">Quality Assured</p>
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
