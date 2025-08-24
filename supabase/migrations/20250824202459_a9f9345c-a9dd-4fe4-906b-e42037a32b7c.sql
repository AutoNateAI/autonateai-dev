-- Create live_builds table
CREATE TABLE public.live_builds (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  max_attendees INTEGER,
  current_attendees INTEGER DEFAULT 0,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'live', 'completed', 'cancelled')),
  is_published BOOLEAN DEFAULT true,
  calendly_url TEXT,
  replay_url TEXT,
  image_url TEXT,
  tags JSONB DEFAULT '[]'::jsonb,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.live_builds ENABLE ROW LEVEL SECURITY;

-- Create policies for live builds
CREATE POLICY "Anyone can view published live builds" 
ON public.live_builds 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Authenticated users can manage live builds" 
ON public.live_builds 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_live_builds_updated_at
BEFORE UPDATE ON public.live_builds
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample live builds
INSERT INTO public.live_builds (title, description, short_description, scheduled_date, duration_minutes, calendly_url, tags, content) VALUES
(
  'AI Copilot for Finance Teams',
  'Watch us build a complete AI-powered financial analysis tool from scratch using advanced prompt engineering and workflow automation. We''ll demonstrate how to integrate multiple data sources, create intelligent dashboards, and implement decision-making frameworks that help SMB finance teams make faster, more accurate decisions.',
  'Build an AI-powered financial analysis tool with intelligent dashboards and automated decision frameworks.',
  '2024-12-30 15:00:00+00',
  90,
  'https://calendly.com/autonate-ai/live-build-finance',
  '["Finance", "AI Copilot", "Dashboard", "SMB"]'::jsonb,
  'Join us for this live build session where we''ll create a comprehensive AI copilot specifically designed for small to medium business finance teams. Using advanced prompt engineering techniques and workflow automation, we''ll build a tool that can analyze financial data, generate insights, and provide actionable recommendations in real-time.'
),
(
  'Real Estate Market Analysis Platform',
  'Experience the power of AI + critical thinking as we construct a real estate market analysis platform that processes multiple data streams, applies graph theory to market relationships, and delivers actionable insights for real estate professionals. This session covers data integration, AI-powered analysis, and decision framework implementation.',
  'Create an AI-powered real estate analysis platform with market insights and decision frameworks.',
  '2024-12-28 14:00:00+00',
  75,
  'https://calendly.com/autonate-ai/live-build-realestate',
  '["Real Estate", "Market Analysis", "Graph Theory", "Data Integration"]'::jsonb,
  'Watch as we build a sophisticated real estate market analysis platform from the ground up. We''ll integrate multiple data sources, apply graph theory to understand market relationships, and create AI-powered insights that help real estate professionals make better investment decisions.'
),
(
  'Hospitality Operations Optimizer',
  'See how we build an intelligent operations management system for hospitality businesses. Using AI workflow automation and critical thinking frameworks, we''ll create a tool that optimizes staffing, predicts demand, manages inventory, and improves guest experiences through data-driven decision making.',
  'Build an AI-powered hospitality operations system with staffing optimization and demand prediction.',
  '2025-01-03 16:00:00+00',
  60,
  'https://calendly.com/autonate-ai/live-build-hospitality',
  '["Hospitality", "Operations", "Optimization", "Demand Prediction"]'::jsonb,
  'Join us as we create a comprehensive operations optimizer for hospitality businesses. This live build will demonstrate how AI and critical thinking frameworks can transform hotel and restaurant operations through intelligent automation and predictive analytics.'
);