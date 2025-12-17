/*
  # Update ScriptPilot Schema - Remove Free Trial & Add Stripe Integration

  ## Overview
  Simplified credit system with three paid tiers and Stripe payment links.

  ## Changes Made
  
  1. **Tier System**
     - Removed: free tier (migrated to starter)
     - Available tiers: starter, pro, agency
     - All users upgraded to starter plan
  
  2. **Credit Allocations**
     - Starter: 100 credits/month
     - Pro: 500 credits/month
     - Agency: 2000 credits/month
  
  3. **Stripe Payment Links**
     - Starter: https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a
     - Pro: https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b
     - Agency: https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c
  
  4. **Database Updates**
     - Migrate all free users to starter tier
     - Update tier constraints to only allow paid tiers
     - Add helper functions for credit allocation
     - Update new user flow
  
  ## Security
  - All existing RLS policies remain in place
  - No changes to data access patterns
*/

-- Step 1: Migrate all existing free tier users to starter
UPDATE profiles 
SET tier = 'starter', updated_at = now()
WHERE tier = 'free';

UPDATE subscriptions 
SET tier = 'starter', updated_at = now()
WHERE tier = 'free';

-- Step 2: Update all users to have proper credit allocations
UPDATE credits c
SET 
  monthly_allocation = CASE 
    WHEN p.tier = 'starter' THEN 100
    WHEN p.tier = 'pro' THEN 500
    WHEN p.tier = 'agency' THEN 2000
    ELSE 100
  END,
  credits_remaining = CASE 
    WHEN p.tier = 'starter' THEN 100
    WHEN p.tier = 'pro' THEN 500
    WHEN p.tier = 'agency' THEN 2000
    ELSE 100
  END,
  updated_at = now()
FROM profiles p
WHERE c.user_id = p.id;

-- Step 3: Update tier constraints
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_tier_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_tier_check 
  CHECK (tier IN ('starter', 'pro', 'agency'));

ALTER TABLE subscriptions DROP CONSTRAINT IF EXISTS subscriptions_tier_check;
ALTER TABLE subscriptions ADD CONSTRAINT subscriptions_tier_check 
  CHECK (tier IN ('starter', 'pro', 'agency'));

-- Step 4: Create helper functions
CREATE OR REPLACE FUNCTION get_credit_allocation(tier_name text)
RETURNS integer AS $$
BEGIN
  CASE tier_name
    WHEN 'starter' THEN RETURN 100;
    WHEN 'pro' THEN RETURN 500;
    WHEN 'agency' THEN RETURN 2000;
    ELSE RETURN 100;
  END CASE;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

CREATE OR REPLACE FUNCTION get_stripe_payment_link(tier_name text)
RETURNS text AS $$
BEGIN
  CASE tier_name
    WHEN 'starter' THEN RETURN 'https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a';
    WHEN 'pro' THEN RETURN 'https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b';
    WHEN 'agency' THEN RETURN 'https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c';
    ELSE RETURN NULL;
  END CASE;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Step 5: Update the new user handler
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, tier)
  VALUES (NEW.id, NEW.email, 'starter');
  
  INSERT INTO public.credits (user_id, monthly_allocation, credits_remaining, last_reset)
  VALUES (NEW.id, 100, 100, now());
  
  INSERT INTO public.subscriptions (user_id, tier, status, stripe_payment_link)
  VALUES (NEW.id, 'starter', 'active', get_stripe_payment_link('starter'));
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 6: Create function to upgrade user subscription
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
    credits_remaining = credits_remaining + v_allocation,
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

-- Step 7: Function to reset monthly credits (for scheduled execution)
CREATE OR REPLACE FUNCTION reset_monthly_credits()
RETURNS void AS $$
BEGIN
  UPDATE credits c
  SET 
    credits_remaining = c.monthly_allocation,
    credits_used = 0,
    last_reset = now(),
    updated_at = now()
  FROM profiles p
  WHERE 
    c.user_id = p.id
    AND date_part('day', now() - c.last_reset) >= 30;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;