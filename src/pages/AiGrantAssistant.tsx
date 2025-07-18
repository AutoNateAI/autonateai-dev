import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Zap, Target, Clock } from "lucide-react";

const AiGrantAssistant = () => {
  const handlePurchase = async () => {
    try {
      // Stripe integration will be implemented here
      console.log("Initiating purchase for AI Grant Assistant");
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
            <Badge className="mb-4" variant="secondary">AI Grant Drafting Assistant</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Win More Grants with AI-Powered Workflow
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform weeks of grant writing into days with our systematic AI-augmented workflow for drafting compelling, fundable proposals.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">$149</span>
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

      {/* What You Get Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Complete Workflow Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Step-by-step instructions for using AI to draft all sections of your grant proposal</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">25+ AI Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Carefully engineered prompts for all major AI platforms (ChatGPT, Claude, etc.)</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Editable Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Grant structure templates, budget spreadsheets, and reviewer response frameworks</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Video Walkthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Watch the workflow in action with a real grant example</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5-Phase Workflow */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">The Complete 5-Phase Workflow System</h2>
          <div className="space-y-6">
            {[
              {
                phase: "1. Preparation Phase",
                description: "Research environment setup and funding alignment analysis",
                features: ["Research environment setup", "Funding alignment analysis"]
              },
              {
                phase: "2. Strategic Planning Phase", 
                description: "Proposal structure generation and core research narrative development",
                features: ["Proposal structure generation", "Core research narrative development"]
              },
              {
                phase: "3. Content Generation Phase",
                description: "Section-by-section drafting with AI-optimized language",
                features: ["Background, aims, methods, budget drafting", "AI-optimized language for reviewer engagement"]
              },
              {
                phase: "4. Refinement Phase",
                description: "Reviewer perspective analysis and visual asset development", 
                features: ["Reviewer perspective analysis", "Visual asset development"]
              },
              {
                phase: "5. Finalization Phase",
                description: "Executive summary creation and final quality assurance",
                features: ["Executive summary creation", "Coherence and flow optimization", "Final quality assurance"]
              }
            ].map((workflow, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{workflow.phase}</CardTitle>
                  <CardDescription>{workflow.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {workflow.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Researchers Love This</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Save 15-20 Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Per grant proposal with systematic AI assistance</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Increase Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">With reviewer-optimized language and strategic structure</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Better Narratives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Craft more persuasive research stories that engage reviewers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "This AI workflow helped me secure a $150,000 grant in half the time I usually spend writing proposals."
                </blockquote>
                <cite className="text-primary font-semibold">— Associate Professor, Life Sciences</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "The reviewer perspective analysis feature was game-changing. It helped me address potential criticisms before submission."
                </blockquote>
                <cite className="text-primary font-semibold">— Research Scientist, Computer Science</cite>
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
              <CardTitle className="text-2xl">AI Grant Drafting Assistant</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold text-primary">$149</span>
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
                  <span>Complete workflow system</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>25+ AI prompts</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Video walkthrough</span>
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

export default AiGrantAssistant;