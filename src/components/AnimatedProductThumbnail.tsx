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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-0"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-700"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full min-h-[200px]">
        {/* Main thumbnail area - now using stock photos */}
        <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
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
          
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl scale-150 group-hover:scale-200 transition-transform duration-700 -z-10"></div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-sm text-muted-foreground text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          AI-Powered Solution
        </p>
        
        {/* Progress indicator */}
        <div className="mt-4 w-16 h-1 bg-muted/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
        </div>
      </div>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
    </div>
  );
};

export default AnimatedProductThumbnail;