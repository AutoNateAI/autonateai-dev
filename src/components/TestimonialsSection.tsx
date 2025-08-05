import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AutoNate's literature review workflow cut my dissertation research time by more than half. The systematic approach he taught made organizing 200+ papers actually manageable.",
      author: "Graduate Student",
      role: "PhD Candidate",
      rating: 5
    },
    {
      quote: "The data analytics workflow from AutoNate's coaching completely transformed how our lab handles research data. We went from chaos to a structured, reproducible pipeline.",
      author: "Research Team Lead",
      role: "Lab Manager", 
      rating: 5
    },
    {
      quote: "After working with AutoNate on literature workflows, I can now synthesize complex research findings in days instead of weeks. The framework is a game-changer.",
      author: "Academic Researcher",
      role: "Postdoctoral Fellow",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from researchers who have implemented AutoNate's coaching workflows and methodologies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 relative group hover:scale-105 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/20 pt-6">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;