import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Grants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Grants & Investment Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering with forward-thinking organizations to accelerate AI-enhanced education and workforce development
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Transforming Education for the AI Era</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                AutoNateAI is positioned at the intersection of artificial intelligence and education, developing 
                scalable solutions that prepare learners for an AI-integrated future while addressing critical 
                skills gaps in the modern workforce.
              </p>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Market Opportunity</h3>
                
                <div className="space-y-4">
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">$366B Global EdTech Market</h4>
                    <p className="text-muted-foreground">
                      The education technology market is experiencing unprecedented growth, with AI-powered 
                      solutions representing the fastest-growing segment.
                    </p>
                  </div>

                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">Critical Skills Gap</h4>
                    <p className="text-muted-foreground">
                      85% of jobs that will exist in 2030 haven't been invented yet. Traditional education 
                      models are failing to prepare students for this reality.
                    </p>
                  </div>

                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">AI Integration Imperative</h4>
                    <p className="text-muted-foreground">
                      Organizations across all sectors need workforce development solutions that teach 
                      AI collaboration and critical thinking skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-subtle">
                <h4 className="text-2xl font-bold text-foreground mb-6">Investment Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Proven team with industry expertise from Microsoft, Citibank, and top universities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Scalable platform addressing critical workforce development needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Multiple revenue streams: B2C tutoring, B2B training, enterprise solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">First-mover advantage in AI-enhanced critical thinking education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Opportunities */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Target Grant Categories</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Education Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Federal and state grants focused on educational technology innovation, 
                  STEM education enhancement, and workforce development initiatives.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">AI Research & Development</h4>
                <p className="text-muted-foreground text-sm">
                  NSF, NIH, and other research grants supporting AI applications in education, 
                  human-AI collaboration studies, and ethical AI development.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🏢</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Workforce Development</h4>
                <p className="text-muted-foreground text-sm">
                  Department of Labor grants, industry partnerships, and skills-based 
                  training initiatives addressing the future of work.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🌟</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Social Impact</h4>
                <p className="text-muted-foreground text-sm">
                  Foundation grants focused on educational equity, digital literacy, 
                  and preparing underserved communities for the AI economy.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🔬</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Small Business Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  SBIR/STTR grants supporting commercialization of educational innovations 
                  and technology transfer from research to market.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🌐</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">International Collaboration</h4>
                <p className="text-muted-foreground text-sm">
                  Global partnerships and international grants focused on cross-cultural 
                  education technology and worldwide workforce preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Proposition */}
        <section className="py-20 bg-muted/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Investment Proposition</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us in building the future of education and workforce development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Scalable Technology Platform</h4>
                  <p className="text-muted-foreground">
                    Our AI-enhanced learning platform can serve millions of learners across multiple 
                    market segments, from K-12 education to enterprise training.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Proven Market Demand</h4>
                  <p className="text-muted-foreground">
                    Organizations worldwide are actively seeking solutions to bridge the AI skills gap 
                    and prepare their workforce for the future of work.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Strategic Partnerships</h4>
                  <p className="text-muted-foreground">
                    We're building relationships with educational institutions, Fortune 500 companies, 
                    and government agencies to accelerate adoption and impact.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 bg-gradient-subtle">
                <h4 className="text-2xl font-bold text-foreground mb-6">Funding Priorities</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-foreground">Platform Development</h5>
                    <p className="text-muted-foreground text-sm">Scaling our AI-powered learning platform and curriculum development</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-foreground">Market Expansion</h5>
                    <p className="text-muted-foreground text-sm">Geographic expansion and new market segment penetration</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-foreground">Research & Innovation</h5>
                    <p className="text-muted-foreground text-sm">Advancing human-AI collaboration research and educational methodologies</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-semibold text-foreground">Team Growth</h5>
                    <p className="text-muted-foreground text-sm">Expanding our team of expert educators and AI researchers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Partner With Us</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Whether you're a grant foundation, investment firm, or strategic partner, 
              we invite you to join us in revolutionizing education for the AI age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Schedule a Partnership Discussion
              </Link>
              <a 
                href="mailto:partnerships@autonateai.com" 
                className="btn-secondary"
              >
                Download Our Pitch Deck
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Grants;