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

const Workshops = () => {
  const { showPopup, closePopup } = useEmailPopup();
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workshop request submitted");
  };

  const handleRequestWorkshop = (workshopType: string) => {
    const form = document.getElementById('workshop-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill form fields
      setTimeout(() => {
        const workshopSelect = document.querySelector('[name="workshop"]') as HTMLSelectElement;
        const formatSelect = document.querySelector('[name="format"]') as HTMLSelectElement;
        const timelineSelect = document.querySelector('[name="timeline"]') as HTMLSelectElement;
        
        if (workshopSelect) workshopSelect.value = workshopType;
        if (formatSelect) formatSelect.value = 'in-person';
        if (timelineSelect) timelineSelect.value = '1-3-months';
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
              Transform Your Institution's Research Capabilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our specialized workshops train researchers in implementing AI-augmented workflows for grant writing, literature review, and data management at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Available Workshops */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Available Workshops</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">AI Grant Writing Mastery</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    6 hours
                  </Badge>
                </div>
                <CardDescription>
                  Transform your institution's grant success rate with systematic AI-augmented grant writing strategies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Structured approach to AI-assisted proposal development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Funder-specific language optimization techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Collaborative grant writing with AI tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>Strategic reviewer perspective analysis</span>
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
                    <Badge variant="outline">University research offices</Badge>
                    <Badge variant="outline">Academic departments</Badge>
                    <Badge variant="outline">Research institutes</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-primary">$3,499 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 25 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('grant')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Literature Review Revolution</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    3 hours
                  </Badge>
                </div>
                <CardDescription>
                  Equip your researchers with systematic methods to accelerate literature reviews while improving quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>5-phase literature review methodology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Multi-paper analysis techniques with AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Framework development for complex questions</span>
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
                    <Badge variant="outline">Graduate programs</Badge>
                    <Badge variant="outline">Research departments</Badge>
                    <Badge variant="outline">Academic libraries</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-primary">$1,999 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 30 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('literature')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Research Data Pipeline Implementation</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    6 hours
                  </Badge>
                </div>
                <CardDescription>
                  Create standardized, reproducible data management practices across your research organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Participants Will Learn:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>8-phase data pipeline methodology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>AI-assisted data cleaning and transformation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Documentation automation techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>FAIR principles implementation</span>
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
                    <Badge variant="outline">Research laboratories</Badge>
                    <Badge variant="outline">Data science teams</Badge>
                    <Badge variant="outline">Clinical research orgs</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-primary">$3,699 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 25 participants</p>
                  <Button 
                    onClick={() => handleRequestWorkshop('data')}
                    className="w-full mt-4"
                  >
                    Request Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl">Custom AI Research Workflow Design</CardTitle>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    12 hours
                  </Badge>
                </div>
                <CardDescription>
                  Develop custom AI-augmented workflows specifically designed for your organization's unique research needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Workshop Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Pre-workshop needs assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Current workflow analysis and optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span>Custom AI prompt development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                       <span>30-day post-workshop support</span>
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
                    <Badge variant="outline">Specialized institutions</Badge>
                    <Badge variant="outline">Complex workflows</Badge>
                    <Badge variant="outline">Multi-disciplinary teams</Badge>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-lg font-semibold text-primary">$6,999 per participant</p>
                  <p className="text-sm text-muted-foreground">Up to 20 participants</p>
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
                     <Select name="workshop" required>
                       <SelectTrigger>
                         <SelectValue placeholder="Select a workshop" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="grant">AI Grant Writing Mastery</SelectItem>
                         <SelectItem value="literature">Literature Review Revolution</SelectItem>
                         <SelectItem value="data">Research Data Pipeline Implementation</SelectItem>
                         <SelectItem value="custom">Custom AI Research Workflow Design</SelectItem>
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
                     <Select name="format" required>
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
                     <Select name="timeline" required>
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