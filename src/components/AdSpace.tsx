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
  position: 'sidebar' | 'banner' | 'featured' | 'inline' | 'bottom';
  category?: string;
  blogSlug?: string;
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ position, category, blogSlug, className = '' }) => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

  const getAdLink = (ad: Advertisement) => {
    if (ad.link_type === 'product' && ad.product_id) {
      return `/${ad.product_id}`;
    } else if (ad.link_url) {
      return ad.link_url;
    }
    return null;
  };

  const isExternalLink = (ad: Advertisement) => {
    return ad.link_url && (ad.link_type === 'external' || ad.link_url.startsWith('http'));
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
      banner: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=90&fit=crop',
      featured: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop',
      inline: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=200&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=400&fit=crop'
    };

    const heightMap = {
      sidebar: 'h-[250px]',
      banner: 'h-[90px]',
      featured: 'h-[300px]',
      inline: 'h-[200px]',
      bottom: 'h-[400px]'
    };

    const imageUrl = placeholderImages[position] || placeholderImages.inline;
    const height = heightMap[position] || 'h-[200px]';

    return (
      <div className="w-full overflow-hidden relative group hover:shadow-lg transition-all duration-300 rounded-lg">
        <img 
          src={imageUrl}
          alt="Advertisement"
          className={`w-full ${height} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
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
    <div className={`w-full ${className}`}>
      {ads.map((ad) => (
        <div key={ad.id} className="w-full overflow-hidden group hover:shadow-lg transition-all duration-300 rounded-lg">
          {(ad.link_url || ad.product_id) ? (
            <>
              {isExternalLink(ad) ? (
                <a 
                  href={getAdLink(ad)!}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full cursor-pointer"
                >
                  {ad.image_url ? (
                    <img 
                      src={ad.image_url} 
                      alt={ad.alt_text || ad.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="p-6 text-center w-full">
                      <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                      <div className="text-sm text-muted-foreground">Click to learn more</div>
                    </div>
                  )}
                </a>
              ) : (
                <Link 
                  to={getAdLink(ad)!}
                  className="block w-full cursor-pointer"
                >
                  {ad.image_url ? (
                    <img 
                      src={ad.image_url} 
                      alt={ad.alt_text || ad.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="p-6 text-center w-full">
                      <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                      <div className="text-sm text-muted-foreground">Click to learn more</div>
                    </div>
                  )}
                </Link>
              )}
            </>
          ) : (
            <div className="w-full">
              {ad.image_url ? (
                <img 
                  src={ad.image_url} 
                  alt={ad.alt_text || ad.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-6 text-center w-full">
                  <h3 className="font-semibold text-primary mb-2">{ad.title}</h3>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdSpace;