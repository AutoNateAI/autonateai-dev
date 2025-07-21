import { ArrowRight, FileText, BookOpen, Database, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      id: 'ai-grant-assistant',
      title: 'AI Grant Drafting Assistant',
      description: 'Win more grants with our AI-powered workflow for drafting compelling, fundable proposals.',
      price: '$149',
      icon: FileText,
      features: [
        'Complete Grant Writing Workflow Guide',
        '25+ AI Prompt Pack for all major AI platforms',
        'Editable Templates (grant structure, budget spreadsheets)',
        'Bonus Video Walkthrough'
      ],
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 'lit-review-ai',
      title: 'Lit Review AI',
      description: 'Transform weeks of literature review chaos into organized, AI-powered research mastery.',
      price: '$129',
      icon: BookOpen,
      features: [
        '13-step comprehensive literature review workflow',
        '24 Specialized AI Prompts across all research phases',
        'Personalized dashboard with progress analytics',
        'Multi-Platform AI Integration'
      ],
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'data-pipeline-builder',
      title: 'Cloud Data Pipeline Builder',
      description: 'Convert chaotic research data practices into structured, reproducible pipelines.',
      price: '$129',
      icon: Database,
      features: [
        'Complete 8-Phase Workflow Management System',
        '10+ Expert-Crafted AI Prompts per phase',
        'Interactive Workflow Builder with time estimates',
        'Cloud-Based platform accessible anywhere'
      ],
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Premium{' '}
            <span className="text-gradient">Digital Workflow Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed by research methodology experts to accelerate 
            your research process while maintaining academic rigor.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="glass-card p-8 relative group hover:scale-105 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <div className="flex items-center gap-1 text-primary font-bold">
                      <DollarSign className="w-4 h-4" />
                      <span>{product.price.replace('$', '')}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/products" className="btn-primary text-lg px-8 py-4 flex items-center justify-center max-w-sm mx-auto">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;