import React, { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Submit form data
      const { error: formError } = await supabase
        .from('form_submissions')
        .insert({
          email: email.trim(),
          form_type: 'popup'
        });

      if (formError) throw formError;

      // Update tracking to mark email as captured
      const browserFingerprint = getBrowserFingerprint();
      const { error: trackingError } = await supabase
        .from('email_popup_tracking')
        .update({ 
          email: email.trim(),
          email_captured: true 
        })
        .eq('browser_fingerprint', browserFingerprint);

      if (trackingError) {
        console.error('Error updating tracking:', trackingError);
      }

      toast({
        title: "Success!",
        description: "Thank you for subscribing! You'll receive our latest research insights.",
      });

      setEmail('');
      onClose();
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBrowserFingerprint = () => {
    // Simple browser fingerprinting
    return btoa(
      navigator.userAgent + 
      navigator.language + 
      screen.width + 
      screen.height + 
      new Date().getTimezoneOffset()
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-xl animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Stay Updated with Our Research
            </h2>
            <p className="text-muted-foreground">
              Get the latest insights on AI-augmented research workflows and methodology breakthroughs delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting || !email.trim()}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Subscribing...
                </>
              ) : (
                'Subscribe to Updates'
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;