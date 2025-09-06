import { ArrowRight, Play, Sparkles, Beaker, BookOpen, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-critical-thinking-ai.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-32 right-20 w-32 h-32 rounded-full bg-accent opacity-10 blur-2xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-glass-secondary opacity-30 blur-lg"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-glass-accent opacity-20 blur-xl"></div>
      </div>

      {/* Animated SVG Icons */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <Beaker className="floating-element absolute top-40 left-16 w-8 h-8 text-glass-primary opacity-30" />
        <BookOpen className="floating-element absolute top-60 right-24 w-10 h-10 text-glass-secondary opacity-25" />
        <Database className="floating-element absolute bottom-60 left-20 w-6 h-6 text-glass-accent opacity-35" />
        <Sparkles className="floating-element absolute bottom-40 right-16 w-12 h-12 text-primary opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-1 lg:order-1">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Critical Thinking Meets Intelligent Software
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The bridge between{' '}
                <span className="text-gradient animate-gradient">critical thinking</span>
                {' '}and intelligent software
              </h1>
              
              {/* Subtitle - Hidden on mobile, shown on desktop */}
              <p className="hidden lg:block text-xl text-muted-foreground leading-relaxed">
                We solve complex business problems by combining advanced critical thinking frameworks 
                with custom AI-integrated software that makes organizations smarter, faster, and more adaptive.
              </p>
            </div>

            {/* CTA Buttons - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/live-builds" className="btn-glass text-lg px-8 py-4 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                See Our Live Builds
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-2 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Critical thinking meets AI technology - visualization of neural networks and data flows"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-glass-accent/30 blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Mobile-only content below image */}
        <div className="lg:hidden space-y-8 order-3">
          {/* Subtitle on mobile */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            We solve complex business problems by combining advanced critical thinking frameworks 
            with custom AI-integrated software that makes organizations smarter, faster, and more adaptive.
          </p>

          {/* CTA Buttons on mobile */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/live-builds" className="btn-glass text-lg px-8 py-4 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              See Our Live Builds
            </Link>
          </div>
        </div>

        {/* Key Value Props - Full width row below everything */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 order-4">
          <div className="glass-card p-4 text-center">
            <div className="text-xl font-bold text-primary mb-1">Think & Model</div>
            <div className="text-sm text-muted-foreground">We don't just code. We solve.</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-xl font-bold text-primary mb-1">AI-Integrated</div>
            <div className="text-sm text-muted-foreground">Intelligence built in</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-xl font-bold text-glass-secondary mb-1">Transparent</div>
            <div className="text-sm text-muted-foreground">Built openly with Lovable</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;