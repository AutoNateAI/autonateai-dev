import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Advertisement {
  id: string;
  title: string;
  image_url?: string;
  link_url?: string;
  alt_text?: string;
  position: string;
  target_type: string;
  target_value?: string;
  width?: number;
  height?: number;
  is_active: boolean;
}

interface AdSpaceProps {
  position: 'sidebar' | 'banner' | 'featured' | 'inline' | 'bottom';
  category?: string;
  blogSlug?: string;
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ position, category, blogSlug, className = '' }) => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

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
      const filteredAds = (data || []).filter(ad => {
        if (ad.target_type === 'all') return true;
        if (ad.target_type === 'category' && category) return ad.target_value === category;
        if (ad.target_type === 'specific_post' && blogSlug) return ad.target_value === blogSlug;
        return false;
      });

      setAds(filteredAds);
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholderContent = () => {
    const sizeMap = {
      sidebar: { width: '300px', height: '250px', text: '300x250 Sidebar' },
      banner: { width: '728px', height: '90px', text: '728x90 Banner' },
      featured: { width: '728px', height: '300px', text: '728x300 Featured' },
      inline: { width: '400px', height: '200px', text: '400x200 Inline' },
      bottom: { width: '1200px', height: '400px', text: '1200x400 Bottom' }
    };

    const size = sizeMap[position] || { width: '400px', height: '200px', text: '400x200 Default' };

    return (
      <div className="glass-card p-6 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 animate-pulse"></div>
        <div className="relative z-10">
          <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
          <div className="text-lg font-semibold text-primary mb-2">Your Ad Here</div>
          <div className="text-sm text-muted-foreground mb-4">{size.text}</div>
          
          {/* Animated placeholder content */}
          <div 
            className="mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20 group-hover:border-primary/40 transition-all duration-300"
            style={{ width: size.width, height: size.height, maxWidth: '100%' }}
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-primary/20 rounded-full animate-bounce flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-xs text-muted-foreground">Click to advertise</div>
            </div>
          </div>
        </div>
      </div>
    );
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
    return <div className={className}>{getPlaceholderContent()}</div>;
  }

  return (
    <div className={className}>
      {ads.map((ad) => (
        <div key={ad.id} className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300">
          {ad.link_url ? (
            <a 
              href={ad.link_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              {ad.image_url ? (
                <img 
                  src={ad.image_url} 
                  alt={ad.alt_text || ad.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  style={{ width: ad.width, height: ad.height }}
                />
              ) : (
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                  <div className="text-sm text-muted-foreground">Click to learn more</div>
                </div>
              )}
            </a>
          ) : (
            <div className="p-6 text-center">
              <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
              {ad.image_url && (
                <img 
                  src={ad.image_url} 
                  alt={ad.alt_text || ad.title}
                  className="mx-auto"
                  style={{ width: ad.width, height: ad.height }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdSpace;