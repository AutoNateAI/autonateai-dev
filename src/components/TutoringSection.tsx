
import { ArrowRight, Network, Brain, Users, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const TutoringSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Master Critical Thinking Through{' '}
            <span className="text-gradient">Graph Theory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform how you analyze problems, find hidden connections, and think like 
            a master researcher. Perfect for middle school, high school, and undergraduate students.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <Network className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">Relational Thinking</h3>
              <p className="text-muted-foreground">
                Learn to see the world as connected nodes and relationships, 
                revealing insights others miss.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <Brain className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Mental Models</h3>
              <p className="text-muted-foreground">
                Build powerful frameworks for understanding complex situations 
                and making better decisions.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <Target className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Research Excellence</h3>
              <p className="text-muted-foreground">
                Master the art of decomposing problems and finding paths to 
                breakthrough insights.
              </p>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="glass-card p-12 text-center relative group hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">1-on-1 Graph Theory Tutoring</h3>
              
              <div className="text-3xl font-bold text-primary mb-2">$1,500</div>
              <div className="text-lg text-muted-foreground mb-4">10 Sessions Total</div>
              
              <div className="bg-muted/20 p-4 rounded-lg mb-6 text-sm">
                <div className="font-medium mb-2">Flexible Payment Structure:</div>
                <div className="space-y-1 text-left">
                  <div>• Try the first session</div>
                  <div>• Pay for first 5 sessions if you continue</div>
                  <div>• Pay for remaining 5 sessions by session 6</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Personalized tutoring that teaches you to think in graph theory concepts, 
                understand the "empty space" between connections, and build multiple 
                relational maps to find unique insights.
              </p>

              <div className="space-y-4">
                <a
                  href="https://calendly.com/autonate-ai/graph-theory-tutoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule First Session
                </a>
                
                <Link
                  to="/tutoring"
                  className="btn-glass w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-muted-foreground">Comprehensive Sessions</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">1:1</div>
            <div className="text-muted-foreground">Personalized Learning</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-glass-secondary mb-2">∞</div>
            <div className="text-muted-foreground">Lifelong Thinking Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutoringSection;
