import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Eagerly load the main page for fast initial load
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for better performance
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PusaBasmati1509 = lazy(() => import("./pages/PusaBasmati1509"));
const PusaBasmati1121 = lazy(() => import("./pages/PusaBasmati1121"));
const TraditionalBasmati = lazy(() => import("./pages/TraditionalBasmati"));
const GauriGreenChilli = lazy(() => import("./pages/GauriGreenChilli"));
const G9GreenChilli = lazy(() => import("./pages/G9GreenChilli"));
const CavendishBanana = lazy(() => import("./pages/CavendishBanana"));
const GrandNaineBanana = lazy(() => import("./pages/GrandNaineBanana"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const BasmatiRiceGrading = lazy(() => import("./pages/blog/BasmatiRiceGrading"));
const ExportDocumentation = lazy(() => import("./pages/blog/ExportDocumentation"));
const IndianAgricultureExport2025 = lazy(() => import("./pages/blog/IndianAgricultureExport2025"));

const queryClient = new QueryClient();

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/pusa-basmati-1509" element={<PusaBasmati1509 />} />
              <Route path="/pusa-basmati-1121" element={<PusaBasmati1121 />} />
              <Route path="/traditional-basmati" element={<TraditionalBasmati />} />
              <Route path="/gauri-green-chilli" element={<GauriGreenChilli />} />
              <Route path="/g9-green-chilli" element={<G9GreenChilli />} />
              <Route path="/cavendish-banana" element={<CavendishBanana />} />
              <Route path="/grand-naine-banana" element={<GrandNaineBanana />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/basmati-rice-grading-system-india" element={<BasmatiRiceGrading />} />
              <Route path="/blog/export-documentation-india-agricultural-products" element={<ExportDocumentation />} />
              <Route path="/blog/indian-agriculture-export-opportunities-2025" element={<IndianAgricultureExport2025 />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;