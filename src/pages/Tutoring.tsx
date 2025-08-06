
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, BookOpen, Users, Target, Brain, Network, CheckCircle, Calendar, Clock, Trophy, DollarSign } from 'lucide-react';

const Tutoring = () => {
  const features = [
    {
      icon: Network,
      title: "AI-Powered Mind Mapping",
      description: "Your child will use ChatGPT, Claude, and NotebookLM to instantly visualize complex situations as connected data points - turning confusion into clarity in seconds"
    },
    {
      icon: Brain,
      title: "Next-Gen Critical Thinking",
      description: "While peers get stuck overthinking, your child will harness AI to handle heavy cognitive processing and focus on creative breakthrough insights"
    },
    {
      icon: Target,
      title: "Competitive Advantage Builder",
      description: "Master techniques that create unfair advantages in school, sports, college applications, and future careers - your child will consistently outperform peers"
    },
    {
      icon: BookOpen,
      title: "Creative Data Wizardry",
      description: "Transform from passive information consumer to active insight creator - viewing problems from multiple angles to discover solutions others never consider"
    }
  ];

  const benefits = [
    "Zoom through homework while peers struggle for hours",
    "Excel in extracurriculars with strategic thinking advantages",
    "Use AI tools like ChatGPT and Claude as thinking amplifiers",
    "Solve problems creatively by viewing data from multiple angles",
    "Build mental models that make complex situations simple",
    "Develop pattern recognition that reveals winning strategies",
    "Think faster and deeper than age-group peers",
    "Create competitive advantages in academics, sports, and social situations",
    "Transform from information consumer to insight wizard",
    "Master curated mind puzzles that build transferable core skills",
    "Push personal intellect to levels that advance our nation's thinking capacity",
    "Become the student others come to for breakthrough solutions"
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
              Transform Your Child Into a{' '}
              <span className="text-gradient animate-gradient">Thinking Wizard</span>
              <br />
              With AI-Enhanced Critical Thinking
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              While peers struggle with homework, stress, and information overload, your child will 
              zoom through challenges using AI-powered graph theory thinking. They'll become the 
              student who finds creative solutions others miss - in academics, sports, and life.
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
              From Overwhelmed to <span className="text-gradient">Unstoppable</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <strong>The Problem:</strong> Students today face information overload, slow analysis, and cookie-cutter thinking. 
              <strong>Our Solution:</strong> AI-enhanced graph theory that turns your child into a creative problem-solving machine 
              who processes complexity with ease and finds insights others completely miss.
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
            <h3 className="text-2xl font-bold mb-8">Your Child Will Become a Thinking Wizard Who Can:</h3>
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
              10-Session <span className="text-gradient">Wizard Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each session includes curated mind puzzles using ChatGPT, NotebookLM, Claude, and Windsurf. 
              Your child will master core techniques that create competitive advantages in every area of life 
              while building thinking skills that push our nation's intellect forward.
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
                Why Parents Choose Our <span className="text-gradient">AI-Enhanced Program</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your child faces unprecedented information complexity. Traditional thinking methods 
                create stress and overwhelm. Our program transforms them into confident problem-solvers 
                who harness AI power while maintaining deep creative insights - the ultimate competitive advantage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Academic Domination</h4>
                    <p className="text-muted-foreground">Zoom through assignments while building deeper understanding - reduce homework stress forever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Future-Proof Career Skills</h4>
                    <p className="text-muted-foreground">Master AI-human collaboration now - become indispensable in tomorrow's workforce</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Life-Wide Competitive Edge</h4>
                    <p className="text-muted-foreground">Excel in sports strategy, social dynamics, college applications - everywhere complex thinking matters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 text-center">
              <Network className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Give Your Child an Unfair Advantage?</h3>
              <p className="text-muted-foreground mb-8">
                Join families who've discovered the power of AI-enhanced critical thinking. 
                Your child's first session will reveal capabilities they never knew they had - 
                transforming stress into confidence, complexity into clarity.
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
