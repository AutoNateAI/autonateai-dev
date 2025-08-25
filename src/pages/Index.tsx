
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import UpcomingLiveBuildsSection from '../components/UpcomingLiveBuildsSection';
import LiveBuildsSection from '../components/LiveBuildsSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ClosingSection from '../components/ClosingSection';
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
      <ServicesSection />
      <FeaturesSection />
      <UpcomingLiveBuildsSection />
      <LiveBuildsSection />
      <ProcessSection />
      <WhyChooseSection />
      <ClosingSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
      <EmailPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Index;
