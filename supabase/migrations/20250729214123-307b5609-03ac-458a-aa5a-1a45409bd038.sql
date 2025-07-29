-- Create table for storing link preview metadata
CREATE TABLE public.link_previews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  page_type TEXT NOT NULL DEFAULT 'general', -- 'homepage', 'blog', 'product', 'general'
  blog_id UUID NULL,
  product_id UUID NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.link_previews ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view link previews" 
ON public.link_previews 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage link previews" 
ON public.link_previews 
FOR ALL 
USING (true);

-- Add trigger for timestamps
CREATE TRIGGER update_link_previews_updated_at
BEFORE UPDATE ON public.link_previews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default homepage preview
INSERT INTO public.link_previews (page_path, title, description, image_url, page_type)
VALUES (
  '/',
  'AutoNateAI - Transform Your Research Process with AI-Augmented Digital Guides',
  'Empower your research with cutting-edge AI workflow management systems. AutoNateAI helps researchers achieve better results faster through intelligent grant writing, literature review, and data pipeline automation.',
  '/lovable-uploads/e5e6f6bc-5528-492d-876a-45dc0f831b5d.png',
  'homepage'
);