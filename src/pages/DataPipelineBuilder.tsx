import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Workflow, Cloud, Shield, Zap, Users, BarChart3 } from "lucide-react";

const DataPipelineBuilder = () => {
  const handlePurchase = async () => {
    try {
      // Stripe integration will be implemented here
      console.log("Initiating purchase for Data Pipeline Builder");
    } catch (error) {
      console.error("Purchase error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Cloud Data Pipeline Builder</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Convert Chaotic Data Practices into Structured Pipelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive AI-augmented workflow management platform designed for researchers who struggle with data organization, cleaning, and workflow consistency.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">$129</span>
              <span className="text-muted-foreground">one-time purchase</span>
            </div>
            <Button 
              onClick={handlePurchase}
              className="btn-primary text-lg px-8 py-4"
            >
              Buy Now with Stripe
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Researchers Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <Workflow className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Complete Workflow Management System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-4">8-Phase Structured Workflow:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Planning → Structure → Ingestion → Cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Transformation → Validation → Documentation → Sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Visual progress bars and completion badges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Multiple workflow support for complex projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">AI-Powered Prompt Library</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-4">80+ Expert-Crafted Prompts:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>10+ prompts for each phase of pipeline development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Smart categorization by difficulty and phase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>One-click copying with usage tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Advanced filtering by category and keywords</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Interactive Workflow Builder</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Step-by-step guidance through 8 phases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Realistic time projections (2-6 hours per phase)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Progress tracking and completion marking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Built-in AI integration tips and guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">User Management & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Personal profiles with research area tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Activity monitoring and engagement analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Achievement system with XP points and badges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Team-based workflow management capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <Cloud className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Modern web interface with real-time updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>No software installation required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>AI Integration Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Works with ChatGPT, Claude, Windsurf, NotebookLM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professionally crafted prompts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>AI-generated documentation templates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Enterprise-grade security with Supabase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Version control and backup capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Multiple export formats</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Primary Users</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Graduate Students managing thesis/dissertation data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Postdocs organizing multi-site research projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Research Scientists standardizing lab workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Data Analysts building reproducible pipelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Research Domains</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Biomedical Sciences: Clinical trials, genomics, proteomics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Social Sciences: Survey data, behavioral studies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Environmental Science: Sensor data, field measurements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Economics: Financial data, market research</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation & ROI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Immediate Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>60-80% reduction in data organization time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Systematic validation prevents common mistakes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Standardized approaches across projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Automated comprehensive documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Long-term Value</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Fully reproducible and auditable research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Workflows scale from small to large collaborations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Institutional knowledge captured and preserved</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Meets funding agency requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "This platform cut my data preparation time by two-thirds while dramatically improving the quality of my documentation."
                </blockquote>
                <cite className="text-primary font-semibold">— Research Scientist, Environmental Science</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "The structured workflow finally brought order to our lab's chaotic data practices. Every graduate student now follows the same process."
                </blockquote>
                <cite className="text-primary font-semibold">— Lab Director, Genomics</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "I was amazed at how much faster I could prepare data for analysis. What used to take weeks now takes days."
                </blockquote>
                <cite className="text-primary font-semibold">— PhD Student, Social Sciences</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Cloud Data Pipeline Builder</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-primary">$129</span>
                <span className="text-muted-foreground">one-time purchase</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Immediate access after purchase</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Complete 8-phase workflow system</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>80+ AI-powered prompts</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Progress tracking dashboard</span>
                </li>
              </ul>
              <Button 
                onClick={handlePurchase}
                className="btn-primary w-full text-lg py-3"
              >
                Buy Now with Stripe
              </Button>
              <p className="text-sm text-muted-foreground">
                Secure payment processed through Stripe. Immediate access after purchase.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataPipelineBuilder;