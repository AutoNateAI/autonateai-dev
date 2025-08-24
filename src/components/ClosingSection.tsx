import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClosingSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
          <div className="floating-element absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent opacity-10 blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Main Message */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Critical thinking is the{' '}
            <span className="text-gradient animate-gradient">operating system</span>.
            <br />
            AI is the processor.
            <br />
            We're the bridge.
          </h2>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's build the tools that keep you ahead.
          </p>

          {/* CTA */}
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center max-w-xs mx-auto">
            Book a Discovery Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;