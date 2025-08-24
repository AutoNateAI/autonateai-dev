import { Cpu, Database, Workflow, Bot, BarChart3, Link2 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'That saves time and cost'
    },
    {
      icon: Bot,
      title: 'AI Copilots',
      description: 'Tailored to your industry'
    },
    {
      icon: BarChart3,
      title: 'Intelligent Dashboards',
      description: 'And data platforms'
    },
    {
      icon: Link2,
      title: 'Cross-tool Integrations',
      description: 'That connect your ecosystem seamlessly'
    },
    {
      icon: Cpu,
      title: 'Custom Software Builds',
      description: 'Infused with AI across the workflow'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What We{' '}
            <span className="text-gradient">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We don't just code. We think. We model. We solve.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At AutoNateAI, we use critical thinking frameworks, graph theory, and prompt engineering 
            to design intelligent software systems that unlock new opportunities for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 group hover:scale-105 transition-all duration-500"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;