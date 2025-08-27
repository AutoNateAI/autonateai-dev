import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoRequestForm from '../components/DemoRequestForm';
import { Mail, MessageCircle, Clock, ArrowRight, Building, Zap, Target } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [showDemoForm, setShowDemoForm] = useState(false);

  useEffect(() => {
    const service = searchParams.get('service');
    const demo = searchParams.get('demo');
    
    if (demo && ['foundation', 'grant-recipient', 'venture-capital', 'startup'].includes(demo)) {
      setShowDemoForm(true);
    } else if (service === 'live-build') {
      let message = 'I am interested in scheduling a custom live build session for our company. ';
      message += 'I would like to learn more about how you can build AI-integrated software solutions for our specific business needs.';
      setFormData(prev => ({ ...prev, message, inquiryType: 'custom-build' }));
      
      // Scroll to contact form
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          inquiry_type: formData.inquiryType,
          message: formData.message.trim()
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', inquiryType: 'general', message: '' });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours to discuss your business needs.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your <span className="text-gradient">Business Needs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI-integrated software solutions? Let's explore how 
              critical thinking + intelligent software can make your operations smarter and more efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll respond within 24 hours with information about our software solutions.
              </p>
              <a 
                href="mailto:autonate.ai@gmail.com" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                autonate.ai@gmail.com
              </a>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery Call</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a 30-minute discovery call to discuss your business challenges and opportunities.
              </p>
              <a 
                href="https://calendly.com/autonate-ai/discovery-call" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Schedule Now
              </a>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                We understand business moves fast. We respond to all inquiries within 24 hours.
              </p>
              <span className="text-primary font-medium">
                Always here to help
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {showDemoForm ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">
                    Schedule Your <span className="text-gradient">Dashboard Demo</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Let's discuss how our custom dashboards can transform your operations. 
                    Select the features you're interested in and tell us about your specific needs.
                  </p>
                  <DemoRequestForm />
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">
                    Tell Us About Your <span className="text-gradient">Business</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Help us understand your business needs so we can provide the best software solution.
                  </p>

                  {!isSubmitted ? (
                    <div id="contact-form" className="glass-card p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                              placeholder="Your full name"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                              placeholder="your.email@company.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                            Inquiry Type *
                          </label>
                          <select
                            id="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="custom-build">Custom Software Build</option>
                            <option value="workflow-automation">Workflow Automation</option>
                            <option value="ai-copilot">AI Copilot Development</option>
                            <option value="data-platform">Data Platform</option>
                            <option value="integration">System Integration</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Project Details *
                          </label>
                          <textarea
                            id="message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-200"
                            placeholder="Describe your business challenges, current workflows, and what you'd like to achieve. The more details you provide, the better we can help."
                          ></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary text-lg py-4" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="glass-card p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-green-500">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for your interest in our software solutions. We'll get back to you within 24 hours 
                        to discuss how we can help transform your business with AI-integrated software.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Businesses Choose AutoNateAI</h3>
                
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Industry Experience</h4>
                        <p className="text-muted-foreground text-sm">
                          Our team has built software at Microsoft, Citibank, and Veterans United - 
                          bringing enterprise-level expertise to your business.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">AI-Integrated Solutions</h4>
                        <p className="text-muted-foreground text-sm">
                          We don't just add AI as an afterthought - we design intelligent systems 
                          that think with your business from the ground up.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Transparent Process</h4>
                        <p className="text-muted-foreground text-sm">
                          We build in the open with Lovable.dev, so you see exactly how your 
                          software is created - no black boxes, no smoke and mirrors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-lg font-bold mb-4">Next Steps</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-muted-foreground">Fill out the form or schedule a discovery call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-muted-foreground">We'll analyze your workflows and identify opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-muted-foreground">Get a custom proposal with timeline and pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-muted-foreground">Start building your AI-integrated solution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Questions from <span className="text-gradient">Business Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our approach and what to expect.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What industries do you work with?",
                answer: "We work across all industries - finance, real estate, hospitality, healthcare, manufacturing, and more. Our approach is industry-agnostic because we focus on core business processes and critical thinking frameworks that apply universally."
              },
              {
                question: "How is this different from traditional software development?",
                answer: "We don't just build software - we solve business problems. We apply critical thinking frameworks and graph theory to understand your business as a system, then create AI-integrated solutions that make your operations smarter, not just digital."
              },
              {
                question: "How quickly can you deliver results?",
                answer: "Using Lovable.dev and advanced prompt engineering, we can often prototype working solutions in days or weeks rather than months. Complex systems may take longer, but you'll see progress from day one."
              },
              {
                question: "Do you work with small businesses or just enterprises?",
                answer: "We work with businesses of all sizes. Our approach scales from small teams needing workflow automation to large enterprises requiring complex AI-integrated systems. Every business deserves intelligent software."
              },
              {
                question: "What if we're not tech-savvy?",
                answer: "Perfect! We specialize in making complex technology simple. We handle all the technical complexity while keeping you involved in the business logic. You focus on your expertise, we handle the AI and software engineering."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;