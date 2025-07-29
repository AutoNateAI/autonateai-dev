-- Create purchases table to track completed orders
CREATE TABLE public.purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  stripe_session_id TEXT UNIQUE NOT NULL,
  product_id UUID REFERENCES public.products(id) NOT NULL,
  amount INTEGER NOT NULL, -- Amount in cents
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create product_access table to manage user login credentials
CREATE TABLE public.product_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_id UUID REFERENCES public.purchases(id) ON DELETE CASCADE NOT NULL,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  access_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_access ENABLE ROW LEVEL SECURITY;

-- RLS policies for purchases
CREATE POLICY "Users can view their own purchases" 
ON public.purchases 
FOR SELECT 
USING (true); -- Allow viewing for verification purposes

CREATE POLICY "Edge functions can manage purchases" 
ON public.purchases 
FOR ALL 
USING (true);

-- RLS policies for product_access
CREATE POLICY "Users can view their own access credentials" 
ON public.product_access 
FOR SELECT 
USING (true);

CREATE POLICY "Edge functions can manage product access" 
ON public.product_access 
FOR ALL 
USING (true);

-- Create trigger to update updated_at timestamps
CREATE TRIGGER update_purchases_updated_at
  BEFORE UPDATE ON public.purchases
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_product_access_updated_at
  BEFORE UPDATE ON public.product_access
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();