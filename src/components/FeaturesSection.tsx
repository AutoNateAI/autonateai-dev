import { Clock, TrendingUp, Cpu, Award, CheckCircle, Users, BookOpen, Network, Brain } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: 'End Literature Review Chaos',
      description: 'Transform weeks of disorganized reading into structured, systematic research with our 13-step guided workflow.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insight Generation',
      description: 'Extract concepts, identify knowledge gaps, and generate insights using 24+ specialized prompts designed for NotebookLM.',
      color: 'text-purple-400'
    },
    {
      icon: Network,
      title: 'Visual Research Mapping',
      description: 'See how your ideas connect with interactive concept graphs that trace insights back to their original sources.',
      color: 'text-green-400'
    },
    {
      icon: BookOpen,
      title: 'NotebookLM Integration',
      description: 'Seamlessly integrate with Google\'s NotebookLM for powerful AI-assisted literature analysis and synthesis.',
      color: 'text-orange-400'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your literature review progress with analytics dashboard and completion tracking across all workflow phases.',
      color: 'text-teal-400'
    },
    {
      icon: Users,
      title: 'Expert-Designed Methodology',
      description: 'Research methodologies created by PhD-level experts in academic research and validated by real researchers.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solve Your Literature Review{' '}
            <span className="text-gradient">Pain Points</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop drowning in papers, losing track of key insights, and struggling to connect ideas. 
            Our AI-powered workflow transforms chaos into organized, trackable research progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 group hover:scale-105 transition-all duration-500"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;