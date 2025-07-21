import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, FileText, BookOpen, Database, DollarSign, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedProductThumbnail from '@/components/AnimatedProductThumbnail';

const Products = () => {
  const products = [
    {
      id: 'ai-grant-assistant',
      title: 'AI Grant Drafting Assistant',
      tagline: 'Win More Grants: AI-Powered Workflow for Drafting Compelling, Fundable Proposals',
      description: 'Are you tired of spending weeks crafting grant proposals with uncertain outcomes? This AI-augmented workflow helps researchers draft compelling, fundable grant proposals in a fraction of the time.',
      price: '$149',
      icon: FileText,
      features: [
        'Complete Grant Writing Workflow Guide',
        '25+ AI Prompt Pack for all major AI platforms',
        'Editable Templates (grant structure, budget spreadsheets)',
        'Bonus Video Walkthrough'
      ],
      benefits: [
        'Save 15-20 hours on each grant proposal',
        'Increase your chances of funding with reviewer-optimized language',
        'Craft more persuasive narratives for your research',
        'Generate better budget justifications and project timelines'
      ],
      testimonial: {
        quote: "This AI workflow helped me secure a $150,000 grant in half the time I usually spend writing proposals.",
        author: "Associate Professor, Life Sciences"
      }
    },
    {
      id: 'lit-review-ai',
      title: 'Lit Review AI',
      tagline: 'Transform weeks of literature review chaos into organized, AI-powered research mastery',
      description: 'Your comprehensive solution to the overwhelming task of literature review, transformed into a structured, systematic, and efficient process using cutting-edge AI integration.',
      price: '$129',
      icon: BookOpen,
      features: [
        '13-step comprehensive literature review workflow',
        '24 Specialized AI Prompts across all research phases',
        'Personalized dashboard with progress analytics',
        'Multi-Platform AI Integration'
      ],
      benefits: [
        'Reduce literature review time by 60-70%',
        'Systematic coverage ensures comprehensive analysis',
        'Publication-ready outputs following academic standards',
        'Build research confidence through structured approach'
      ],
      testimonial: {
        quote: "Lit Review AI transformed my literature review process from weeks of chaos to days of organized productivity.",
        author: "PhD Candidate, Psychology"
      }
    },
    {
      id: 'data-pipeline-builder',
      title: 'Cloud Data Pipeline Builder',
      tagline: 'Convert chaotic research data practices into structured, reproducible pipelines',
      description: 'A comprehensive AI-augmented workflow management platform designed for researchers who struggle with data organization, cleaning, and workflow consistency.',
      price: '$129',
      icon: Database,
      features: [
        'Complete 8-Phase Workflow Management System',
        '10+ Expert-Crafted AI Prompts per phase',
        'Interactive Workflow Builder with time estimates',
        'Cloud-Based platform accessible anywhere'
      ],
      benefits: [
        '60-80% reduction in data organization time',
        'Systematic validation prevents common mistakes',
        'Research becomes fully reproducible and auditable',
        'Meets funding agency requirements for data management'
      ],
      testimonial: {
        quote: "This platform cut my data preparation time by two-thirds while dramatically improving the quality of my documentation.",
        author: "Research Scientist, Environmental Science"
      }
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
              Research Workflow{' '}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our premium digital workflow systems combine structured methodologies with AI integration 
              to help researchers achieve better results in less time.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                      <IconComponent className="w-4 h-4" />
                      {product.title}
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                      {product.tagline}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <DollarSign className="w-6 h-6" />
                        {product.price.replace('$', '')}
                        <span className="text-base font-normal text-muted-foreground">one-time purchase</span>
                      </div>
                      <Link to={`/products/${product.id}`} className="btn-primary">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>

                    {/* Testimonial */}
                    <div className="glass-card p-6 border-l-4 border-l-primary">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-3">
                        "{product.testimonial.quote}"
                      </blockquote>
                      <cite className="text-sm text-primary font-medium">
                        — {product.testimonial.author}
                      </cite>
                    </div>
                  </div>

                  {/* Features Card with Thumbnail Placeholder */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="glass-card p-8">
                      {/* Animated Product Thumbnail */}
                      <div className="mb-6">
                        <AnimatedProductThumbnail 
                          title={product.title}
                          className="w-full h-192"
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-6">What You'll Get:</h3>
                      <ul className="space-y-4">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                        <li className="flex items-start gap-3 pt-2 border-t border-border/20">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">
                            <strong>Exclusive Discord Community Access</strong> - Get real-time support, ask questions as you implement workflows, and connect with other researchers using AutoNateAI systems
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Feature <span className="text-gradient">Comparison</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Compare our workflow systems to find the perfect fit for your research needs.
            </p>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left p-6 font-semibold">Feature</th>
                    <th className="text-center p-6 font-semibold">Grant Assistant</th>
                    <th className="text-center p-6 font-semibold">Lit Review AI</th>
                    <th className="text-center p-6 font-semibold">Data Pipeline</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border/10">
                    <td className="p-6 font-medium">One-time Price</td>
                    <td className="p-6 text-center text-primary font-bold">$149</td>
                    <td className="p-6 text-center text-primary font-bold">$129</td>
                    <td className="p-6 text-center text-primary font-bold">$129</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="p-6 font-medium">AI Prompts Included</td>
                    <td className="p-6 text-center">25+</td>
                    <td className="p-6 text-center">24</td>
                    <td className="p-6 text-center">80+</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="p-6 font-medium">Workflow Phases</td>
                    <td className="p-6 text-center">5</td>
                    <td className="p-6 text-center">5</td>
                    <td className="p-6 text-center">8</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="p-6 font-medium">Platform Compatibility</td>
                    <td className="p-6 text-center">✓</td>
                    <td className="p-6 text-center">✓</td>
                    <td className="p-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-border/10">
                    <td className="p-6 font-medium">Time Savings</td>
                    <td className="p-6 text-center">15-20 hours/grant</td>
                    <td className="p-6 text-center">60-70% reduction</td>
                    <td className="p-6 text-center">60-80% reduction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Secure Purchasing with <span className="text-gradient">Stripe</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            All purchases are processed securely through Stripe's payment platform. 
            After completing your purchase, you'll receive immediate access to your chosen workflow system 
            <strong>plus exclusive access to our Discord community</strong> where you can get real-time help as you implement your workflows.
          </p>
          
          <div className="glass-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6">
              Not sure which workflow system is right for your research needs?
            </p>
            <Link to="/contact" className="btn-primary w-full">
              Get Personalized Guidance
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;