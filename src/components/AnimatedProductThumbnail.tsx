import React from 'react';

interface AnimatedProductThumbnailProps {
  title: string;
  className?: string;
}

const AnimatedProductThumbnail: React.FC<AnimatedProductThumbnailProps> = ({ title, className = '' }) => {
  const getIconByTitle = (title: string) => {
    if (title.includes('Grant')) {
      return (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    } else if (title.includes('Literature') || title.includes('Lit Review')) {
      return (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    } else if (title.includes('Data Pipeline') || title.includes('Pipeline')) {
      return (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    }
    
    // Default AI/tech icon
    return (
      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        {/* Icon container with animation */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-700"></div>
          <div className="relative transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {getIconByTitle(title)}
          </div>
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