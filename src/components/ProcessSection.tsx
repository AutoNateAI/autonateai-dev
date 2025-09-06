import { Ear, Brain, Zap, Rocket } from 'lucide-react';
import processImage from '../assets/process-workflow.jpg';

const ProcessSection = () => {
  const steps = [
    {
      icon: Ear,
      number: "01",
      title: "Listen & Analyze",
      description: "We learn your workflows, pain points, and opportunities."
    },
    {
      icon: Brain,
      number: "02", 
      title: "Think & Model",
      description: "We apply critical thinking, graph theory, and AI frameworks."
    },
    {
      icon: Zap,
      number: "03",
      title: "Prototype Fast",
      description: "Using Lovable.dev + advanced prompt engineering, we deliver working versions quickly."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deliver & Scale",
      description: "We refine, integrate, and scale into your systems."
    }
  ];

  return (
    <section className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It{' '}
            <span className="text-gradient">Works</span>
          </h2>
          
          {/* Process Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={processImage} 
              alt="Our workflow process"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
                )}
                
                <div className="glass-card p-8 relative z-10 group-hover:scale-105 transition-all duration-500">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;