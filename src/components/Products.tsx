import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

// Basmati Rice varieties
import rice1121 from "@/assets/1121-basmati-rice.jpg";
import riceTraditional from "@/assets/traditional-basmati-rice.jpg";
import ricePusa from "@/assets/pusa-basmati-rice.jpg";

// Green Chillies varieties
import gauriChillies from "@/assets/gauri-green-chillies.jpg";
import g9Chillies from "@/assets/g9-green-chillies.jpg";

// Banana varieties
import cavendishBanana from "@/assets/cavendish-banana.jpg";
import grandNaineBanana from "@/assets/grand-naine-banana.jpg";

interface Product {
  id: number;
  slug: string; // Added this for linking
  name: string;
  description: string;
  image: string;
  features: string[];
  origin: string;
  category: string;
  hsCode?: string;
  packaging?: string;
  detailPage?: string;
}

const products: Product[] = [
  // Basmati Rice Varieties
  {
    id: 1,
    slug: "1121-basmati-rice",
    name: "1121 Basmati Rice",
    description:
      "The world's longest grain Basmati rice with exceptional aroma and elongation ratio of 2.5x after cooking. Premium quality extra-long grain rice with average grain length of 8.3-8.4mm raw. Ideal for Biryani, Pulao, and international cuisines. Aged for minimum 2 years for optimal flavor and texture.",
    image: rice1121,
    features: ["8.3mm+ Grain Length", "2.5x Elongation", "Aged 2+ Years", "Non-GMO"],
    origin: "Punjab, India",
    category: "Basmati Rice",
    hsCode: "1006.30",
    packaging: "25/50 Kg PP Bags, Jute Bags",
    detailPage: "/pusa-basmati-1121",
  },
  {
    id: 2,
    slug: "traditional-basmati",
    name: "Traditional Basmati Rice",
    description:
      "Authentic traditional Basmati with characteristic nutty flavor and delicate aroma. Known for its slender grains and excellent cooking properties. This heritage variety offers superior taste profile cherished across generations. Perfect for everyday cooking and traditional Indian dishes.",
    image: riceTraditional,
    features: ["Traditional Variety", "Nutty Aroma", "Slender Grains", "Premium Quality"],
    origin: "Haryana, India",
    category: "Basmati Rice",
    hsCode: "1006.30",
    packaging: "25/50 Kg PP Bags, Jute Bags",
  },
  {
    id: 3,
    slug: "pusa-basmati-rice",
    name: "Pusa Basmati Rice",
    description:
      "High-yielding Pusa variety developed by IARI with excellent cooking qualities and aromatic properties. Features pearly white grains with consistent quality. Popular choice for both domestic consumption and international exports. Offers great value with premium Basmati characteristics.",
    image: ricePusa,
    features: ["Pearly White", "Consistent Quality", "IARI Developed", "Export Grade"],
    origin: "Uttar Pradesh, India",
    category: "Basmati Rice",
    hsCode: "1006.30",
    packaging: "25/50 Kg PP Bags, Jute Bags",
    detailPage: "/pusa-basmati-1509",
  },
  // Green Chillies Varieties
  {
    id: 4,
    slug: "gauri-green-chillies",
    name: "Gauri Green Chillies",
    description:
      "Premium Gauri variety green chillies known for their vibrant color, consistent size, and balanced heat profile. Freshly harvested from select farms in Andhra Pradesh. Maintained under strict cold chain protocols to ensure freshness. Ideal for culinary applications, pickle manufacturing, and food processing industries.",
    image: gauriChillies,
    features: ["Medium Heat", "Bright Green", "Uniform Size", "Cold Chain"],
    origin: "Andhra Pradesh, India",
    category: "Green Chillies",
    hsCode: "0709.60",
    packaging: "5/10 Kg Cartons, Reefer Containers",
    detailPage: "/gauri-green-chilli",
  },
  {
    id: 5,
    slug: "g9-green-chillies",
    name: "G9 Green Chillies",
    description:
      "Export-grade G9 variety with superior pungency and excellent shelf life. These premium green chillies feature uniform sizing, glossy appearance, and high capsaicin content. Processed and packed under HACCP standards. Perfect for dehydration, paste production, and fresh export markets.",
    image: g9Chillies,
    features: ["High Pungency", "Export Grade", "Long Shelf Life", "HACCP Certified"],
    origin: "Gujarat, India",
    category: "Green Chillies",
    hsCode: "0709.60",
    packaging: "5/10 Kg Cartons, Reefer Containers",
    detailPage: "/g9-green-chilli",
  },
  // Banana Varieties
  {
    id: 6,
    slug: "cavendish-banana",
    name: "Cavendish Banana",
    description:
      "Premium Cavendish variety bananas, the world's most popular commercial banana. Known for uniform ripening, excellent taste, and extended shelf life. Harvested at optimal maturity for export. GAP certified farms ensure quality from cultivation to packaging. Ideal for supermarket chains and wholesale distribution.",
    image: cavendishBanana,
    features: ["Uniform Ripening", "Extended Shelf Life", "GAP Certified", "Class 1 Grade"],
    origin: "Maharashtra, India",
    category: "Fresh Banana",
    hsCode: "0803.90",
    packaging: "13/18 Kg Cartons, Cluster Packing",
    detailPage: "/cavendish-banana",
  },
  {
    id: 7,
    slug: "grand-naine-banana",
    name: "Grand Naine Banana",
    description:
      "Superior quality Grand Naine variety, a premium Cavendish sub-variety with excellent export credentials. Features medium-sized fingers with consistent curvature and appealing yellow color when ripe. Cultivated using sustainable farming practices. Widely preferred in Middle East, European, and Asian markets.",
    image: grandNaineBanana,
    features: ["Premium Export", "Sustainable Farming", "Consistent Quality", "13.5cm+ Fingers"],
    origin: "Tamil Nadu, India",
    category: "Fresh Banana",
    hsCode: "0803.90",
    packaging: "13/18 Kg Cartons, Cluster Packing",
  },
];

const Products = () => {
  const categories = [...new Set(products.map((p) => p.category))];

  // AI-readable product summaries for RAG optimization
  const aiSummaries = {
    rice: "SHC Global Trade exports premium Indian Basmati Rice varieties: 1121 Basmati (HS Code 1006.30, 8.3mm+ grain, 2.5x elongation), Pusa 1509, and Traditional Basmati. All rice is APEDA and FSSAI certified, sourced from Punjab, Haryana, and Uttar Pradesh. Available grades: Raw, Sella, Golden Sella, White Sella, Steam. Packaging: 25/50 Kg PP Bags, Jute Bags. MOQ: 25 MT (1x20ft container).",
    chillies: "SHC Global Trade exports fresh Indian Green Chillies: G9 variety (high pungency, Gujarat origin) and Gauri variety (balanced heat, Andhra Pradesh origin). HS Code 0709.60. HACCP certified processing with cold chain maintained. Packaging: 5/10 Kg cartons, reefer containers. MOQ: 1 Ton (air freight).",
    bananas: "SHC Global Trade exports fresh Cavendish Bananas including Grand Naine variety from Maharashtra and Tamil Nadu, India. HS Code 0803.90. Class 1 grade with 13.5cm+ finger length. GAP certified farms. Packaging: 13/18 Kg cartons, cluster packing. MOQ: 1 Ton (air freight)."
  };

  return (
    <section id="products" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* AI-Readable Summary Block - Visible for GEO */}
        <div className="ai-summary text-[10px] leading-tight text-muted-foreground/60 bg-muted/30 rounded-lg p-3 mb-6 border border-border/30 max-w-4xl mx-auto" aria-hidden="false" data-geo-optimized="true">
          <p className="mb-1"><strong>Basmati Rice:</strong> {aiSummaries.rice}</p>
          <p className="mb-1"><strong>Green Chillies:</strong> {aiSummaries.chillies}</p>
          <p><strong>Bananas:</strong> {aiSummaries.bananas}</p>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-xs md:text-sm">
            Our Products
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 md:mt-3 mb-3 md:mb-4">
            What Are the Premium Agricultural Products Exported by SHC Global Trade?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            SHC Global Trade specializes in exporting APEDA-certified Basmati Rice, Green Chillies, and Cavendish Bananas from India to global markets.
          </p>
        </div>

        {/* Products by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-10 md:mb-16 last:mb-0">
            <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
              <span className="w-8 md:w-12 h-1 bg-gold rounded-full" />
              What Are the Specifications for SHC Global Trade's {category}?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {products
                .filter((p) => p.category === category)
                .map((product, index) => (
                  <motion.div
                    key={product.id}
                    id={product.slug} // THIS IS THE KEY FIX: Giving the card an address
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 scroll-mt-32" 
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <OptimizedImage
                        src={product.image}
                        alt={`${product.name} - Export Quality from India`}
                        width={400}
                        height={300}
                        aspectRatio="4/3"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-end">
                        <span className="inline-block bg-gold/90 text-foreground text-[10px] md:text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                          {product.origin}
                        </span>
                        {product.hsCode && (
                          <span className="inline-block bg-primary/90 text-primary-foreground text-[10px] md:text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                            HS: {product.hsCode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      <h4 className="font-display text-base md:text-xl font-bold text-foreground mb-2 md:mb-3">
                        {product.name}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 md:line-clamp-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {product.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="text-[10px] md:text-xs bg-primary/10 text-primary px-1.5 md:px-2 py-0.5 md:py-1 rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Packaging Info */}
                      {product.packaging && (
                        <p className="text-[10px] md:text-xs text-muted-foreground mb-3 md:mb-4 hidden sm:block">
                          <span className="font-medium">Packaging:</span> {product.packaging}
                        </p>
                      )}

                      {product.detailPage ? (
                        <Link to={product.detailPage} className="block">
                          <Button variant="default" className="w-full group/btn">
                            View Details
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" className="w-full group/btn">
                          Request Quote
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
