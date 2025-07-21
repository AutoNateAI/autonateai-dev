import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const SCROLL_TRIGGER_DELAY = 3000; // 3 seconds after scrolling starts
const POPUP_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours

export const useEmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollTimer, setScrollTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) { // User has scrolled more than 100px
        setHasScrolled(true);
        
        // Clear any existing timer
        if (scrollTimer) {
          clearTimeout(scrollTimer);
        }
        
        // Set a 3-second timer
        const timer = setTimeout(async () => {
          await checkAndShowPopup();
        }, SCROLL_TRIGGER_DELAY);
        
        setScrollTimer(timer);
      }
    };

    const checkAndShowPopup = async () => {
      try {
        const browserFingerprint = getBrowserFingerprint();
        
        // Check if popup was shown recently
        const { data: trackingData, error } = await supabase
          .from('email_popup_tracking')
          .select('*')
          .eq('browser_fingerprint', browserFingerprint)
          .order('last_shown', { ascending: false })
          .limit(1);

        if (error) {
          console.error('Error checking popup tracking:', error);
          return;
        }

        const shouldShow = !trackingData || 
          trackingData.length === 0 || 
          (trackingData[0] && !trackingData[0].email_captured && 
           Date.now() - new Date(trackingData[0].last_shown).getTime() > POPUP_COOLDOWN);

        if (shouldShow) {
          setShowPopup(true);
          
          // Track that popup was shown
          await supabase
            .from('email_popup_tracking')
            .insert({
              browser_fingerprint: browserFingerprint,
              last_shown: new Date().toISOString()
            });
        }
      } catch (error) {
        console.error('Error in popup logic:', error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [hasScrolled, scrollTimer]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
};

const getBrowserFingerprint = () => {
  // Simple browser fingerprinting
  return btoa(
    navigator.userAgent + 
    navigator.language + 
    screen.width + 
    screen.height + 
    new Date().getTimezoneOffset()
  );
};