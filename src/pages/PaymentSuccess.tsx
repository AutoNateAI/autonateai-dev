import React, { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Copy, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided');
      setIsVerifying(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        console.log('Verifying payment for session:', sessionId);
        
        const { data, error } = await supabase.functions.invoke('verify-payment', {
          body: { sessionId }
        });

        if (error) {
          console.error('Verification error:', error);
          setError(error.message || 'Payment verification failed');
        } else if (data?.success) {
          console.log('Payment verified:', data);
          setVerificationResult(data);
          toast.success('Payment verified! Login credentials sent to your email.');
        } else {
          setError(data?.message || 'Payment verification failed');
        }
      } catch (err) {
        console.error('Verification failed:', err);
        setError('Failed to verify payment');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  if (!sessionId) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {isVerifying ? (
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                ) : error ? (
                  <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <span className="text-destructive text-2xl">!</span>
                  </div>
                ) : (
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                )}
              </div>
              <CardTitle className="text-2xl">
                {isVerifying ? 'Verifying Your Payment...' : 
                 error ? 'Payment Verification Failed' : 
                 '🎉 Payment Successful!'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {isVerifying && (
                <p className="text-muted-foreground">
                  Please wait while we verify your payment and set up your account...
                </p>
              )}

              {error && (
                <div className="space-y-4">
                  <p className="text-destructive">{error}</p>
                  <Button 
                    onClick={() => window.location.href = '/products'}
                    variant="outline"
                  >
                    Return to Products
                  </Button>
                </div>
              )}

              {verificationResult && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Account Created Successfully!
                    </h3>
                    <p className="text-green-700">
                      Your login credentials have been sent to your email address. 
                      You can also find them below:
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6 space-y-4">
                    <h4 className="font-semibold">Your Login Credentials:</h4>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <div>
                          <span className="text-sm text-muted-foreground">Username:</span>
                          <p className="font-mono font-medium">{verificationResult.username}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(verificationResult.username, 'Username')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted rounded">
                        <div>
                          <span className="text-sm text-muted-foreground">Access URL:</span>
                          <p className="font-mono text-sm break-all">{verificationResult.accessUrl}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(verificationResult.accessUrl, 'Access URL')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={() => window.open(verificationResult.accessUrl, '_blank')}
                      className="w-full"
                      size="lg"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Your Product Now
                    </Button>
                    
                    <Button 
                      onClick={() => window.location.href = '/products'}
                      variant="outline"
                      className="w-full"
                    >
                      Browse More Products
                    </Button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> Please save your login credentials in a secure location. 
                      You'll need them to access your purchased product.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;