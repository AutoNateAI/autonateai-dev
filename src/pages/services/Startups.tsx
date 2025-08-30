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

          {/* Historic Context */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Historic Startup Software Costs</h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Early-Stage</div>
                  <div className="text-2xl font-bold text-green-400 mb-2">$20K-$50K/year</div>
                  <div className="text-sm text-muted-foreground">SaaS spend across 6-10 tools</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Growth-Stage</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$100K-$250K/year</div>
                  <div className="text-sm text-muted-foreground">Fragmented across 10+ products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Enterprise</div>
                  <div className="text-2xl font-bold text-red-400 mb-2">$250K+ deployments</div>
                  <div className="text-sm text-muted-foreground">Salesforce, Looker, Tableau</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">AutoNateAI Pricing Tiers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Entry</h3>
                  <div className="text-sm text-muted-foreground mb-4">Pre-Seed/Seed</div>
                  <div className="text-3xl font-bold text-primary">$15K-$30K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>3-4 features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Marketing attribution</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Growth metrics</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Basic CRM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>1 AI tool</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <div className="text-sm text-muted-foreground mb-4">Series A-B</div>
                  <div className="text-3xl font-bold text-primary">$50K-$90K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>6-8 features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>AI churn predictor</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Automated A/B optimizer</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Advanced growth dashboards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>AI content generator</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-sm text-muted-foreground mb-4">Scaling Unicorns</div>
                  <div className="text-3xl font-bold text-primary">$120K-$200K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>10-12+ features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Predictive product analytics</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Full observability suite</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>AI growth suite</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Advanced integrations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                <strong>Market Advantage:</strong> Replace a fragmented SaaS stack with one unified growth dashboard 
                for the cost of 1-2 SaaS contracts.
              </p>
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