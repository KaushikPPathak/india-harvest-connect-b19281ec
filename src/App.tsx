import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PusaBasmati1509 from "./pages/PusaBasmati1509";
import PusaBasmati1121 from "./pages/PusaBasmati1121";
import GauriGreenChilli from "./pages/GauriGreenChilli";
import G9GreenChilli from "./pages/G9GreenChilli";
import CavendishBanana from "./pages/CavendishBanana";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pusa-basmati-1509" element={<PusaBasmati1509 />} />
            <Route path="/pusa-basmati-1121" element={<PusaBasmati1121 />} />
            <Route path="/gauri-green-chilli" element={<GauriGreenChilli />} />
            <Route path="/g9-green-chilli" element={<G9GreenChilli />} />
            <Route path="/cavendish-banana" element={<CavendishBanana />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
