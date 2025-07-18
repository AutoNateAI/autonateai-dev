import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
                Get in touch for general inquiries, product questions, or technical support.
              </p>
              <a href="mailto:contact@autonateai.com" className="text-primary hover:text-primary-glow transition-colors font-medium">
                contact@autonateai.com
              </a>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our team for urgent questions or consultation booking.
              </p>
              <a href="tel:+15551234567" className="text-primary hover:text-primary-glow transition-colors font-medium">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Chat with our support team for immediate assistance with your account or products.
              </p>
              <button className="text-primary hover:text-primary-glow transition-colors font-medium">
                Start Chat
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
                <div className="glass-card p-8">
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
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="coaching-consultation">Coaching Consultation</option>
                        <option value="workshop-inquiry">Workshop Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="media-press">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
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
                        placeholder="Tell us about your research needs, questions, or how we can help..."
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 mb-6">
                    <MessageCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We're here to support your research journey. Reach out through any of these channels.
              </p>

              <div className="space-y-8">
                {/* Office Information */}
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">
                        123 Research Drive<br />
                        Innovation District<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                        <div>Saturday: 10:00 AM - 4:00 PM PST</div>
                        <div>Sunday: Closed</div>
                        <div className="text-sm mt-2 text-primary">
                          Emergency support available 24/7 for coaching clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Times */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Expected Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General Inquiries:</span>
                      <span className="text-primary">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technical Support:</span>
                      <span className="text-primary">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coaching Requests:</span>
                      <span className="text-primary">Within 1 business day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Workshop Inquiries:</span>
                      <span className="text-primary">Within 2 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I access products after purchase?",
                answer: "Immediately! After your Stripe payment is processed, you'll be redirected to a page with all materials ready for download."
              },
              {
                question: "Do you offer academic or student discounts?",
                answer: "We offer special pricing for graduate students and bulk packages for departments or institutions. Contact us for details."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us for a full refund."
              },
              {
                question: "Do I need AI platform subscriptions to use your workflows?",
                answer: "Yes, you'll need access to at least one AI platform like ChatGPT Plus, Claude, or NotebookLM. Our workflows are designed to work with all major AI tools."
              },
              {
                question: "How often are the workflows and prompts updated?",
                answer: "We update our prompts and guidelines quarterly to reflect changes in AI capabilities and research best practices. Updates are free for existing customers."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
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