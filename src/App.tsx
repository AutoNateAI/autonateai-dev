import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Coaching from "./pages/Coaching";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AiGrantAssistant from "./pages/AiGrantAssistant";
import LitReviewAi from "./pages/LitReviewAi";
import DataPipelineBuilder from "./pages/DataPipelineBuilder";
import Workshops from "./pages/Workshops";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="autonateai-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ai-grant-assistant" element={<AiGrantAssistant />} />
            <Route path="/products/lit-review-ai" element={<LitReviewAi />} />
            <Route path="/products/data-pipeline-builder" element={<DataPipelineBuilder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
