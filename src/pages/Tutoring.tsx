
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, BookOpen, Users, Target, Brain, Network, CheckCircle, Calendar, Clock, Trophy, DollarSign } from 'lucide-react';

const Tutoring = () => {
  const features = [
    {
      icon: Network,
      title: "Graph Theory Mastery",
      description: "Learn to visualize complex problems as networks of connected nodes and relationships"
    },
    {
      icon: Brain,
      title: "Critical Thinking Skills",
      description: "Develop advanced analytical abilities that apply to research, academics, and professional work"
    },
    {
      icon: Target,
      title: "Mental Models",
      description: "Build powerful frameworks for understanding and navigating complex situations"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Master the art of decomposing research problems into manageable, connected components"
    }
  ];

  const benefits = [
    "Transform abstract problems into visual, manageable maps",
    "Identify hidden relationships others miss",
    "Navigate complex academic and professional challenges",
    "Build mental models that enhance decision-making",
    "Understand the 'empty space' between connections as valuable data",
    "Develop researcher-level analytical thinking",
    "Create multiple relational maps to find unique insights",
    "Master traversal techniques for insight discovery"
  ];

  const sessions = [
    { number: 1, title: "Introduction to Graph Theory", focus: "Nodes, edges, and basic concepts" },
    { number: 2, title: "Mental Models & Mapping", focus: "Building your first relational maps" },
    { number: 3, title: "The Space Between", focus: "Understanding implicit data and relationships" },
    { number: 4, title: "Research Decomposition", focus: "Breaking down complex problems" },
    { number: 5, title: "Traversal Techniques", focus: "Finding paths to insights" },
    { number: 6, title: "Multiple Perspectives", focus: "Creating diverse relational models" },
    { number: 7, title: "Pattern Recognition", focus: "Identifying recurring structures" },
    { number: 8, title: "Advanced Applications", focus: "Real-world problem solving" },
    { number: 9, title: "Professional Integration", focus: "Applying skills in work/academics" },
    { number: 10, title: "Mastery & Beyond", focus: "Independent practice and growth" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
          <div className="floating-element absolute top-32 right-20 w-32 h-32 rounded-full bg-accent opacity-10 blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-pulse-glow">
              <Network className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                1-on-1 Graph Theory Tutoring
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Think Like a{' '}
              <span className="text-gradient animate-gradient">Master Researcher</span>
              <br />
              Through Graph Theory
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Master the art of seeing the world as connected nodes and relationships. 
              Develop the critical thinking skills that separate exceptional researchers, 
              students, and professionals from the rest.
            </p>

            {/* Pricing Card */}
            <div className="glass-card p-8 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="text-4xl font-bold text-primary">$1,500</div>
                  <div className="text-lg text-muted-foreground">Complete 10-Session Program</div>
                </div>
              </div>
              
              <div className="bg-muted/20 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-4">Flexible Payment Structure</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Start with your first session to experience the value</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Pay for first 5 sessions only after you decide to continue</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Pay for remaining 5 sessions by the start of session 6</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a 
                href="https://calendly.com/autonate-ai/graph-theory-tutoring" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 flex items-center"
              >
                Schedule Your First Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>Middle School • High School • Undergraduate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transform How You <span className="text-gradient">Think & Analyze</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Graph theory isn't just mathematics—it's a powerful lens for understanding 
              relationships, patterns, and hidden connections in everything around us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 text-center">
            <h3 className="text-2xl font-bold mb-8">Skills You'll Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href="https://calendly.com/autonate-ai/graph-theory-tutoring" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Your First Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Session Program */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              10-Session <span className="text-gradient">Mastery Program</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive journey from basic graph concepts to advanced research-level thinking. 
              Each session builds upon the previous, creating a solid foundation for critical analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.number} className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{session.number}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{session.title}</h4>
                    <p className="text-muted-foreground">{session.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="text-2xl font-bold">10 Sessions</div>
                  <div className="text-muted-foreground">1-hour each, personalized to your pace</div>
                </div>
              </div>
              <a 
                href="https://calendly.com/autonate-ai/graph-theory-tutoring" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Critical Thinking for the <span className="text-gradient">Modern World</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a student tackling complex subjects or a professional 
                solving intricate problems, the ability to see connections and relationships 
                is what separates good thinking from exceptional thinking.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Academic Excellence</h4>
                    <p className="text-muted-foreground">Approach any subject with structured, analytical thinking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Professional Growth</h4>
                    <p className="text-muted-foreground">Solve complex workplace challenges with systematic approaches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Research Mastery</h4>
                    <p className="text-muted-foreground">Think like top researchers who see patterns others miss</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 text-center">
              <Network className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Thinking?</h3>
              <p className="text-muted-foreground mb-8">
                Join students and professionals who've already discovered the power 
                of graph theory thinking. Your first session will change how you 
                approach problems forever.
              </p>
              <a 
                href="https://calendly.com/autonate-ai/graph-theory-tutoring" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tutoring;
