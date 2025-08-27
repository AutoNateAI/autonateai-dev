import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Plus, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface DemoFormData {
  name: string;
  email: string;
  company: string;
  audienceType: string;
  selectedFeatures: string[];
  aiFeatures: string[];
  customFeatureRequest: string;
  projectDescription: string;
  budgetRange: string;
  timeline: string;
}

const DemoRequestForm = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    company: '',
    audienceType: '',
    selectedFeatures: [],
    aiFeatures: [],
    customFeatureRequest: '',
    projectDescription: '',
    budgetRange: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const audienceFeatures = {
    foundation: {
      standard: [
        'Grant Campaign Dashboard',
        'Impact Measurement Tracker',
        'Grant Recipient Portal',
        'Funding Distribution Tracker',
        'Milestone Progress Monitor',
        'Compliance Dashboard'
      ],
      ai: [
        'AI Report Generator',
        'Predictive Impact Analysis',
        'Automated Compliance Monitoring',
        'Smart Data Summarization',
        'AI-Powered Grant Matching',
        'Intelligent Risk Assessment'
      ]
    },
    'grant-recipient': {
      standard: [
        'Research Progress Dashboard',
        'Budget Tracking System',
        'Team Collaboration Portal',
        'Milestone Reporting Tool',
        'Document Management Hub',
        'Compliance Tracker'
      ],
      ai: [
        'AI Research Assistant',
        'Smart Progress Summarization',
        'Automated Report Generation',
        'Intelligent Budget Optimization',
        'AI-Powered Literature Review',
        'Smart Collaboration Insights'
      ]
    },
    'venture-capital': {
      standard: [
        'Portfolio Company Dashboard',
        'Deal Flow Analyzer',
        'Due Diligence Tracker',
        'LP Reporting Portal',
        'Investment Performance Monitor',
        'Pipeline Management System'
      ],
      ai: [
        'AI Deal Screener',
        'Predictive Portfolio Analysis',
        'Automated Due Diligence',
        'Smart Market Intelligence',
        'AI-Powered Risk Assessment',
        'Intelligent LP Communications'
      ]
    },
    startup: {
      standard: [
        'Unified Marketing Dashboard',
        'Customer Journey Tracker',
        'Growth Metrics Monitor',
        'Sales Pipeline CRM',
        'Product Analytics Hub',
        'Team Performance Dashboard'
      ],
      ai: [
        'AI Growth Optimizer',
        'Smart Customer Insights',
        'Automated Campaign Analysis',
        'Predictive Churn Detection',
        'AI Content Generator',
        'Intelligent Sales Assistant'
      ]
    }
  };

  const budgetOptions = [
    '$5,000 - $15,000',
    '$15,000 - $35,000', 
    '$35,000 - $75,000',
    '$75,000 - $150,000',
    '$150,000+'
  ];

  const timelineOptions = [
    'ASAP - Within 2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  useEffect(() => {
    const demo = searchParams.get('demo');
    if (demo && ['foundation', 'grant-recipient', 'venture-capital', 'startup'].includes(demo)) {
      setFormData(prev => ({ ...prev, audienceType: demo }));
      
      // Scroll to form
      setTimeout(() => {
        const form = document.getElementById('demo-form');
        if (form) {
          form.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  const handleFeatureToggle = (feature: string, type: 'standard' | 'ai') => {
    const key = type === 'standard' ? 'selectedFeatures' : 'aiFeatures';
    setFormData(prev => ({
      ...prev,
      [key]: prev[key].includes(feature)
        ? prev[key].filter(f => f !== feature)
        : [...prev[key], feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          audience_type: formData.audienceType,
          selected_features: formData.selectedFeatures,
          ai_features: formData.aiFeatures,
          custom_feature_request: formData.customFeatureRequest.trim() || null,
          project_description: formData.projectDescription.trim(),
          budget_range: formData.budgetRange || null,
          timeline: formData.timeline || null
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      setFormData({
        name: '', email: '', company: '', audienceType: '', 
        selectedFeatures: [], aiFeatures: [], customFeatureRequest: '',
        projectDescription: '', budgetRange: '', timeline: ''
      });
      
      toast({
        title: "Demo request sent!",
        description: "We'll contact you within 24 hours to schedule your personalized dashboard demo.",
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentFeatures = formData.audienceType ? audienceFeatures[formData.audienceType as keyof typeof audienceFeatures] : null;

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-green-500">Demo Request Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for your interest in our dashboard solutions. We'll contact you within 24 hours 
          to schedule your personalized demo and discuss how we can help transform your operations.
        </p>
      </div>
    );
  }

  return (
    <div id="demo-form" className="glass-card p-8">
      <h3 className="text-2xl font-bold mb-6">
        Book Your <span className="text-gradient">Dashboard Demo</span>
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
              placeholder="your.email@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Company/Organization</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
            placeholder="Your organization name"
          />
        </div>

        {/* Audience Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Organization Type *</label>
          <select
            required
            value={formData.audienceType}
            onChange={(e) => setFormData({...formData, audienceType: e.target.value, selectedFeatures: [], aiFeatures: []})}
            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
          >
            <option value="">Select your organization type</option>
            <option value="foundation">Foundation</option>
            <option value="grant-recipient">Grant Recipient (University/Nonprofit)</option>
            <option value="venture-capital">Venture Capital Firm</option>
            <option value="startup">Startup/Scale-up</option>
          </select>
        </div>

        {/* Feature Selection */}
        {currentFeatures && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Standard Features ($1,250 each)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentFeatures.standard.map((feature) => (
                  <label key={feature} className="flex items-center p-3 rounded-lg border-2 border-primary/20 hover:border-primary/40 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureToggle(feature, 'standard')}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Zap className="w-5 h-5 text-gradient mr-2" />
                AI-Enhanced Features ($1,850 each)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentFeatures.ai.map((feature) => (
                  <label key={feature} className="flex items-center p-3 rounded-lg border-2 border-primary/20 hover:border-primary/40 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.aiFeatures.includes(feature)}
                      onChange={() => handleFeatureToggle(feature, 'ai')}
                      className="mr-3 w-4 h-4 text-primary"
                    />
                    <span className="text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Custom Feature Request */}
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Custom Feature Request
          </label>
          <textarea
            rows={3}
            value={formData.customFeatureRequest}
            onChange={(e) => setFormData({...formData, customFeatureRequest: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-200"
            placeholder="Describe any custom features or integrations you need that aren't listed above..."
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Project Overview *</label>
          <textarea
            rows={4}
            required
            value={formData.projectDescription}
            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-200"
            placeholder="Tell us about your current challenges, what you're trying to achieve, and how you envision using these dashboards..."
          />
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Budget Range</label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
            >
              <option value="">Select budget range</option>
              {budgetOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preferred Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border-2 border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full btn-primary text-lg py-4" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Request...' : 'Book My Dashboard Demo'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default DemoRequestForm;