import { Link } from 'react-router-dom';
import { Rocket, BarChart, Users, Eye, Brain, ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Startups = () => {
  const painPoints = [
    "Scattered tools and data sources preventing unified visibility",
    "Lack of observability into product usage and customer behavior",
    "Slow iteration cycles due to manual processes and reporting",
    "Difficulty scaling marketing and growth operations effectively"
  ];

  const solutions = [
    {
      icon: BarChart,
      title: "Unified Marketing Dashboards",
      description: "Centralized view of all marketing channels, campaigns, and performance metrics with real-time attribution tracking."
    },
    {
      icon: Users,
      title: "Customer + Lead Tracking CRMs",
      description: "Graph-visualized customer relationship management with automated lead scoring and pipeline optimization."
    },
    {
      icon: Brain,
      title: "AI-Integrated Product Dashboards",
      description: "Smart dashboards with built-in image/video generators, campaign optimizers, and content creation tools."
    },
    {
      icon: Eye,
      title: "Observability Dashboards",
      description: "Comprehensive monitoring of product usage, user feedback, growth metrics, and system performance."
    }
  ];

  const sampleFeatures = [
    { name: "Marketing Attribution Dashboard", standard: true },
    { name: "Customer Journey Tracker", standard: true },
    { name: "Growth Metrics Monitor", standard: true },
    { name: "AI Content Generator", ai: true },
    { name: "Predictive Churn Analysis", ai: true },
    { name: "Automated A/B Test Optimizer", ai: true }
  ];

  const differentiators = [
    "Built to scale — add features as your startup grows",
    "Continuous observability → we monitor dashboards + keep them running smooth", 
    "Ongoing thought leadership → stay plugged into our research and growth insights",
    "Startup expertise → understanding of rapid iteration and growth requirements"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-orange-500/10 mb-8">
              <Rocket className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dashboard Solutions for{' '}
              <span className="text-gradient">Startups</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unified dashboards for startups that need to move fast, track everything, 
              and scale efficiently while maintaining complete observability.
            </p>
          </div>

          {/* Pain Points */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-red-500/30">
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="glass-card p-8 group hover:scale-105 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 mb-6 group-hover:bg-orange-500/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sample Features & Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Features & Pricing</h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Standard Features ($1,250 each)</h3>
                  <div className="space-y-4">
                    {sampleFeatures.filter(f => f.standard).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6">AI-Enhanced Features ($1,850 each)</h3>
                  <div className="space-y-4">
                    {sampleFeatures.filter(f => f.ai).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Zap className="w-5 h-5 text-gradient mr-3" />
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AutoNateAI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-primary/30">
                  <p className="text-muted-foreground leading-relaxed">{diff}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-12 bg-gradient-primary/10">
              <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Startup Operations?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our unified dashboards can help you move faster, 
                track everything, and scale efficiently with complete observability.
              </p>
              <Link 
                to="/contact?demo=startup" 
                className="btn-primary text-lg px-4 py-3 sm:px-8 sm:py-4 inline-block text-center"
              >
                Book a Startup Dashboard Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;