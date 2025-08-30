import { Link } from 'react-router-dom';
import { TrendingUp, PieChart, Network, Brain, ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const VentureCapital = () => {
  const painPoints = [
    "Fragmented view of portfolio company performance and risk",
    "Time-intensive analysis of deal flow and market opportunities",
    "Difficulty sharing insights with LPs and stakeholders",
    "Manual due diligence processes that slow decision-making"
  ];

  const solutions = [
    {
      icon: PieChart,
      title: "Portfolio Company Dashboards",
      description: "Comprehensive visualization of portfolio performance, progress tracking, and risk assessment with real-time updates."
    },
    {
      icon: TrendingUp,
      title: "Deal Flow Analyzers",
      description: "Advanced data analysis tools for evaluating startups, market trends, and investment opportunities with predictive insights."
    },
    {
      icon: Network,
      title: "Graph-Based CRM",
      description: "Relationship mapping for founders, LPs, and industry connections with visual network analysis and interaction tracking."
    },
    {
      icon: Brain,
      title: "AI-Powered Due Diligence",
      description: "Automated analysis of pitch decks, market data, financial projections, and competitive landscape assessment."
    }
  ];

  const sampleFeatures = [
    { name: "Portfolio Performance Dashboard", standard: true },
    { name: "Deal Flow Tracking System", standard: true },
    { name: "LP Reporting Portal", standard: true },
    { name: "AI Pitch Deck Analyzer", ai: true },
    { name: "Market Intelligence Copilot", ai: true },
    { name: "Risk Assessment AI", ai: true }
  ];

  const differentiators = [
    "Built to scale — add features as your fund grows",
    "Continuous observability → we monitor dashboards + keep them running smooth", 
    "Ongoing thought leadership → stay plugged into our research and market insights",
    "Financial expertise → understanding of VC workflows and investor requirements"
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-purple-500/10 mb-8">
              <TrendingUp className="w-10 h-10 text-purple-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dashboard Solutions for{' '}
              <span className="text-gradient">Venture Capital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent dashboards designed for VCs to track portfolio performance, 
              analyze deal flow, and make data-driven investment decisions faster.
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
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 mb-6 group-hover:bg-purple-500/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-purple-500" />
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
            <h2 className="text-3xl font-bold text-center mb-12">Historic VC Software Costs</h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Top VCs</div>
                  <div className="text-2xl font-bold text-red-400 mb-2">$250K+ annual</div>
                  <div className="text-sm text-muted-foreground">DealCloud, Affinity + consultants</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Mid-Tier VCs</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$50K-$150K/year</div>
                  <div className="text-sm text-muted-foreground">Salesforce-based setups</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Boutique VCs</div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">Airtable Hacks</div>
                  <div className="text-sm text-muted-foreground">Notion, Excel makeshift solutions</div>
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
                  <div className="text-sm text-muted-foreground mb-4">Boutique Funds</div>
                  <div className="text-3xl font-bold text-primary">$35K-$50K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>5-6 features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Portfolio dashboard</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Deal flow tracker</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>LP portal</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>1 AI analyzer</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <div className="text-sm text-muted-foreground mb-4">Mid-Size Funds</div>
                  <div className="text-3xl font-bold text-primary">$75K-$125K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>8-10 features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>AI pitch deck analyzer</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Risk assessment AI</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Graph-based CRM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Market copilot</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-sm text-muted-foreground mb-4">Top-Tier Funds</div>
                  <div className="text-3xl font-bold text-primary">$200K-$400K+</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>12+ features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Full LP reporting suite</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Advanced AI due diligence</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Predictive deal flow engines</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Strategic analytics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                <strong>Market Advantage:</strong> Instead of renting Salesforce consultants, VCs get a bespoke 
                AI-native investment engine at half the cost.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Investment Process?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI-powered dashboards can help you make better investment decisions 
                and provide superior value to your LPs.
              </p>
              <Link 
                to="/contact?demo=venture-capital" 
                className="btn-primary text-lg px-4 py-3 sm:px-8 sm:py-4 inline-block text-center"
              >
                Book a VC Dashboard Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VentureCapital;