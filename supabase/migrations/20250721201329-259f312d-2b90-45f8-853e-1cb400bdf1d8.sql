-- Add image fields to blogs table
ALTER TABLE public.blogs 
ADD COLUMN hero_image TEXT,
ADD COLUMN hero_image_alt TEXT,
ADD COLUMN content_images JSONB DEFAULT '[]';

-- Update existing blog posts with hero images
UPDATE public.blogs 
SET hero_image = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    hero_image_alt = 'Climate data visualization and analysis'
WHERE slug = 'climate-data-correlations';

UPDATE public.blogs 
SET hero_image = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    hero_image_alt = 'AI and literature review research'
WHERE slug = 'ai-enhance-lit-review';

UPDATE public.blogs 
SET hero_image = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
    hero_image_alt = 'Grant writing and research funding'
WHERE slug = 'grant-trends-2025';

-- Add content images to the climate data post
UPDATE public.blogs 
SET content_images = '[
  {
    "url": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    "alt": "Data pipeline visualization",
    "caption": "Our automated data pipeline processing climate information from multiple sources",
    "position": "after_heading_2"
  },
  {
    "url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop", 
    "alt": "AI analysis results",
    "caption": "AI-powered pattern recognition revealed unexpected correlations",
    "position": "after_heading_4"
  }
]'
WHERE slug = 'climate-data-correlations';

-- Add content images to the AI literature review post  
UPDATE public.blogs 
SET content_images = '[
  {
    "url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=400&fit=crop",
    "alt": "Researcher using AI tools",
    "caption": "Modern researchers leverage AI to enhance their literature review process",
    "position": "after_heading_1"
  },
  {
    "url": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop",
    "alt": "Research workflow visualization", 
    "caption": "AI-augmented research workflows streamline the discovery and analysis process",
    "position": "after_heading_3"
  }
]'
WHERE slug = 'ai-enhance-lit-review';