import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ResponsiveProductLayout } from '@/components/ResponsiveProductLayout';
import { useProduct } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useState } from 'react';

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading, error } = useProduct(slug || '');
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = async () => {
    if (!product) return;
    
    setIsPurchasing(true);
    try {
      console.log('Initiating purchase for product:', product.id);
      
      // Get user email from the purchase form
      const email = prompt('Please enter your email address for purchase confirmation:');
      if (!email) {
        setIsPurchasing(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address');
        setIsPurchasing(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          productId: product.id,
          email: email
        }
      });

      if (error) {
        console.error('Payment creation error:', error);
        toast.error(error.message || 'Failed to create payment session');
        return;
      }

      if (data?.url) {
        console.log('Redirecting to Stripe checkout:', data.url);
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        toast.success('Redirecting to secure checkout...');
      } else {
        toast.error('Failed to create payment session');
      }
    } catch (err) {
      console.error('Purchase error:', err);
      toast.error('Failed to initiate purchase');
    } finally {
      setIsPurchasing(false);
    }
  };

  if (!slug) {
    return <Navigate to="/products" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading product...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-destructive mb-2">Product Not Found</h2>
            <p className="text-muted-foreground">{error || 'The requested product could not be found.'}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ResponsiveProductLayout 
          product={product} 
          onPurchase={handlePurchase}
          isPurchasing={isPurchasing}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Product;