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
              About AutoNateAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering researchers with AI-augmented workflows to accelerate discovery and innovation
            </p>
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
                  <p className="text-primary font-semibold">Founder & CEO</p>
                  <p className="text-muted-foreground mt-2">Computer Science, University of Michigan 2019</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Meet the Founder</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    AutoNate is the visionary founder behind AutoNateAI, bringing a unique blend of industry experience 
                    and academic expertise to the world of AI-augmented research workflows.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Most recently, Nate worked in research and development for Generative AI at Veterans United Home Loans, 
                    a mortgage company specializing in veteran loans. This role deepened his understanding of how AI can 
                    transform complex, document-heavy processes in regulated industries.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Prior to that, he spent two years as an entrepreneur building generative AI tools and conducting 
                    prompt engineering to teach AI systems how to code better based on natural language inputs - 
                    experience that directly informs AutoNateAI's approach to research workflow optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Professional Journey</h3>
            
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
                  Developed financial tools and front-end applications, gaining experience 
                  in high-stakes, compliance-driven development environments.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">UM</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">University of Michigan</h4>
                <p className="text-primary font-medium mb-2">Teaching Assistant</p>
                <p className="text-muted-foreground text-sm">
                  TA for Computer Security (teaching Wi-Fi and website hacking) and 
                  Intro to Computer Science for graduate students transitioning to coding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Unique Expertise</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What makes AutoNate uniquely qualified to build AI-augmented research workflows
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Graph Theory & Connections</h4>
                  <p className="text-muted-foreground">
                    Nate is a master of connections, leveraging graph theory and Neo4J to discover 
                    innovative ways to connect ideas, concepts, and research findings. This systems 
                    thinking approach enables unique insights into research workflow optimization.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">AI Augmentation Philosophy</h4>
                  <p className="text-muted-foreground">
                    Rather than replacing human intelligence, Nate focuses on using generative AI 
                    to augment the cognitively intensive portions of research work, allowing 
                    researchers to focus on higher-level thinking and creativity.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-subtle">
                <h4 className="text-2xl font-bold text-foreground mb-4">Research & Development</h4>
                <p className="text-muted-foreground mb-4">
                  Nate's extensive research in his free time, combined with his professional network 
                  and hands-on experience with cutting-edge AI tools, positions him at the forefront 
                  of AI-augmented research methodologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AI Research</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Prompt Engineering</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Graph Theory</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Systems Thinking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              AutoNateAI exists to bridge the gap between cutting-edge AI capabilities and practical 
              research workflows. We believe that by systematically augmenting the most cognitively 
              intensive aspects of research with AI, we can accelerate discovery while preserving 
              the critical thinking and creativity that makes research truly valuable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                Explore Our Solutions
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
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