import { Link } from 'react-router-dom';
import { Building2, GraduationCap, TrendingUp, Rocket, CheckCircle, Brain, Database } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const audiences = [
    {
      title: "Foundations",
      icon: Building2,
      description: "Grant campaign dashboards, impact measurement, and automated reporting for foundations deploying capital.",
      link: "/services/foundations",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
    },
    {
      title: "Grant Recipients",
      icon: GraduationCap,
      description: "Research progress dashboards, budget tracking, and collaboration tools for universities and nonprofits.",
      link: "/services/grant-recipients",
      color: "text-green-500",
      bgColor: "bg-green-500/10 hover:bg-green-500/20"
    },
    {
      title: "Venture Capital",
      icon: TrendingUp,
      description: "Portfolio dashboards, deal flow analyzers, and AI-powered due diligence tools for VCs.",
      link: "/services/venture-capital",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10 hover:bg-purple-500/20"
    },
    {
      title: "Startups",
      icon: Rocket,
      description: "Unified marketing dashboards, CRM systems, and growth observability tools for scaling companies.",
      link: "/services/startups",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10 hover:bg-orange-500/20"
    }
  ];

  const features = [
    "Progress trackers",
    "Campaign dashboards", 
    "Graph-structured CRMs",
    "Data analyzers",
    "Image/video API integrations"
  ];

  const differentiators = [
    {
      icon: Brain,
      title: "Prompt Engineering Expertise",
      description: "Our engineers train AI to code better, delivering smarter solutions."
    },
    {
      icon: Database,
      title: "Continuous Observability",
      description: "We monitor dashboards and keep them running smooth with ongoing support."
    },
    {
      icon: CheckCircle,
      title: "Real-World Pedigree",
      description: "Experience at Microsoft, Citibank, Veterans United, and AI R&D teams."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Custom Dashboards + AI Features,{' '}
              <span className="text-gradient">Built for Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              We design intelligent dashboards tailored to the needs of organizations with capital to deploy: 
              foundations, grant recipients, venture capital firms, and startups.
            </p>
            
            {/* Market Positioning */}
            <div className="glass-card p-8 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Enterprise-Level Customization at 20-35% of Legacy Costs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">Historic Spend</div>
                  <div className="text-lg text-muted-foreground">$250K-$1M+ custom builds</div>
                  <div className="text-lg text-muted-foreground">$50K-$300K/year SaaS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">AutoNateAI</div>
                  <div className="text-lg">$20K-$200K depending on tier</div>
                  <div className="text-sm text-muted-foreground">Modular, AI-ready, scalable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient mb-2">Advantage</div>
                  <div className="text-lg">Sweet spot pricing</div>
                  <div className="text-sm text-muted-foreground">Credible yet disruptive</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Historically, organizations faced bloated enterprise costs or rigid tools that never truly fit. 
                AutoNateAI delivers bespoke solutions at a fraction of legacy costs.
              </p>
            </div>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {audiences.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <Link
                  key={index}
                  to={audience.link}
                  className="glass-card p-8 group hover:scale-105 transition-all duration-500"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${audience.bgColor} mb-6 transition-colors`}>
                    <IconComponent className={`w-8 h-8 ${audience.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {audience.description}
                  </p>
                  <div className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                    Explore Solutions →
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Core Features */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Features (Apply Across All Audiences)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">{feature}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI Integration at Any Stage: Copilots, summarizers, generators, predictors.
            </p>
          </div>

          {/* Differentiators */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <div key={index} className="glass-card p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-12 bg-gradient-primary/10">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your Custom Dashboard?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Built to scale — add features as you grow. Continuous observability and ongoing thought leadership included.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;