-- Create advertisements table for managing ads
CREATE TABLE public.advertisements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT,
  link_url TEXT,
  alt_text TEXT,
  position TEXT NOT NULL, -- 'sidebar', 'banner', 'featured', 'inline'
  target_type TEXT NOT NULL DEFAULT 'all', -- 'all', 'category', 'specific_post'
  target_value TEXT, -- category name or blog post slug
  width INTEGER,
  height INTEGER,
  is_active BOOLEAN DEFAULT true,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for advertisements
ALTER TABLE public.advertisements ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active ads
CREATE POLICY "Anyone can view active advertisements" 
  ON public.advertisements 
  FOR SELECT 
  USING (is_active = true AND (start_date IS NULL OR start_date <= now()) AND (end_date IS NULL OR end_date >= now()));

-- Insert some sample ads
INSERT INTO public.advertisements (title, image_url, link_url, alt_text, position, width, height) VALUES
('Sidebar Research Tools', '/api/placeholder/300/250', 'https://example.com/research-tools', 'Advanced research tools for academics', 'sidebar', 300, 250),
('Banner AI Conference', '/api/placeholder/728/90', 'https://example.com/ai-conference', 'Join the biggest AI research conference', 'banner', 728, 90),
('Featured Product Spotlight', '/api/placeholder/728/300', 'https://example.com/featured-product', 'Discover our latest research automation tools', 'featured', 728, 300);