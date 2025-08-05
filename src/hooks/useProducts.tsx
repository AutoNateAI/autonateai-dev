import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

interface ProductImage {
  id: string;
  image_url: string;
  alt_text?: string;
  caption?: string;
  sort_order: number;
  is_primary: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  testimonials: Testimonial[];
  is_active: boolean;
  sort_order: number;
  images: ProductImage[];
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      // Fetch products - only lit-review-ai
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .eq('slug', 'lit-review-ai')
        .order('sort_order', { ascending: true });

      if (productsError) throw productsError;

      // Fetch all product images
      const { data: imagesData, error: imagesError } = await supabase
        .from('product_images')
        .select('*')
        .order('sort_order', { ascending: true });

      if (imagesError) throw imagesError;

      // Combine products with their images
      const productsWithImages = productsData?.map(product => ({
        ...product,
        features: Array.isArray(product.features) ? product.features.map(f => String(f)) : [],
        benefits: Array.isArray(product.benefits) ? product.benefits.map(b => String(b)) : [],
        testimonials: Array.isArray(product.testimonials) ? (product.testimonials as unknown as Testimonial[]) : [],
        images: imagesData?.filter(image => image.product_id === product.id).map(img => ({
          id: img.id,
          image_url: img.image_url,
          alt_text: img.alt_text || undefined,
          caption: img.caption || undefined,
          sort_order: img.sort_order || 0,
          is_primary: img.is_primary || false
        })) || []
      })) || [];

      setProducts(productsWithImages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, refetch: fetchProducts };
};

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchProduct(slug);
    }
  }, [slug]);

  const fetchProduct = async (productSlug: string) => {
    try {
      setLoading(true);
      
      // Fetch single product
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('slug', productSlug)
        .eq('is_active', true)
        .single();

      if (productError) throw productError;

      // Fetch product images
      const { data: imagesData, error: imagesError } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', productData.id)
        .order('sort_order', { ascending: true });

      if (imagesError) throw imagesError;

      setProduct({
        ...productData,
        features: Array.isArray(productData.features) ? productData.features.map(f => String(f)) : [],
        benefits: Array.isArray(productData.benefits) ? productData.benefits.map(b => String(b)) : [],
        testimonials: Array.isArray(productData.testimonials) ? (productData.testimonials as unknown as Testimonial[]) : [],
        images: imagesData?.map(img => ({
          id: img.id,
          image_url: img.image_url,
          alt_text: img.alt_text || undefined,
          caption: img.caption || undefined,
          sort_order: img.sort_order || 0,
          is_primary: img.is_primary || false
        })) || []
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Product not found');
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  return { product, loading, error, refetch: () => fetchProduct(slug) };
};