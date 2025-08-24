import { CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    "You get software that doesn't just \"work\" — it thinks with you.",
    "You gain an AI-integrated system designed with the future in mind.",
    "You partner with engineers who know how to train AI, prompt AI, and guide AI to code better.",
    "You see our process openly — no black boxes, no smoke and mirrors."
  ];

  return (
    <section className="py-24 relative bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Businesses Choose{' '}
            <span className="text-gradient">AutoNateAI</span>
          </h2>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 glass-card p-6">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;