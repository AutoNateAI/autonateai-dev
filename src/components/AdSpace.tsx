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
    const placeholderImages = {
      sidebar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=250&fit=crop',
      banner: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=728&h=90&fit=crop',
      featured: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=728&h=300&fit=crop',
      inline: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=400&fit=crop'
    };

    const sizeMap = {
      sidebar: { width: '300px', height: '250px', text: '300x250 Sidebar' },
      banner: { width: '728px', height: '90px', text: '728x90 Banner' },
      featured: { width: '728px', height: '300px', text: '728x300 Featured' },
      inline: { width: '400px', height: '200px', text: '400x200 Inline' },
      bottom: { width: '1200px', height: '400px', text: '1200x400 Bottom' }
    };

    const size = sizeMap[position] || { width: '400px', height: '200px', text: '400x200 Default' };
    const imageUrl = placeholderImages[position] || placeholderImages.inline;

    return (
      <div className="glass-card overflow-hidden relative group hover:shadow-lg transition-all duration-300">
        <div className="relative">
          <img 
            src={imageUrl}
            alt="Advertisement placeholder"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ width: size.width, height: size.height, maxWidth: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
            <div className="p-4 text-white w-full">
              <div className="text-sm opacity-80 mb-1">Advertisement</div>
              <div className="font-semibold text-lg">Your Ad Here</div>
              <div className="text-xs opacity-70">{size.text}</div>
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
    return (
      <div className={className}>
        {getPlaceholderContent()}
      </div>
    );
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  className="w-full h-full object-cover"
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