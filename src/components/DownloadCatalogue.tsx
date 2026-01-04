import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadCatalogue = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download Our Product Catalogue
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Get detailed information about our premium Basmati Rice, Green Chillies, and Cavendish Bananas. 
            Download our complete product catalogue for specifications, packaging options, and export details.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="gap-2 text-lg px-8 py-6"
          >
            <a 
              href="/downloads/product-catalogue.pdf" 
              download="SHC-Global-Trade-Product-Catalogue.pdf"
            >
              <Download className="w-5 h-5" />
              Download Catalogue (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCatalogue;
