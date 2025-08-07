import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  studentAge: string;
  message: string;
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    studentAge: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const service = searchParams.get('service');
    
    if (service === 'tutoring') {
      let message = 'I am interested in tutoring services for my child. ';
      message += 'I would like to learn more about how your AI-enhanced critical thinking tutoring can help my student succeed.';
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
          company: formData.studentAge.trim() || null,
          inquiry_type: 'tutoring',
          message: formData.message.trim()
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', studentAge: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours to discuss your child's tutoring needs.",
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
              Let's Discuss Your Child's <span className="text-gradient">Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to give your middle school, high school, or college student the critical thinking 
              skills that will set them apart? Let's talk about how our tutoring can help.
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
                Send us an email and we'll respond within 24 hours with information about our tutoring programs.
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
              <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a 15-minute call to discuss your child's learning goals and how we can help.
              </p>
              <a 
                href="https://calendly.com/autonateai" 
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
                We understand parents are busy. We respond to all inquiries within 24 hours.
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
              <h2 className="text-3xl font-bold mb-6">
                Tell Us About Your <span className="text-gradient">Student</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Help us understand your child's needs so we can provide the best tutoring experience.
              </p>

              {!isSubmitted ? (
                <div id="contact-form" className="glass-card p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Parent/Guardian Name *
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
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="studentAge" className="block text-sm font-medium mb-2">
                        Student Grade Level/Age
                      </label>
                      <input
                        type="text"
                        id="studentAge"
                        value={formData.studentAge}
                        onChange={(e) => setFormData({...formData, studentAge: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                        placeholder="e.g., 8th grade, High School Junior, College Freshman"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tell Us About Your Student *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-200"
                        placeholder="What are your child's learning goals? Any specific challenges or interests? What do you hope they'll gain from tutoring?"
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
                    Thank you for your interest in our tutoring services. We'll get back to you within 24 hours 
                    to discuss how we can help your child develop critical thinking skills.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Parents Choose Us</h3>
                
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <span className="text-primary font-bold">🎯</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Industry Experience</h4>
                        <p className="text-muted-foreground text-sm">
                          Your child learns from someone who has worked at Microsoft, Citibank, 
                          and Veterans United - bringing real-world perspective to education.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <span className="text-primary font-bold">🧠</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Future-Ready Skills</h4>
                        <p className="text-muted-foreground text-sm">
                          Critical thinking, systems reasoning, and AI literacy - the skills 
                          that will matter most in your child's future career.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                        <span className="text-primary font-bold">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Personalized Approach</h4>
                        <p className="text-muted-foreground text-sm">
                          Every session is tailored to your child's grade level, interests, 
                          and learning style for maximum engagement and growth.
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
                    <span className="text-muted-foreground">Fill out the form or schedule a consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-muted-foreground">We'll discuss your child's needs and goals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-muted-foreground">Start building critical thinking skills together</span>
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
              Questions from <span className="text-gradient">Parents</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our tutoring approach and what to expect.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What age groups do you work with?",
                answer: "We work with middle school students (grades 6-8), high school students (grades 9-12), and undergraduates. Our approach is adapted to each student's developmental level and interests."
              },
              {
                question: "How is this different from traditional tutoring?",
                answer: "Instead of just helping with homework, we teach fundamental thinking skills that apply across all subjects. Students learn to use AI tools, understand systems thinking, and develop mental models used by successful professionals."
              },
              {
                question: "Do you help with specific school subjects?",
                answer: "While our focus is on critical thinking skills, these naturally enhance performance in all subjects. Many parents see improvements in math, science, and writing as students learn to approach problems more systematically."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most students show improved problem-solving confidence within the first few sessions. The deeper critical thinking skills develop over months, creating lasting advantages that benefit them throughout their education and career."
              },
              {
                question: "Is this appropriate for students who aren't interested in technology?",
                answer: "Absolutely! While we use AI tools, the focus is on thinking skills that apply everywhere - from analyzing literature to understanding history to making personal decisions. Technology is just one tool among many."
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