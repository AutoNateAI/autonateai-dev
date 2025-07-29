-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  tagline TEXT,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  features JSONB DEFAULT '[]'::JSONB,
  benefits JSONB DEFAULT '[]'::JSONB,
  testimonials JSONB DEFAULT '[]'::JSONB,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create product_images table for carousel functionality
CREATE TABLE public.product_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  sort_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for products
CREATE POLICY "Anyone can view active products" 
ON public.products 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage products" 
ON public.products 
FOR ALL 
USING (true);

-- RLS Policies for product_images
CREATE POLICY "Anyone can view product images" 
ON public.product_images 
FOR SELECT 
USING (EXISTS (SELECT 1 FROM public.products WHERE id = product_id AND is_active = true));

CREATE POLICY "Authenticated users can manage product images" 
ON public.product_images 
FOR ALL 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_active_sort ON public.products(is_active, sort_order);
CREATE INDEX idx_product_images_product_id ON public.product_images(product_id);
CREATE INDEX idx_product_images_sort ON public.product_images(product_id, sort_order);