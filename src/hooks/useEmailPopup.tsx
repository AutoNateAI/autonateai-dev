import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const POPUP_DELAY = 30000; // 30 seconds
const POPUP_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours

export const useEmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
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
          // Wait for the delay before showing popup
          const timer = setTimeout(async () => {
            setShowPopup(true);
            
            // Track that popup was shown
            await supabase
              .from('email_popup_tracking')
              .insert({
                browser_fingerprint: browserFingerprint,
                last_shown: new Date().toISOString()
              });
          }, POPUP_DELAY);

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Error in popup logic:', error);
      }
    };

    checkAndShowPopup();
  }, []);

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