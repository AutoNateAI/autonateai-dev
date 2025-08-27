import { Link } from 'react-router-dom';
import { GraduationCap, Search, DollarSign, Users, Brain, ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GrantRecipients = () => {
  const painPoints = [
    "Overwhelming reporting overhead that takes time away from research",
    "Difficulty tracking project milestones and budget spending",
    "Poor communication tools for coordinating with funders",
    "Manual processes for documenting progress and outcomes"
  ];

  const solutions = [
    {
      icon: Search,
      title: "Research Progress Dashboards",
      description: "Real-time tracking of research milestones, deliverables, and project timelines with visual progress indicators."
    },
    {
      icon: DollarSign,
      title: "Budget + Spending Trackers",
      description: "Comprehensive financial monitoring with automated alerts, spending categorization, and compliance tracking."
    },
    {
      icon: Users,
      title: "Collaboration Tools with AI",
      description: "Team coordination platforms with AI-powered summaries of notes, papers, and meeting discussions."
    },
    {
      icon: Brain,
      title: "Campaign + Milestone Dashboards",
      description: "Automated tracking of grant requirements, deadline management, and progress reporting for funders."
    }
  ];

  const sampleFeatures = [
    { name: "Research Progress Tracker", standard: true },
    { name: "Budget Management Dashboard", standard: true },
    { name: "Team Collaboration Portal", standard: true },
    { name: "AI Research Summarizer", ai: true },
    { name: "Automated Progress Reports", ai: true },
    { name: "Predictive Budget Analysis", ai: true }
  ];

  const differentiators = [
    "Built to scale — add features as your research team grows",
    "Continuous observability → we monitor dashboards + keep them running smooth", 
    "Ongoing thought leadership → stay plugged into our research and insights",
    "Academic expertise → understanding of research workflows and grant requirements"
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/10 mb-8">
              <GraduationCap className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Dashboard Solutions for{' '}
              <span className="text-gradient">Grant Recipients</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined dashboards for universities, nonprofits, and research teams to manage grants, 
              track progress, and maintain clear communication with funders.
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
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500/10 mb-6 group-hover:bg-green-500/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-green-500" />
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
              <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Grant Management?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our dashboards can reduce reporting overhead and help you focus 
                on what matters most — your research and impact.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Recipient Dashboard Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrantRecipients;