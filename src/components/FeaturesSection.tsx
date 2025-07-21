import { Clock, TrendingUp, Cpu, Award, CheckCircle, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: 'Save Valuable Time',
      description: 'Reduce research tasks by 60-80% with our systematic AI-augmented workflows.',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Increase Quality',
      description: 'Produce more thorough, rigorous results with structured methodologies.',
      color: 'text-green-400'
    },
    {
      icon: Cpu,
      title: 'AI-Platform Agnostic',
      description: 'Works seamlessly with ChatGPT, Claude, NotebookLM, Windsurf and others.',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Research-Validated',
      description: 'Methodologies designed by experts in research methods and academic standards.',
      color: 'text-orange-400'
    },
    {
      icon: CheckCircle,
      title: 'Complete Solutions',
      description: 'Everything you need from start to finish, with comprehensive guides and resources.',
      color: 'text-teal-400'
    },
    {
      icon: Users,
      title: 'Discord Community Support',
      description: 'Join our exclusive Discord community for real-time help, Q&A, and collaboration with other researchers using our workflows.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Researchers Choose{' '}
            <span className="text-gradient">AutoNateAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of researchers who have transformed their workflows 
            with our AI-augmented research methodologies.
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