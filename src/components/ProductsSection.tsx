import { ArrowRight, FileText, BookOpen, Database, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const product = {
    id: 'lit-review-ai',
    title: 'Lit Review AI',
    description: 'Transform weeks of literature review chaos into organized, AI-powered research mastery with our comprehensive workflow system.',
    price: '$297',
    icon: BookOpen,
    features: [
      '13-step comprehensive literature review workflow with NotebookLM integration',
      '24+ Specialized AI Prompts across all research phases',
      'Interactive concept graph with visual insight tracking',
      'Multi-platform AI integration (ChatGPT, Claude, NotebookLM)',
      'Advanced visualization tools for research mapping',
      'Progress analytics and workflow management dashboard'
    ],
    gradient: 'from-green-500/20 to-teal-500/20'
  };

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Master Literature Review with{' '}
            <span className="text-gradient">AI-Powered Workflows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solution integrates NotebookLM with advanced visualization tools, 
            designed by research methodology experts to transform your literature review process.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-12 relative group hover:scale-105 transition-all duration-500">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 mx-auto">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>

              {/* Title & Price */}
              <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
              <div className="flex items-center justify-center gap-2 text-2xl text-primary font-bold mb-6">
                <DollarSign className="w-6 h-6" />
                <span>{product.price.replace('$', '')}</span>
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                {product.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={`/products/${product.id}`}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Get Lit Review AI
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <Database className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">NotebookLM Integration</h4>
            <p className="text-sm text-muted-foreground">Seamlessly work with Google's NotebookLM for powerful AI-assisted research</p>
          </div>
          <div className="glass-card p-6 text-center">
            <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Concept Visualization</h4>
            <p className="text-sm text-muted-foreground">Interactive concept graphs that track insights from sources to conclusions</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h4 className="font-bold mb-2">Workflow Management</h4>
            <p className="text-sm text-muted-foreground">13-step guided process with progress tracking and time estimates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;