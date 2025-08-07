import { Clock, TrendingUp, Cpu, Award, CheckCircle, Users, BookOpen, Network, Brain } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Enhanced Learning',
      description: 'Teach your child to harness AI tools like ChatGPT and Claude for complex problem-solving and analytical thinking.',
      color: 'text-blue-400'
    },
    {
      icon: Network,
      title: 'Graph Theory Fundamentals',
      description: 'Master the art of connecting ideas using graph theory concepts that successful entrepreneurs and innovators rely on.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Critical Thinking Skills',
      description: 'Develop systematic approaches to analyze complex problems, evaluate evidence, and make logical decisions.',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Industry Expert Instruction',
      description: 'Learn from a professional with Microsoft, Citibank, and Veterans United experience who understands real-world applications.',
      color: 'text-orange-400'
    },
    {
      icon: BookOpen,
      title: 'Personalized Learning Path',
      description: 'Customized curriculum adapted to your child\'s grade level, interests, and learning style for maximum engagement.',
      color: 'text-teal-400'
    },
    {
      icon: CheckCircle,
      title: 'Future-Ready Skills',
      description: 'Equip your child with mental models and thinking frameworks that will give them advantages in college and career.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Give Your Child a{' '}
            <span className="text-gradient">Competitive Edge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While other students struggle with information overload, your child will master AI-enhanced 
            critical thinking skills that successful professionals use in the real world.
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