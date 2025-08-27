
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Blogs from "./pages/Blogs";
import LiveBuilds from "./pages/LiveBuilds";
import LiveBuildDetail from "./pages/LiveBuildDetail";
import Coaching from "./pages/Coaching";
import Tutoring from "./pages/Tutoring";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Grants from "./pages/Grants";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Services from "./pages/Services";
import Foundations from "./pages/services/Foundations";
import GrantRecipients from "./pages/services/GrantRecipients";
import VentureCapital from "./pages/services/VentureCapital";
import Startups from "./pages/services/Startups";

import Workshops from "./pages/Workshops";
import PaymentSuccess from "./pages/PaymentSuccess";
import AscensionProtocol from "./pages/AscensionProtocol";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="autonateai-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/foundations" element={<Foundations />} />
            <Route path="/services/grant-recipients" element={<GrantRecipients />} />
            <Route path="/services/venture-capital" element={<VentureCapital />} />
            <Route path="/services/startups" element={<Startups />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/live-builds" element={<LiveBuilds />} />
            <Route path="/live-builds/:id" element={<LiveBuildDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grants" element={<Grants />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/ascension-protocol" element={<AscensionProtocol />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
