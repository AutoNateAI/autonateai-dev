-- Insert existing products data
INSERT INTO public.products (slug, title, tagline, description, price, features, benefits, testimonials, sort_order) VALUES 
(
  'ai-grant-assistant',
  'AI Grant Assistant',
  '5-Phase Workflow System',
  'Transform your grant writing process with our comprehensive AI-powered assistant. Get step-by-step guidance, templates, and expert insights to increase your funding success rate.',
  '$497',
  '["5-phase workflow system", "AI-powered content generation", "Grant database access", "Success rate tracking", "Expert review templates", "Compliance checking tools"]'::JSONB,
  '["Save 80% of your time", "Increase success rates by 40%", "Professional templates included", "Step-by-step guidance", "Expert insights and tips", "Money-back guarantee"]'::JSONB,
  '[{"name": "Dr. Sarah Johnson", "role": "Research Director", "content": "This system completely transformed our grant application process. We went from a 20% to 65% success rate!"}, {"name": "Michael Chen", "role": "Nonprofit Founder", "content": "The AI assistant helped us secure $2.3M in funding. Best investment we ever made for our organization."}]'::JSONB,
  1
),
(
  'lit-review-ai',
  'Literature Review AI',
  'Automated Research Analysis',
  'Streamline your literature review process with advanced AI that analyzes thousands of papers, identifies key themes, and generates comprehensive summaries.',
  '$297',
  '["Automated paper analysis", "Theme identification", "Citation management", "Summary generation", "Bias detection", "Export to multiple formats"]'::JSONB,
  '["Reduce review time by 75%", "Identify hidden connections", "Ensure comprehensive coverage", "Professional formatting", "Real-time updates", "Multi-language support"]'::JSONB,
  '[{"name": "Prof. Emily Rodriguez", "role": "Academic Researcher", "content": "Cut my literature review time from weeks to days. The AI caught patterns I would have missed."}, {"name": "James Wilson", "role": "PhD Student", "content": "This tool saved my dissertation. The comprehensive analysis was exactly what I needed."}]'::JSONB,
  2
),
(
  'data-pipeline-builder',
  'Data Pipeline Builder',
  'Cloud Infrastructure Made Simple',
  'Build robust, scalable data pipelines without complex coding. Our visual interface and pre-built components make data engineering accessible to everyone.',
  '$597',
  '["Visual pipeline designer", "Pre-built connectors", "Real-time monitoring", "Auto-scaling infrastructure", "Data transformation tools", "Enterprise security"]'::JSONB,
  '["No coding required", "Deploy in minutes", "Handle massive datasets", "99.9% uptime guarantee", "Cost-effective scaling", "24/7 support included"]'::JSONB,
  '[{"name": "Alex Thompson", "role": "Data Engineer", "content": "Finally, a tool that makes data pipelines accessible to our entire team. Setup took 10 minutes, not 10 days."}, {"name": "Maria Garcia", "role": "Business Analyst", "content": "I can now build my own data pipelines without bothering the engineering team. Game changer!"}]'::JSONB,
  3
);

-- Insert sample product images (using placeholder images for now)
INSERT INTO public.product_images (product_id, image_url, alt_text, sort_order, is_primary) VALUES 
-- AI Grant Assistant images
((SELECT id FROM public.products WHERE slug = 'ai-grant-assistant'), 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop', 'AI Grant Assistant Dashboard', 0, true),
((SELECT id FROM public.products WHERE slug = 'ai-grant-assistant'), 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop', 'Grant Writing Interface', 1, false),
((SELECT id FROM public.products WHERE slug = 'ai-grant-assistant'), 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop', 'Analytics Dashboard', 2, false),

-- Literature Review AI images  
((SELECT id FROM public.products WHERE slug = 'lit-review-ai'), 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop', 'Literature Analysis Interface', 0, true),
((SELECT id FROM public.products WHERE slug = 'lit-review-ai'), 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop', 'Research Paper Analysis', 1, false),
((SELECT id FROM public.products WHERE slug = 'lit-review-ai'), 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop', 'Summary Generation', 2, false),

-- Data Pipeline Builder images
((SELECT id FROM public.products WHERE slug = 'data-pipeline-builder'), 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', 'Pipeline Visual Designer', 0, true),
((SELECT id FROM public.products WHERE slug = 'data-pipeline-builder'), 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop', 'Data Monitoring Dashboard', 1, false),
((SELECT id FROM public.products WHERE slug = 'data-pipeline-builder'), 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop', 'Infrastructure Overview', 2, false);