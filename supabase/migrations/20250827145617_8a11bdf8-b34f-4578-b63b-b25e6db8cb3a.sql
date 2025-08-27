-- Create enhanced demo requests table to replace simple contact inquiries for demos
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  audience_type TEXT NOT NULL, -- 'foundation', 'grant-recipient', 'venture-capital', 'startup'
  selected_features JSONB DEFAULT '[]'::jsonb, -- Array of selected standard features
  ai_features JSONB DEFAULT '[]'::jsonb, -- Array of selected AI features
  custom_feature_request TEXT, -- Custom feature description
  project_description TEXT NOT NULL, -- Overall project description
  budget_range TEXT, -- Optional budget information
  timeline TEXT, -- When they want to start
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (is_admin(auth.uid()));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_demo_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON public.demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_demo_requests_updated_at();