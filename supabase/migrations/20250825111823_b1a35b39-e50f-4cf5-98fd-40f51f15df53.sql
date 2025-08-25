-- Phase 1: Immediate Data Protection - Tighten RLS policies

-- 1) Purchases: remove public access
alter table public.purchases enable row level security;

drop policy if exists "Users can view their own purchases" on public.purchases;
drop policy if exists "Edge functions can manage purchases" on public.purchases;
-- Intentionally do not create any public SELECT/ALL policy.
-- Edge functions use the service role key and bypass RLS.

-- 2) Product Access: remove public access
alter table public.product_access enable row level security;

drop policy if exists "Users can view their own access credentials" on public.product_access;
drop policy if exists "Edge functions can manage product access" on public.product_access;
-- No public policies recreated. Access will flow via edge functions only.

-- 3) Email Popup Tracking: restrict visibility and updates
alter table public.email_popup_tracking enable row level security;

drop policy if exists "Anyone can read their own popup tracking" on public.email_popup_tracking;
drop policy if exists "Anyone can update popup tracking" on public.email_popup_tracking;
-- Keep existing INSERT policy that allows anonymous inserts for basic tracking without exposing read access.

-- Note: Other tables remain unchanged at this stage.
