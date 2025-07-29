import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface Advertisement {
  id: string;
  title: string;
  image_url?: string;
  link_url?: string;
  link_type?: string;
  product_id?: string;
  alt_text?: string;
  position: string;
  target_type: string;
  target_value?: string;
  width?: number;
  height?: number;
  is_active: boolean;
}

interface AdSpaceProps {
  position: 'sidebar' | 'sidebar-top' | 'sidebar-bottom' | 'banner' | 'featured' | 'inline' | 'bottom';
  category?: string;
  blogSlug?: string;
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ position, category, blogSlug, className = '' }) => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

  const getAdLink = (ad: Advertisement) => {
    console.log('getAdLink called for ad:', ad);
    if (ad.link_type === 'product' && ad.product_id) {
      console.log('Returning product link:', `/${ad.product_id}`);
      return `/${ad.product_id}`;
    } else if (ad.link_url) {
      console.log('Returning external link:', ad.link_url);
      return ad.link_url;
    }
    console.log('No link found for ad');
    return null;
  };

  const isExternalLink = (ad: Advertisement) => {
    const result = ad.link_url && (ad.link_type === 'external' || ad.link_url.startsWith('http'));
    console.log('isExternalLink for ad:', ad.title, 'result:', result);
    return result;
  };

  useEffect(() => {
    setLoading(true);
    setAds([]);
    fetchAds();
  }, [position, category, blogSlug]);

  const fetchAds = async () => {
    try {
      let query = supabase
        .from('advertisements')
        .select('*')
        .eq('position', position)
        .eq('is_active', true);

      const { data, error } = await query;

      if (error) throw error;

      // Filter ads based on targeting
      let filteredAds = (data || []).filter(ad => {
        if (ad.target_type === 'all') return true;
        if (ad.target_type === 'category' && category) return ad.target_value === category;
        if (ad.target_type === 'specific_post' && blogSlug) return ad.target_value === blogSlug;
        return false;
      });

      // If no ads found for sidebar-top or sidebar-bottom, fall back to general sidebar ads
      if (filteredAds.length === 0 && (position === 'sidebar-top' || position === 'sidebar-bottom')) {
        const fallbackQuery = supabase
          .from('advertisements')
          .select('*')
          .eq('position', 'sidebar')
          .eq('is_active', true);

        const { data: fallbackData, error: fallbackError } = await fallbackQuery;

        if (!fallbackError && fallbackData) {
          const allSidebarAds = fallbackData.filter(ad => {
            if (ad.target_type === 'all') return true;
            if (ad.target_type === 'category' && category) return ad.target_value === category;
            if (ad.target_type === 'specific_post' && blogSlug) return ad.target_value === blogSlug;
            return false;
          });

          // Assign ads consistently: first ad to top, second ad to bottom
          if (allSidebarAds.length > 0) {
            if (position === 'sidebar-top') {
              filteredAds = [allSidebarAds[0]]; // First ad for top position
            } else if (position === 'sidebar-bottom') {
              filteredAds = allSidebarAds.length > 1 ? [allSidebarAds[1]] : []; // Second ad for bottom position
            }
          }
        }
      }

      setAds(filteredAds);
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAdStyles = () => {
    const styles = {
      sidebar: 'aspect-square', // 1024x1024 - square
      'sidebar-top': 'aspect-square', // 1024x1024 - square
      'sidebar-bottom': 'aspect-square', // 1024x1024 - square
      banner: 'aspect-[4/1]',
      featured: 'aspect-[3/2]',
      inline: 'aspect-[3/2]', // 1536x1024 - 3:2 ratio
      bottom: 'aspect-[3/2]' // 1536x1024 - 3:2 ratio
    };

    return styles[position] || 'aspect-[3/2]';
  };

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="glass-card p-6 text-center">
          <div className="h-4 bg-muted/20 rounded mb-2"></div>
          <div className="h-6 bg-muted/20 rounded mb-4"></div>
          <div className="h-32 bg-muted/20 rounded"></div>
        </div>
      </div>
    );
  }

  if (ads.length === 0) {
    return null; // No ads to show
  }

  // Select a random ad from available ads
  const selectedAd = ads[Math.floor(Math.random() * ads.length)];

  const ad = selectedAd;
  console.log('Rendering ad:', ad.title, 'link_url:', ad.link_url, 'link_type:', ad.link_type, 'product_id:', ad.product_id);

  return (
    <div className={`w-full ${className}`}>
      <div key={ad.id} className={`w-full overflow-hidden group hover:shadow-lg transition-all duration-300 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 ${getAdStyles()}`}>
        {(ad.link_url || ad.product_id) ? (
          <>
            {isExternalLink(ad) ? (
              <a 
                href={getAdLink(ad)!}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer not-prose"
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => {
                  console.log('External ad clicked:', ad.title, 'href:', getAdLink(ad));
                  // Let the default behavior handle the navigation
                }}
              >
                {ad.image_url ? (
                  <img 
                    src={ad.image_url} 
                    alt={ad.alt_text || ad.title}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ objectPosition: 'center' }}
                  />
                ) : (
                  <div className="p-6 text-center w-full h-full flex flex-col justify-center">
                    <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                    <div className="text-sm text-muted-foreground">Click to learn more</div>
                  </div>
                )}
              </a>
            ) : (
              <Link 
                to={getAdLink(ad)!}
                className="block w-full h-full cursor-pointer not-prose"
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => {
                  console.log('Internal ad clicked:', ad.title, 'to:', getAdLink(ad));
                }}
              >
                {ad.image_url ? (
                  <img 
                    src={ad.image_url} 
                    alt={ad.alt_text || ad.title}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ objectPosition: 'center' }}
                  />
                ) : (
                  <div className="p-6 text-center w-full h-full flex flex-col justify-center">
                    <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                    <div className="text-sm text-muted-foreground">Click to learn more</div>
                  </div>
                )}
              </Link>
            )}
          </>
        ) : (
          <div className="w-full h-full">
            {ad.image_url ? (
              <img 
                src={ad.image_url} 
                alt={ad.alt_text || ad.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="p-6 text-center w-full h-full flex flex-col justify-center">
                <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdSpace;