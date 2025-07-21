import React from 'react';

interface AnimatedProductThumbnailProps {
  title: string;
  className?: string;
  imageSrc?: string; // For when you want to use PNG images
}

const AnimatedProductThumbnail: React.FC<AnimatedProductThumbnailProps> = ({ 
  title, 
  className = '', 
  imageSrc 
}) => {
  const getStockImageByTitle = (title: string) => {
    if (title.includes('Grant')) {
      return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop';
    } else if (title.includes('Literature') || title.includes('Lit Review')) {
      return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop';
    } else if (title.includes('Data Pipeline') || title.includes('Pipeline')) {
      return 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop';
    }
    // Default tech image
    return 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop';
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border border-primary/10 group hover:shadow-2xl transition-all duration-500 ${className}`}>
      {/* Full container image */}
      <div className="w-full h-full relative overflow-hidden">
        {imageSrc ? (
          // Custom PNG image when provided
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          // Stock photo when no custom image provided
          <img 
            src={getStockImageByTitle(title)} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        
        {/* Subtle overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default AnimatedProductThumbnail;