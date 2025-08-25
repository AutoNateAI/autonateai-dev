import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert({
          form_type: 'newsletter',
          email: email.trim(),
          message: 'Newsletter subscription'
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      setEmail('');
      
      toast({
        title: "Subscribed successfully!",
        description: "You'll receive strategic insights and live build updates in your inbox.",
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Error subscribing",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="floating-element absolute top-4 left-4 w-8 h-8 rounded-full bg-primary"></div>
            <div className="floating-element absolute top-8 right-8 w-6 h-6 rounded-full bg-accent"></div>
            <div className="floating-element absolute bottom-6 left-12 w-4 h-4 rounded-full bg-glass-secondary"></div>
            <div className="floating-element absolute bottom-4 right-4 w-10 h-10 rounded-full bg-glass-accent"></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Connected with Our{' '}
              <span className="text-gradient">Business Community</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our exclusive community to receive strategic insights, live build announcements, 
              and business intelligence directly in your inbox. No spam, just valuable content for executives and directors.
            </p>

            {/* Newsletter Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm text-foreground placeholder:text-muted-foreground transition-all duration-200"
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="glass-card p-6 max-w-lg mx-auto border-primary/20">
                <div className="text-primary font-semibold mb-2">Thank you for subscribing!</div>
                <div className="text-muted-foreground">
                  You'll receive our latest strategic insights and live build updates.
                </div>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                No spam, ever
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                Strategic insights
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                Unsubscribe anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;