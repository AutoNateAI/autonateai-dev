import { Link } from 'react-router-dom';
import { Building2, Target, BarChart3, FileText, Brain, ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Foundations = () => {
  const painPoints = [
    "Measuring real impact across multiple grant campaigns",
    "Manual reporting processes that eat up valuable time",
    "Lack of visibility into campaign progress and outcomes",
    "Difficulty in tracking and visualizing complex data relationships"
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: "Grant Campaign Dashboards",
      description: "Visual tracking of campaign progress, funding distribution, and milestone achievements in real-time."
    },
    {
      icon: Target,
      title: "Progress + Outcome Trackers",
      description: "Comprehensive monitoring of grant recipient progress with automated milestone tracking and impact measurement."
    },
    {
      icon: FileText,
      title: "Custom Analytics Visualization", 
      description: "Graph-like structures that make complex data relationships clear and actionable for decision-makers."
    },
    {
      icon: Brain,
      title: "AI-Enabled Reporting",
      description: "Automated report generation, data summarization, narrative creation, and PDF output for stakeholders."
    }
  ];

  const sampleFeatures = [
    { name: "Campaign Progress Dashboard", standard: true },
    { name: "Impact Measurement Tracker", standard: true },
    { name: "Grant Recipient Portal", standard: true },
    { name: "AI Report Generator", ai: true },
    { name: "Predictive Impact Analysis", ai: true },
    { name: "Automated Compliance Monitoring", ai: true }
  ];

  const differentiators = [
    "Built to scale — add features as your foundation grows",
    "Continuous observability → we monitor dashboards + keep them running smooth", 
    "Ongoing thought leadership → stay plugged into our research and insights",
    "Real-world pedigree → experience at Microsoft, Citibank, and AI R&D teams"
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 mb-8">
              <Building2 className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dashboard Solutions for{' '}
              <span className="text-gradient">Foundations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent dashboards designed for foundations that need to track impact, 
              measure outcomes, and streamline reporting across grant campaigns.
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
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-blue-500" />
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
            <h2 className="text-3xl font-bold text-center mb-12">Historic Foundation Software Costs</h2>
            <div className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Custom Systems</div>
                  <div className="text-2xl font-bold text-red-400 mb-2">$250K-$1M+</div>
                  <div className="text-sm text-muted-foreground">12-24 months to build</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">SaaS Platforms</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$50K-$300K/year</div>
                  <div className="text-sm text-muted-foreground">Rigid feature sets</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-muted-foreground mb-2">Small Foundations</div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">Spreadsheets</div>
                  <div className="text-sm text-muted-foreground">Priced out of solutions</div>
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
                  <div className="text-sm text-muted-foreground mb-4">Community Foundations</div>
                  <div className="text-3xl font-bold text-primary">$25K-$40K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>5 features (mix of standard + 1 AI)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Campaign progress dashboards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Impact measurement tracker</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Basic grantee portal</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>AI report generator (light)</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <div className="text-sm text-muted-foreground mb-4">Private & Family Foundations</div>
                  <div className="text-3xl font-bold text-primary">$50K-$90K</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>8 features (mix + 3 AI features)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Multi-campaign dashboards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Predictive impact analysis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Automated compliance monitoring</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Graph-structured analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="text-sm text-muted-foreground mb-4">Large Foundations</div>
                  <div className="text-3xl font-bold text-primary">$120K-$250K+</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>12+ features</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gradient mr-2" />
                    <span>Full AI copilots</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Multi-stakeholder portals</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>SLA-backed observability</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Strategic insights & leadership</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                <strong>Market Advantage:</strong> Replace a year of SaaS subscriptions or a million-dollar custom build 
                with a foundation-owned system that works exactly how your staff already works.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Foundation's Operations?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our custom dashboards can help you measure impact more effectively 
                and streamline your grant management process.
              </p>
              <Link 
                to="/contact?demo=foundation" 
                className="btn-primary text-lg px-4 py-3 sm:px-8 sm:py-4 inline-block text-center"
              >
                Book a Foundation Dashboard Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Foundations;