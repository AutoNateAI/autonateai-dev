import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">AutoNateAI</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The bridge between critical thinking and intelligent software. We solve complex problems with custom AI-integrated solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                autonate.ai@gmail.com
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  1001 BISHOP ST., STE 2685A<br />
                  HONOLULU, HI 96813 USA
                </div>
              </div>
            </div>
          </div>

           {/* Products Column */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-6">Products</h3>
            <div className="space-y-4">
              <Link to="/products/ai-grant-assistant" className="block text-muted-foreground hover:text-primary transition-colors">
                AI Grant Drafting Assistant
              </Link>
              <Link to="/products/lit-review-ai" className="block text-muted-foreground hover:text-primary transition-colors">
                Lit Review AI
              </Link>
              <Link to="/products/data-pipeline-builder" className="block text-muted-foreground hover:text-primary transition-colors">
                Cloud Data Pipeline Builder
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                View All Products
              </Link>
            </div>
          </div>   */}

          {/* Services Column */}
          <div>
            <div className="space-y-4">
              <Link to="/blogs" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          {/* <div>
            <h3 className="font-semibold text-foreground mb-6">Resources</h3>
            <div className="space-y-4">
              <Link to="/blog/tutorials" className="block text-muted-foreground hover:text-primary transition-colors">
                Tutorials
              </Link>
              <Link to="/blog/case-studies" className="block text-muted-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 AutoNateAI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;