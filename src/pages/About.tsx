import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cpu, Database, Workflow, Bot, BarChart3, Link2, Users, Target, Lightbulb, Zap } from 'lucide-react';

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
              About AutoNateAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The bridge between critical thinking and intelligent software - building AI-integrated solutions that make businesses smarter, faster, and more adaptive.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We don't just code. We think. We model. We solve. Using critical thinking frameworks, 
                graph theory, and advanced prompt engineering, we design intelligent software systems 
                that unlock new opportunities for businesses worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Think & Model</h3>
                <p className="text-muted-foreground">
                  We apply advanced critical thinking models to understand complex problems before building solutions.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Integrated</h3>
                <p className="text-muted-foreground">
                  Custom software infused with AI across workflows, creating intelligent business solutions.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent</h3>
                <p className="text-muted-foreground">
                  Built in the open with modern tools like Lovable.dev, ensuring transparency and quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">What We Build</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Workflow Automation</h4>
                <p className="text-muted-foreground text-sm">
                  Intelligent automation systems that save time and cost while improving accuracy and efficiency.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">AI Copilots</h4>
                <p className="text-muted-foreground text-sm">
                  Custom AI assistants tailored to your industry and specific business needs.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Intelligent Dashboards</h4>
                <p className="text-muted-foreground text-sm">
                  Data platforms and dashboards that provide actionable insights and real-time intelligence.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Link2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Cross-tool Integrations</h4>
                <p className="text-muted-foreground text-sm">
                  Seamless connections between your existing tools and systems, creating unified workflows.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Custom Software Builds</h4>
                <p className="text-muted-foreground text-sm">
                  Full-scale applications infused with AI across the entire workflow and user experience.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Data Pipeline Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Advanced data processing and pipeline systems that handle complex business intelligence needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20">
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
                    From the beautiful islands of Hawaii, AutoNate founded AutoNateAI LLC with a vision to build world-class AI-integrated software that transforms how businesses operate. As a proud Hawaii-based company, we combine Silicon Valley innovation with the collaborative aloha spirit.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    AutoNate has strategically handpicked a distinguished team of industry leaders - from Microsoft security engineers to Citibank fintech specialists. Together, they represent decades of combined expertise across AI development, software engineering, and enterprise solutions.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Under AutoNate's leadership, our team applies critical thinking frameworks and advanced problem-solving methodologies to deliver intelligent software solutions. We're building the future of AI-integrated business software from Hawaii, serving clients worldwide with technical excellence and personalized service.
                  </p>
                  
                  <div className="mt-6 p-4 bg-gradient-subtle rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium">🌺 Incorporated in Hawaii • Building Global Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="py-20 bg-muted/5">
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
                  Advanced security tools and infrastructure development, with expertise in 
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
                  Financial software development in high-stakes, compliance-driven environments 
                  requiring precision and critical thinking.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">UM</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">University of Michigan</h4>
                <p className="text-primary font-medium mb-2">Teaching & Research</p>
                <p className="text-muted-foreground text-sm">
                  Computer Security and Computer Science education, specializing in 
                  complex problem solving and systems thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose AutoNateAI</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another software company - we're your thinking partners in building intelligent solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Critical Thinking First</h4>
                  <p className="text-muted-foreground">
                    We apply graph theory, systems thinking, and advanced problem-solving frameworks 
                    before writing a single line of code.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">AI-Native Development</h4>
                  <p className="text-muted-foreground">
                    Every solution is designed from the ground up with AI integration, 
                    not as an afterthought.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Transparent Process</h4>
                  <p className="text-muted-foreground">
                    Built in the open with modern tools, you can see exactly how we work 
                    and what we deliver.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-subtle">
                <h4 className="text-2xl font-bold text-foreground mb-4">Real-World Impact</h4>
                <p className="text-muted-foreground mb-4">
                  From workflow automation to intelligent dashboards, our solutions deliver 
                  measurable business value through intelligent software design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AI Integration</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Systems Thinking</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Custom Software</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Business Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Build Intelligent Software?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Let's discuss how critical thinking and AI can transform your business operations. 
              From concept to deployment, we're your partners in building smarter software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link to="/live-builds" className="btn-secondary">
                See Our Live Builds
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