import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Clock, Award, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Coaching = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    service: '',
    researchArea: '',
    message: '',
    timeline: 'flexible'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleRequestCoaching = (serviceType: string) => {
    const form = document.getElementById('coaching-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill the service field
      setTimeout(() => {
        setFormData(prev => ({ ...prev, service: serviceType }));
      }, 100);
    }
  };

  const individualServices = [
    {
      title: 'AI Research Workflow Optimization',
      price: '$299',
      duration: '90-minute session',
      description: 'Perfect for graduate students, postdocs, and faculty members looking to optimize their research workflows with AI tools.',
      features: [
        'Personal assessment of your current research workflow',
        'Custom AI integration strategy for your specific research domain',
        'Personalized prompt engineering for your research questions',
        'Follow-up implementation plan and resource package',
        'Access to exclusive Discord community channel'
      ]
    },
    {
      title: 'Grant Strategy & Review',
      price: '$499',
      duration: 'per proposal',
      description: 'Comprehensive review and strategic guidance for grant proposals.',
      features: [
        'In-depth review of your grant proposal draft',
        'Strategic recommendations for strengthening your application',
        'AI-augmented language optimization for reviewer engagement',
        '90-minute consultation to address specific concerns',
        'Access to exclusive Discord community channel'
      ]
    },
    {
      title: 'Literature Review Acceleration',
      price: '$349',
      duration: 'per session',
      description: 'Structured methodology and AI integration for efficient literature reviews.',
      features: [
        'Structured methodology for your specific literature review',
        'Custom AI prompt development for your research domain',
        'Synthesis strategy for integrating diverse literature',
        'Framework development for organizing complex findings',
        'Access to exclusive Discord community channel'
      ]
    }
  ];

  const teamService = {
    title: 'Team Workflow Implementation',
    price: '$1,499',
    duration: 'up to 8 researchers',
    description: 'Designed for lab groups, departments, and research teams looking to implement consistent AI-augmented workflows.',
    features: [
      'Assessment of current team research practices',
      'Custom workflow development for your team\'s needs',
      'Group training session (3 hours virtual or in-person)',
      'Implementation toolkit with templates and guides',
      '30-day follow-up session to address challenges',
      'Access to exclusive Discord community channel'
    ]
  };

  const coaches = [
    {
      name: 'AutoNate',
      title: 'AI Research Methodology Expert',
      bio: 'Specialized AI coach with extensive experience in research workflow optimization, grant writing strategies, and AI-augmented academic processes.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Private AI Research{' '}
              <span className="text-gradient">Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Maximize your research potential with one-on-one coaching from our team of 
              experienced research methodology experts and AI integration specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Individual <span className="text-gradient">Researcher Coaching</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect for graduate students, postdocs, and faculty members looking to optimize their research workflows with AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {individualServices.map((service, index) => (
              <div key={index} className="glass-card p-8 relative group hover:scale-105 transition-all duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary mb-2">
                    <DollarSign className="w-6 h-6" />
                    {service.price.replace('$', '')}
                    <span className="text-base font-normal text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleRequestCoaching('workflow')}
                  className="w-full btn-primary block text-center"
                >
                  Request Session
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Coaching */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Research Group <span className="text-gradient">Coaching</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed for lab groups, departments, and research teams looking to implement consistent AI-augmented workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 border-2 border-primary/20 relative">
              <div className="absolute top-4 right-4">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{teamService.title}</h3>
                  <div className="flex items-center gap-2 text-3xl font-bold text-primary mb-4">
                    <DollarSign className="w-8 h-8" />
                    {teamService.price.replace('$', '')}
                    <span className="text-lg font-normal text-muted-foreground">
                      {teamService.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {teamService.description}
                  </p>
                  <button 
                    onClick={() => handleRequestCoaching('team')}
                    className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                  >
                    Request Team Coaching
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>

                <div>
                  <ul className="space-y-4">
                    {teamService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet Your <span className="text-gradient">AI Coach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AutoNate combines deep academic expertise with cutting-edge AI implementation experience to transform your research workflow.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {coaches.map((coach, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                <div className="text-primary font-medium mb-4">{coach.title}</div>
                <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Request <span className="text-gradient">Coaching Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below, and we'll contact you within 1 business day to discuss how we can support your research. All coaching clients get access to our exclusive Discord community for ongoing support.
            </p>
          </div>

          <div id="coaching-form" className="glass-card p-8">
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
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium mb-2">
                    Institution/Organization
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Interested Service *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="workflow">AI Research Workflow Optimization</option>
                    <option value="grant">Grant Strategy & Review</option>
                    <option value="literature">Literature Review Acceleration</option>
                    <option value="team">Team Workflow Implementation</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="researchArea" className="block text-sm font-medium mb-2">
                  Research Area/Field *
                </label>
                <input
                  type="text"
                  id="researchArea"
                  required
                  value={formData.researchArea}
                  onChange={(e) => setFormData({...formData, researchArea: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Brief Description of Your Needs *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-200"
                ></textarea>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
                >
                  <option value="urgent">Within 1 week</option>
                  <option value="soon">Within 2-3 weeks</option>
                  <option value="flexible">Flexible (1+ month)</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4">
                Submit Request
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaching;