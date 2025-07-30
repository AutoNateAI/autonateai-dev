import { ArrowRight, Play, Sparkles, Beaker, BookOpen, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-32 right-20 w-32 h-32 rounded-full bg-accent opacity-10 blur-2xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-glass-secondary opacity-30 blur-lg"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-glass-accent opacity-20 blur-xl"></div>
      </div>

      {/* Animated SVG Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Beaker className="floating-element absolute top-40 left-16 w-8 h-8 text-glass-primary opacity-30" />
        <BookOpen className="floating-element absolute top-60 right-24 w-10 h-10 text-glass-secondary opacity-25" />
        <Database className="floating-element absolute bottom-60 left-20 w-6 h-6 text-glass-accent opacity-35" />
        <Sparkles className="floating-element absolute bottom-40 right-16 w-12 h-12 text-primary opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Research Workflows
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your{' '}
            <span className="text-gradient animate-gradient">Research Process</span>
            <br />
            with AI-Augmented{' '}
            <span className="text-gradient">Digital Guides</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            AutoNateAI provides cutting-edge workflow management systems that empower 
            researchers to achieve better results in less time by integrating AI into 
            established research methodologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/products" className="btn-primary text-lg px-8 py-4 flex items-center">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/blog" className="btn-glass text-lg px-8 py-4 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Read Our Blog
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Researchers Trained</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">65%</div>
              <div className="text-muted-foreground">Average Time Saved</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-glass-secondary mb-2">40%</div>
              <div className="text-muted-foreground">Grant Success Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;