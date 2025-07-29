import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ResponsiveProductLayout } from '@/components/ResponsiveProductLayout';
import { useProduct } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading, error } = useProduct(slug || '');

  const handlePurchase = async () => {
    // TODO: Implement Stripe integration
    toast.success(`Purchase initiated for ${product?.title}!`);
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
        />
      </div>
      <Footer />
    </div>
  );
};

export default Product;