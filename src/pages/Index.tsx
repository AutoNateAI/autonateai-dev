import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import EmailPopup from '@/components/EmailPopup';
import { useEmailPopup } from '@/hooks/useEmailPopup';

const Index = () => {
  const { showPopup, closePopup } = useEmailPopup();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
      <EmailPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Index;
