
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChiSono from "./pages/ChiSono";
import Servizi from "./pages/Servizi";
import Blog from "./pages/Blog";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import CalcolatoreRisparmio from "./pages/CalcolatoreRisparmio";

// Initialize QueryClient for data fetching
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/calcolatore-risparmio" element={<CalcolatoreRisparmio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
