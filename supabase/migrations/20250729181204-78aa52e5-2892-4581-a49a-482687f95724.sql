-- Fix function search path security warnings
CREATE OR REPLACE FUNCTION public.validate_advertisement_link()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER 
 SET search_path = 'public'
AS $function$
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
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER 
 SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;