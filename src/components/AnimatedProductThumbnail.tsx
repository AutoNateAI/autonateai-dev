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
  const getSVGByTitle = (title: string) => {
    if (title.includes('Grant')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Document background */}
          <rect x="40" y="30" width="120" height="140" rx="8" fill="url(#grantGrad)" className="animate-pulse" />
          <rect x="45" y="35" width="110" height="130" rx="4" fill="hsl(var(--background))" opacity="0.9" />
          
          {/* Document lines */}
          <rect x="55" y="50" width="90" height="3" rx="1.5" fill="hsl(var(--primary))" opacity="0.7" />
          <rect x="55" y="60" width="70" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <rect x="55" y="70" width="85" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <rect x="55" y="80" width="65" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          
          {/* Dollar sign */}
          <circle cx="130" cy="120" r="15" fill="hsl(var(--primary))" className="animate-bounce" style={{animationDelay: '0.5s'}} />
          <text x="130" y="127" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--primary-foreground))">$</text>
          
          {/* Decorative elements */}
          <circle cx="70" r="2" fill="hsl(var(--accent))" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="150" cy="40" r="1.5" fill="hsl(var(--primary))" className="animate-ping" style={{animationDelay: '1.5s'}} />
        </svg>
      );
    } else if (title.includes('Literature') || title.includes('Lit Review')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Book spine */}
          <rect x="60" y="40" width="15" height="120" rx="7" fill="url(#bookGrad)" />
          
          {/* Book pages */}
          <rect x="75" y="45" width="80" height="110" rx="5" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="2" />
          <rect x="78" y="48" width="74" height="104" rx="3" fill="hsl(var(--muted))" opacity="0.3" />
          
          {/* Page content lines */}
          <rect x="85" y="60" width="60" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.6" />
          <rect x="85" y="70" width="55" height="1.5" rx="0.75" fill="hsl(var(--muted-foreground))" opacity="0.4" />
          <rect x="85" y="80" width="58" height="1.5" rx="0.75" fill="hsl(var(--muted-foreground))" opacity="0.4" />
          <rect x="85" y="90" width="52" height="1.5" rx="0.75" fill="hsl(var(--muted-foreground))" opacity="0.4" />
          
          {/* AI brain icon */}
          <circle cx="125" cy="120" r="12" fill="hsl(var(--primary))" className="animate-pulse" />
          <circle cx="122" cy="117" r="2" fill="hsl(var(--primary-foreground))" />
          <circle cx="128" cy="117" r="2" fill="hsl(var(--primary-foreground))" />
          <path d="M120 123 Q125 127 130 123" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Floating particles */}
          <circle cx="50" cy="70" r="1.5" fill="hsl(var(--accent))" className="animate-ping" style={{animationDelay: '0.5s'}} />
          <circle cx="170" cy="90" r="1" fill="hsl(var(--primary))" className="animate-ping" style={{animationDelay: '1.2s'}} />
        </svg>
      );
    } else if (title.includes('Data Pipeline') || title.includes('Pipeline')) {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Data flow pipeline */}
          <rect x="30" y="80" width="25" height="40" rx="5" fill="url(#pipelineGrad)" className="animate-pulse" />
          <rect x="70" y="75" width="25" height="50" rx="5" fill="url(#pipelineGrad)" className="animate-pulse" style={{animationDelay: '0.3s'}} />
          <rect x="110" y="70" width="25" height="60" rx="5" fill="url(#pipelineGrad)" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          <rect x="150" y="75" width="25" height="50" rx="5" fill="url(#pipelineGrad)" className="animate-pulse" style={{animationDelay: '0.9s'}} />
          
          {/* Connecting arrows */}
          <path d="M55 100 L70 100" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)" />
          <path d="M95 100 L110 100" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)" />
          <path d="M135 100 L150 100" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)" />
          
          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          
          {/* Data points */}
          <circle cx="42" cy="60" r="3" fill="hsl(var(--accent))" className="animate-bounce" style={{animationDelay: '0s'}} />
          <circle cx="82" cy="55" r="3" fill="hsl(var(--accent))" className="animate-bounce" style={{animationDelay: '0.3s'}} />
          <circle cx="122" cy="50" r="3" fill="hsl(var(--accent))" className="animate-bounce" style={{animationDelay: '0.6s'}} />
          <circle cx="162" cy="55" r="3" fill="hsl(var(--accent))" className="animate-bounce" style={{animationDelay: '0.9s'}} />
          
          {/* Processing indicators */}
          <rect x="38" y="140" width="12" height="8" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
          <rect x="78" y="140" width="12" height="8" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
          <rect x="118" y="140" width="12" height="8" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
          <rect x="158" y="140" width="12" height="8" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
        </svg>
      );
    }
    
    // Default tech/AI icon
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="60" fill="url(#defaultGrad)" className="animate-pulse" />
        <circle cx="85" cy="85" r="8" fill="hsl(var(--primary-foreground))" />
        <circle cx="115" cy="85" r="8" fill="hsl(var(--primary-foreground))" />
        <path d="M70 120 Q100 140 130 120" stroke="hsl(var(--primary-foreground))" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    );
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
        {/* Main thumbnail area - easily replaceable */}
        <div className="w-full h-32 mb-4 relative">
          {imageSrc ? (
            // PNG image when provided - EASY TO REPLACE
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            // SVG placeholder when no image provided
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {getSVGByTitle(title)}
              </div>
            </div>
          )}
          
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