import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import basmatiRice from "@/assets/basmati-rice.jpg";
import greenChillies from "@/assets/green-chillies.jpg";
import rawBanana from "@/assets/raw-banana.jpg";

const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    description:
      "Long-grain aromatic rice renowned for its distinctive fragrance and fluffy texture. Sourced from the fertile plains of Punjab and Haryana.",
    image: basmatiRice,
    features: ["Extra Long Grain", "Aged 2+ Years", "Non-GMO", "Pesticide Free"],
    origin: "Punjab, India",
  },
  {
    id: 2,
    name: "Fresh Green Chillies",
    description:
      "Vibrant and flavorful green chillies with the perfect balance of heat and taste. Freshly harvested and carefully packed for export.",
    image: greenChillies,
    features: ["Farm Fresh", "High Capsaicin", "Uniform Size", "Cold Chain"],
    origin: "Andhra Pradesh, India",
  },
  {
    id: 3,
    name: "Raw Green Bananas",
    description:
      "Premium quality raw bananas perfect for cooking and industrial use. Known for their firm texture and excellent shelf life.",
    image: rawBanana,
    features: ["Export Grade", "Extended Shelf Life", "Uniform Ripening", "GAP Certified"],
    origin: "Maharashtra, India",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Premium Quality Exports
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in exporting the finest agricultural products from India,
            ensuring quality at every step from farm to destination.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-gold/90 text-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {product.origin}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
