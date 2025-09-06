import { Clock, TrendingUp, Cpu, Award, CheckCircle, Users, BookOpen, Network, Brain } from 'lucide-react';
import featuresImage from '../assets/features-dashboard-ai.jpg';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Graph Theory Mindset',
      description: 'We map your business like a network and expose hidden efficiencies that traditional approaches miss.',
      color: 'text-blue-400'
    },
    {
      icon: Network,
      title: 'Mental Models → Computer Models',
      description: 'We turn proven decision frameworks into working software that thinks with your business.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Human-in-the-Loop AI',
      description: 'AI does the heavy lifting, but humans stay in control. The perfect balance of automation and oversight.',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Deep Experience',
      description: 'Our engineers have built at Microsoft, Citibank, Veterans United, and AI research labs.',
      color: 'text-orange-400'
    },
    {
      icon: BookOpen,
      title: 'Transparency',
      description: 'We use Lovable.dev to prototype quickly and show you exactly how it\'s done - no black boxes.',
      color: 'text-teal-400'
    },
    {
      icon: CheckCircle,
      title: 'Workflow Automation',
      description: 'Custom AI-integrated software that saves time, reduces costs, and unlocks new opportunities.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our{' '}
            <span className="text-gradient">Edge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We don't just code. We think. We model. We solve. At AutoNateAI, we use critical thinking frameworks, 
            graph theory, and prompt engineering to design intelligent software systems.
          </p>
          
          {/* Features Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={featuresImage} 
              alt="AI-powered dashboard features"
              className="w-full h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
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