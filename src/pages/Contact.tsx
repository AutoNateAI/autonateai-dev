import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const service = searchParams.get('service');
    const type = searchParams.get('type');
    
    if (service === 'coaching') {
      let message = 'I am interested in your coaching services. ';
      if (type === 'individual') {
        message += 'Specifically, I would like to schedule an individual coaching session to optimize my research workflow with AI tools.';
      } else if (type === 'team') {
        message += 'Specifically, I would like to discuss team coaching for our research group to implement AI-augmented workflows.';
      }
      setFormData(prev => ({ ...prev, message }));
      
      // Scroll to contact form
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have questions about our AI-powered research workflows? Need personalized guidance for your research? 
              We're here to help you transform your research process.
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
                Send us an email and we'll respond within 24 hours.
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
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help with your research workflow needs.
              </p>
              <a 
                href="mailto:autonate.ai@gmail.com" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                Send us an email
              </a>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Chat with our team during business hours for instant help.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                Start Live Chat
              </button>
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
              <h2 className="text-3xl font-bold mb-6">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
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
                          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
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
                          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Organization/Institution
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                        placeholder="Your organization (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none"
                        placeholder="Tell us about your research needs or questions..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full btn-primary text-lg py-4">
                      Send Message
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
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        Honolulu, Hawaii<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM HST<br />
                        Saturday: 10:00 AM - 4:00 PM HST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Times</h4>
                      <p className="text-muted-foreground">
                        Email: Within 24 hours<br />
                        Contact Form: Same day<br />
                        We respond promptly during business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a href="/coaching" className="block text-primary hover:text-primary/80 transition-colors">
                    Schedule a Coaching Session
                  </a>
                  <a href="/workshops" className="block text-primary hover:text-primary/80 transition-colors">
                    Request a Workshop
                  </a>
                  <a href="/products" className="block text-primary hover:text-primary/80 transition-colors">
                    Browse Our Products
                  </a>
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our research workflow solutions.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I implement your AI workflows?",
                answer: "Most researchers start seeing benefits within the first week. Our digital products include step-by-step guides that can be implemented immediately, while coaching sessions provide personalized implementation strategies."
              },
              {
                question: "Do your workflows work with different AI platforms?",
                answer: "Yes! Our methodologies are platform-agnostic and work with ChatGPT, Claude, NotebookLM, Windsurf, and other major AI platforms. We provide specific prompts and adaptations for each platform."
              },
              {
                question: "What kind of support is included?",
                answer: "All digital products include comprehensive documentation and email support. Coaching sessions include follow-up support, and workshops include 30-day implementation assistance."
              },
              {
                question: "Can you work with our specific research domain?",
                answer: "Absolutely! Our workflows are designed to be adaptable across research domains. Our coaching and custom workshop services specialize in tailoring methodologies to your specific field and requirements."
              },
              {
                question: "What's the difference between your products and coaching?",
                answer: "Our digital products provide complete self-guided workflows you can implement immediately. Coaching offers personalized guidance and adaptation of these workflows to your specific research context and challenges."
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