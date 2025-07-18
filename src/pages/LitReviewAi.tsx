import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Brain, Users, Target, Clock, Search } from "lucide-react";

const LitReviewAi = () => {
  const handlePurchase = async () => {
    try {
      // Stripe integration will be implemented here
      console.log("Initiating purchase for Lit Review AI");
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
            <Badge className="mb-4" variant="secondary">Lit Review AI</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Transform Literature Review Chaos into AI-Powered Mastery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your comprehensive solution to overwhelming literature reviews, transformed into a structured, systematic, and efficient process using cutting-edge AI integration.
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

      {/* What You Get Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Structured Workflow Engine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-4">13-step comprehensive literature review workflow spanning 5 phases:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Setup Phase (2 steps): Research environment and question refinement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Collection Phase (1 step): Strategic literature search methodology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Analysis Phase (2 steps): Individual paper and thematic analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Synthesis Phase (2 steps): Framework development and gap analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Output Generation Phase (6 steps): Writing and quality assurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Brain className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">AI-Powered Prompt Library</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-4">24 specialized prompts across all research phases:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Setup & Planning (3 prompts): Research question refinement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Paper Analysis (5 prompts): Comprehensive summaries and evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Batch Processing (4 prompts): Multi-paper theme identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Synthesis (4 prompts): Literature synthesis and framework development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Output Generation (5 prompts): Writing sections and abstracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Refinement (3 prompts): Quality checks and citation verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Intelligent User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Personalized dashboard with progress analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly task completion tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Copy-to-clipboard functionality for seamless AI integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Visual progress indicators and completion celebrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Multi-Platform AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Platform agnostic: Works with ChatGPT, Claude, NotebookLM, Windsurf</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Copy-paste optimization for immediate use</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Bracketed variable system for easy customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Future-proof as AI landscape evolves</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Primary Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Graduate Students (PhD, Master's) conducting thesis literature reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Academic Researchers preparing grant proposals and papers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Research Assistants supporting faculty research projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Independent Researchers in think tanks and policy institutes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Secondary Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Corporate R&D teams conducting market research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Consultants needing rapid industry analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Policy researchers in government and NGOs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Medical professionals conducting clinical research reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Time Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduce literature review time by 60-70% with structured prompts</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Quality Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Systematic coverage ensures comprehensive analysis</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Brain className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn proper methodology and AI prompt engineering</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <Search className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Output Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Publication-ready sections with academic formatting</p>
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
                  "Lit Review AI transformed my literature review process from weeks of chaos to days of organized productivity."
                </blockquote>
                <cite className="text-primary font-semibold">— PhD Candidate, Psychology</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "The batch processing prompts saved me countless hours when analyzing 50+ papers for my systematic review."
                </blockquote>
                <cite className="text-primary font-semibold">— Assistant Professor, Public Health</cite>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "As someone who struggles with organizing large amounts of information, this workflow system was a game-changer for my dissertation."
                </blockquote>
                <cite className="text-primary font-semibold">— Doctoral Student, Education</cite>
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
              <CardTitle className="text-2xl">Lit Review AI</CardTitle>
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
                  <span>13-step comprehensive workflow</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>24 specialized AI prompts</span>
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Multi-platform compatibility</span>
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

export default LitReviewAi;