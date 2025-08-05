import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Users, Clock, MapPin, Video, Award } from "lucide-react";
import EmailPopup from "@/components/EmailPopup";
import { useEmailPopup } from "@/hooks/useEmailPopup";
import { useState } from "react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Workshops = () => {
  const { showPopup, closePopup } = useEmailPopup();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const [workshopFormData, setWorkshopFormData] = useState({
    workshop: '',
    format: '',
    timeline: ''
  });
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Get form data from the actual form
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const { error } = await supabase
        .from('workshop_requests')
        .insert({
          name: formData.get('name')?.toString().trim() || '',
          email: formData.get('email')?.toString().trim() || '',
          organization: formData.get('organization')?.toString().trim() || null,
          participants: formData.get('participants')?.toString().trim() || null,
          format: workshopFormData.format || null,
          timeline: workshopFormData.timeline || null,
          message: formData.get('message')?.toString().trim() || null
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      form.reset();
      setWorkshopFormData({
        workshop: '',
        format: '',
        timeline: ''
      });
      
      toast({
        title: "Workshop request submitted!",
        description: "We'll contact you within 1 business day to discuss your workshop needs.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting request",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestWorkshop = (workshopType: string) => {
    const form = document.getElementById('workshop-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill form fields using state
      setTimeout(() => {
        setWorkshopFormData({
          workshop: workshopType,
          format: 'in-person',
          timeline: '1-3-months'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">AI Research Workshops</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Literature Review Mastery Workshops
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your institution's literature review capabilities with comprehensive workshops that integrate NotebookLM workflows, concept visualization, and AI-powered research methodologies at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Available Workshops */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Literature Review Workshop Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Literature Review Foundation</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    4 hours
                  </Badge>
                </div>
                <CardDescription>
                  Perfect for institutions looking to establish systematic literature review practices with NotebookLM integration.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>13-step comprehensive literature review workflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>NotebookLM setup and optimization techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>AI prompt library for literature analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Basic concept extraction and organization</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Access to exclusive Discord community channel</span>
                     </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Graduate programs</Badge>
                    <Badge variant="outline">Research departments</Badge>
                    <Badge variant="outline">Academic libraries</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <p className="text-lg font-semibold text-primary">$2,299 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 30 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('foundation')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Advanced Concept Visualization</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    6 hours
                  </Badge>
                </div>
                <CardDescription>
                  Master advanced literature review techniques with concept graphs, insight generation, and visual research mapping.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Interactive concept graph development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Advanced insight generation from multiple sources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Visual tracking of research evolution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Publication-ready synthesis techniques</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Access to exclusive Discord community channel</span>
                     </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Research institutes</Badge>
                    <Badge variant="outline">PhD programs</Badge>
                    <Badge variant="outline">Faculty development</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <p className="text-lg font-semibold text-primary">$3,499 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 25 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('advanced')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Complete Literature Review Mastery</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    8 hours
                  </Badge>
                </div>
                <CardDescription>
                  Comprehensive training covering all aspects of modern AI-powered literature review methodologies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Complete 13-step workflow implementation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Advanced NotebookLM techniques and integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Master concept graph visualization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Advanced synthesis and publication strategies</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-3 h-3 text-primary" />
                       <span>60-day post-workshop support included</span>
                     </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">University departments</Badge>
                    <Badge variant="outline">Research centers</Badge>
                    <Badge variant="outline">Professional development</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <p className="text-lg font-semibold text-primary">$4,999 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 20 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('complete')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Custom Literature Review Implementation</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    12 hours
                  </Badge>
                </div>
                <CardDescription>
                  Tailored workshop designed specifically for your institution's unique literature review challenges and requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <div>
                  <h4 className="font-semibold mb-2">Workshop Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Pre-workshop literature review practice assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Custom workflow design for your research domain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Domain-specific AI prompt development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>90-day implementation support</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Dedicated Discord support channel</span>
                     </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Specialized institutions</Badge>
                    <Badge variant="outline">Multi-disciplinary teams</Badge>
                    <Badge variant="outline">Large research organizations</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <p className="text-lg font-semibold text-primary">$7,999 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 15 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('custom')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Workshop Delivery Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>In-Person Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional facilitators at your location</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Interactive hands-on activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Printed materials and resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Follow-up implementation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Video className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Virtual Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Live instruction via Zoom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Interactive breakout sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Digital resource packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Recording available for 30 days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Workshop Participants Are Saying</h2>
            <p className="text-muted-foreground">Real feedback from institutions that have implemented our workshop methodologies.</p>
          </div>
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "After implementing the literature review workflow across our graduate program, student completion times for comprehensive exams improved by an average of 6 weeks."
                </blockquote>
                <cite className="text-primary font-semibold">— Graduate Program Coordinator, Major Research University</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "The data analytics workflow training revolutionized how our research teams approach data management. We now have consistent, reproducible processes across all projects."
                </blockquote>
                <cite className="text-primary font-semibold">— Research Operations Manager, Environmental Institute</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "The systematic literature review methodology has become our department standard. Faculty report saving 15-20 hours per literature review while improving thoroughness."
                </blockquote>
                <cite className="text-primary font-semibold">— Department Chair, Social Sciences</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Request a Workshop</h2>
            <p className="text-muted-foreground">
              Fill out the form below to inquire about scheduling a workshop. We'll contact you within 2 business days with a customized proposal and include details about accessing our exclusive Discord community.
            </p>
          </div>
          
          <Card className="glass-card">
            <CardContent className="p-8">
              <form id="workshop-form" onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution *</Label>
                    <Input id="organization" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Input id="role" required />
                  </div>
                </div>
                
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="workshop">Workshop of Interest *</Label>
                     <Select 
                       name="workshop" 
                       required 
                       value={workshopFormData.workshop}
                       onValueChange={(value) => setWorkshopFormData(prev => ({ ...prev, workshop: value }))}
                     >
                       <SelectTrigger>
                         <SelectValue placeholder="Select a workshop" />
                       </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="foundation">Literature Review Foundation</SelectItem>
                          <SelectItem value="advanced">Advanced Concept Visualization</SelectItem>
                          <SelectItem value="complete">Complete Literature Review Mastery</SelectItem>
                          <SelectItem value="custom">Custom Literature Review Implementation</SelectItem>
                          <SelectItem value="multiple">Multiple Workshops</SelectItem>
                        </SelectContent>
                     </Select>
                   </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Estimated Participants *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Up to 15</SelectItem>
                        <SelectItem value="medium">16-30</SelectItem>
                        <SelectItem value="large">31-50</SelectItem>
                        <SelectItem value="xlarge">50+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="format">Preferred Format *</Label>
                     <Select 
                       name="format" 
                       required 
                       value={workshopFormData.format}
                       onValueChange={(value) => setWorkshopFormData(prev => ({ ...prev, format: value }))}
                     >
                       <SelectTrigger>
                         <SelectValue placeholder="Select format" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="in-person">In-Person</SelectItem>
                         <SelectItem value="virtual">Virtual</SelectItem>
                         <SelectItem value="hybrid">Hybrid</SelectItem>
                         <SelectItem value="undecided">Undecided</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="timeline">Desired Timeline *</Label>
                     <Select 
                       name="timeline" 
                       required 
                       value={workshopFormData.timeline}
                       onValueChange={(value) => setWorkshopFormData(prev => ({ ...prev, timeline: value }))}
                     >
                       <SelectTrigger>
                         <SelectValue placeholder="Select timeline" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="1-3-months">Within 1-3 months</SelectItem>
                         <SelectItem value="3-6-months">Within 3-6 months</SelectItem>
                         <SelectItem value="6-12-months">Within 6-12 months</SelectItem>
                         <SelectItem value="exploring">Just exploring options</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Research focus, specific needs, etc."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Submit Workshop Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <EmailPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default Workshops;