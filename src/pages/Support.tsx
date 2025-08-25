import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Mail, BookOpen, Zap, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get help with AutoNateAI tools and maximize your research productivity. We're here to support your academic journey.
            </p>
          </div>

          {/* Quick Help Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat Support</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help from our support team during business hours.
              </p>
              <button className="btn-primary w-full">Start Live Chat</button>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us a detailed message and we'll respond within 24 hours.
              </p>
              <a href="mailto:support@autonateai.com" className="btn-secondary w-full block text-center">
                Email Us
              </a>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Base</h3>
              <p className="text-muted-foreground mb-4">
                Browse our comprehensive guides and tutorials.
              </p>
              <Link to="/blog" className="btn-secondary w-full block text-center">
                Browse Articles
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">How do I get started with AutoNateAI?</h3>
                  <p className="text-muted-foreground">
                    Simply create an account, choose the tool that fits your research needs (Literature Review AI, Grant Assistant, or Data Pipeline Builder), and follow our onboarding guides to set up your first project.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">What file formats do you support?</h3>
                  <p className="text-muted-foreground">
                    We support PDF, DOC, DOCX, TXT, and CSV files. Our AI can process academic papers, datasets, and various document types commonly used in research.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">Is my research data secure?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and strict access controls. Your research data remains confidential and is never shared without your permission.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">Can I cancel my subscription anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period, and can export all your data before cancellation.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you offer academic discounts?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer special pricing for students, faculty, and educational institutions. Contact our support team with your academic credentials for discount eligibility.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-3">How accurate are the AI-generated insights?</h3>
                  <p className="text-muted-foreground">
                    Our AI models are trained on vast academic datasets and continuously improved. While highly accurate, we always recommend human review and verification of AI-generated content for academic work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Hours */}
          <section className="glass-card p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9 AM - 6 PM PST
                </p>
              </div>
              <div>
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  Live Chat: Instant<br />
                  Email: Within 24 hours
                </p>
              </div>
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Priority Support</h3>
                <p className="text-muted-foreground">
                  Premium subscribers get<br />
                  priority assistance
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our dedicated support team is here to help you succeed with your research. Don't hesitate to reach out with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@autonateai.com" className="btn-primary">
                Contact Support Team
              </a>
              <Link to="/contact" className="btn-secondary">
                Schedule a Call
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;