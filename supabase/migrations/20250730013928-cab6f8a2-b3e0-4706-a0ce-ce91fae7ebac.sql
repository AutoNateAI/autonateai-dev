-- Create coaching_requests table
CREATE TABLE public.coaching_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institution TEXT,
  service TEXT, -- individual, team, etc.
  research_area TEXT,
  timeline TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create workshop_requests table
CREATE TABLE public.workshop_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  participants TEXT, -- storing as text for flexibility (e.g., "10-15", "5+")
  format TEXT, -- virtual, in-person, hybrid
  timeline TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_inquiries table
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  inquiry_type TEXT DEFAULT 'general', -- general, partnership, support, etc.
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.coaching_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workshop_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to submit forms but only authenticated users to view
CREATE POLICY "Anyone can submit coaching requests" 
ON public.coaching_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view coaching requests" 
ON public.coaching_requests 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can submit workshop requests" 
ON public.workshop_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view workshop requests" 
ON public.workshop_requests 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can submit contact inquiries" 
ON public.contact_inquiries 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (true);

-- Add update triggers for updated_at columns
CREATE TRIGGER update_coaching_requests_updated_at
  BEFORE UPDATE ON public.coaching_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_workshop_requests_updated_at
  BEFORE UPDATE ON public.workshop_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON public.contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();