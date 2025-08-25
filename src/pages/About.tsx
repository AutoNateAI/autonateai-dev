import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              About AutoNateAI Tutoring
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering the next generation with AI-enhanced critical thinking skills and real-world mental models
            </p>
          </div>
        </section>

        {/* Why Your Child Needs This */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Your Child Needs These Skills Now</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                In today's rapidly changing world, traditional education isn't enough. Your child needs to master 
                the thinking tools that top professionals use to succeed in the AI age.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Future-Proof Skills</h3>
                <p className="text-muted-foreground">
                  While AI changes every industry, critical thinking and systems reasoning become more valuable, not less.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Early Advantage</h3>
                <p className="text-muted-foreground">
                  Students who master these concepts young develop superior problem-solving abilities that last a lifetime.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Real-World Application</h3>
                <p className="text-muted-foreground">
                  These aren't abstract concepts - they're the exact tools used by successful entrepreneurs and innovators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">N</span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">AutoNate</h2>
                  <p className="text-primary font-semibold">Founder & CEO, AutoNateAI LLC</p>
                  <p className="text-muted-foreground mt-2">Computer Science, University of Michigan 2019</p>
                  <div className="mt-4 px-4 py-2 bg-primary/10 rounded-lg">
                    <p className="text-xs text-primary font-medium">Hawaii-Based • Building Tech Globally</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Visionary Leadership from Paradise</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    From the beautiful islands of Hawaii, AutoNate founded AutoNateAI LLC with a vision to build world-class technology that impacts students globally. As a proud Hawaii-based company, we combine the innovative spirit of Silicon Valley with the collaborative aloha culture of the islands.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    AutoNate has strategically handpicked a distinguished team of industry leaders who excel in their respective fields - from Microsoft security engineers to Citibank fintech specialists. Together, they represent decades of combined expertise across AI development, education, and enterprise solutions.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Under AutoNate's leadership, our team combines cutting-edge AI research with proven educational methodologies to deliver transformative learning experiences. We're building the future of education from Hawaii, serving students worldwide with the technical excellence of top-tier companies and the personalized touch of island hospitality.
                  </p>
                  
                  <div className="mt-6 p-4 bg-gradient-subtle rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium">🌺 Incorporated in Hawaii • Building Global Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">World-Class Team Expertise</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">MS</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Microsoft</h4>
                <p className="text-primary font-medium mb-2">Security Software Engineer</p>
                <p className="text-muted-foreground text-sm">
                  Built advanced security tools and infrastructure, developing expertise in 
                  complex system design and cybersecurity applications.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Citibank</h4>
                <p className="text-primary font-medium mb-2">Fintech Engineer</p>
                <p className="text-muted-foreground text-sm">
                  Developed financial tools and applications in high-stakes, 
                  compliance-driven environments requiring precision and critical thinking.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">UM</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">University of Michigan</h4>
                <p className="text-primary font-medium mb-2">Teaching Assistant</p>
                <p className="text-muted-foreground text-sm">
                  TA for Computer Security and Intro to Computer Science, 
                  helping students transition from confusion to mastery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes This Special */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">What Makes Our Tutoring Unique</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This isn't traditional tutoring - it's teaching your child the mental models 
                that successful professionals use every day
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Graph Theory & Systems Thinking</h4>
                  <p className="text-muted-foreground">
                    Your child will learn to see connections between ideas, understand complex systems, 
                    and think in ways that give them massive advantages in problem-solving and creativity.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">AI as a Thinking Partner</h4>
                  <p className="text-muted-foreground">
                    Rather than fearing AI, your child will learn to use it as a powerful thinking tool, 
                    developing skills that will be essential in their future career.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-subtle">
                <h4 className="text-2xl font-bold text-foreground mb-4">Real-World Mental Models</h4>
                <p className="text-muted-foreground mb-4">
                  From first principles thinking to systems analysis, your child will master the 
                  cognitive frameworks used by top performers in every field.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Critical Thinking</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Systems Analysis</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Pattern Recognition</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Logical Reasoning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Testimonials */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">What Parents Are Saying</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-muted-foreground text-sm">Mother of High School Junior</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "My daughter went from struggling with complex problems to approaching them systematically. 
                  The critical thinking skills she's learning are already showing up in her other classes."
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">D</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">David L.</h4>
                    <p className="text-muted-foreground text-sm">Father of Middle School Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "These aren't just academic skills - they're life skills. My son is more confident 
                  tackling any challenge because he has these mental frameworks to rely on."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Give Your Child the Ultimate Advantage</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              In a world where AI is changing everything, critical thinking and systems reasoning 
              become more valuable than ever. Give your child the tools to succeed in any field 
              they choose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutoring" className="btn-primary">
                Start Their Journey Today
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;