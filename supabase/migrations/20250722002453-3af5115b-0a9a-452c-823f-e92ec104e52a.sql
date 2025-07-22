-- Add product linking capability to advertisements table
ALTER TABLE public.advertisements 
ADD COLUMN link_type text DEFAULT 'external' CHECK (link_type IN ('external', 'product')),
ADD COLUMN product_id text;

-- Create function to validate product links
CREATE OR REPLACE FUNCTION validate_advertisement_link()
RETURNS TRIGGER AS $$
BEGIN
  -- If link_type is 'product', product_id must be set
  IF NEW.link_type = 'product' AND NEW.product_id IS NULL THEN
    RAISE EXCEPTION 'product_id is required when link_type is product';
  END IF;
  
  -- If link_type is 'external', link_url should be set
  IF NEW.link_type = 'external' AND NEW.link_url IS NULL THEN
    RAISE EXCEPTION 'link_url is required when link_type is external';
  END IF;
  
  -- Validate product_id values
  IF NEW.product_id IS NOT NULL AND NEW.product_id NOT IN ('ai-grant-assistant', 'lit-review-ai', 'data-pipeline-builder') THEN
    RAISE EXCEPTION 'Invalid product_id. Must be one of: ai-grant-assistant, lit-review-ai, data-pipeline-builder';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for validation
CREATE TRIGGER validate_advertisement_link_trigger
  BEFORE INSERT OR UPDATE ON public.advertisements
  FOR EACH ROW
  EXECUTE FUNCTION validate_advertisement_link();