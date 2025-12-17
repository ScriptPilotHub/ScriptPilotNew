/*
  # Add Free Tier and Update Pricing Structure

  ## Overview
  Adds a free tier as the starting point for all new users, with minimal credits
  to encourage upgrades to paid plans.

  ## Changes Made
  
  1. **Tier System**
     - Free: 5 credits/month (minimal to encourage upgrade)
     - Starter: 100 credits/month ($25/month)
     - Pro: 500 credits/month ($50/month)
     - Agency: 2000 credits/month ($299/month)
  
  2. **New User Flow**
     - All new users start on free tier
     - Free tier provides just enough credits to try the service
     - Designed to push users toward paid plans
  
  3. **Database Updates**
     - Add 'free' back to tier constraints
     - Update credit allocation function
     - Update new user handler
     - Keep existing paid users on their current plans
  
  ## Security
  - All existing RLS policies remain in place
  - No changes to data access patterns
*/

-- Step 1: Update tier constraints to include 'free'
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_tier_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_tier_check 
  CHECK (tier IN ('free', 'starter', 'pro', 'agency'));

ALTER TABLE subscriptions DROP CONSTRAINT IF EXISTS subscriptions_tier_check;
ALTER TABLE subscriptions ADD CONSTRAINT subscriptions_tier_check 
  CHECK (tier IN ('free', 'starter', 'pro', 'agency'));

-- Step 2: Update helper function for credit allocation
CREATE OR REPLACE FUNCTION get_credit_allocation(tier_name text)
RETURNS integer AS $$
BEGIN
  CASE tier_name
    WHEN 'free' THEN RETURN 5;
    WHEN 'starter' THEN RETURN 100;
    WHEN 'pro' THEN RETURN 500;
    WHEN 'agency' THEN RETURN 2000;
    ELSE RETURN 5;
  END CASE;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Step 3: Update the new user handler to start on free tier
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, tier)
  VALUES (NEW.id, NEW.email, 'free');
  
  INSERT INTO public.credits (user_id, monthly_allocation, credits_remaining, last_reset)
  VALUES (NEW.id, 5, 5, now());
  
  INSERT INTO public.subscriptions (user_id, tier, status, stripe_payment_link)
  VALUES (NEW.id, 'free', 'active', NULL);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 4: Update upgrade function to handle free tier properly
CREATE OR REPLACE FUNCTION public.upgrade_user_subscription(
  p_user_id uuid,
  p_new_tier text,
  p_stripe_subscription_id text DEFAULT NULL
)
RETURNS void AS $$
DECLARE
  v_allocation integer;
BEGIN
  v_allocation := get_credit_allocation(p_new_tier);
  
  UPDATE public.profiles 
  SET tier = p_new_tier, updated_at = now()
  WHERE id = p_user_id;
  
  UPDATE public.credits 
  SET 
    monthly_allocation = v_allocation,
    credits_remaining = v_allocation,
    updated_at = now()
  WHERE user_id = p_user_id;
  
  UPDATE public.subscriptions 
  SET 
    tier = p_new_tier,
    status = 'active',
    stripe_subscription_id = COALESCE(p_stripe_subscription_id, stripe_subscription_id),
    stripe_payment_link = get_stripe_payment_link(p_new_tier),
    updated_at = now()
  WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;