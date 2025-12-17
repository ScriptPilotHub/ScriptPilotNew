/*
  # ScripPilot Database Schema

  ## Overview
  Complete database schema for ScripPilot - a script builder and launcher platform with subscription tiers and credit system.

  ## New Tables

  ### 1. `profiles`
  User profile information extending auth.users
  - `id` (uuid, references auth.users)
  - `email` (text)
  - `full_name` (text, nullable)
  - `tier` (text) - free, starter, pro, teams
  - `stripe_customer_id` (text, nullable)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `subscriptions`
  Subscription management
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `tier` (text) - free, starter, pro, teams
  - `stripe_subscription_id` (text, nullable)
  - `stripe_payment_link` (text, nullable)
  - `status` (text) - active, inactive, cancelled
  - `next_billing_date` (timestamptz, nullable)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `credits`
  Credit tracking per user
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `monthly_allocation` (integer) - based on tier
  - `credits_used` (integer, default 0)
  - `credits_remaining` (integer)
  - `last_reset` (timestamptz)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `teams`
  Team/agency accounts
  - `id` (uuid, primary key)
  - `name` (text)
  - `admin_user_id` (uuid, references profiles)
  - `shared_credits` (integer, default 0)
  - `stripe_customer_id` (text, nullable)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `team_members`
  Team membership
  - `id` (uuid, primary key)
  - `team_id` (uuid, references teams)
  - `user_id` (uuid, references profiles)
  - `role` (text) - admin, member
  - `created_at` (timestamptz)

  ### 6. `scripts`
  User-created scripts
  - `id` (uuid, primary key)
  - `owner_id` (uuid, references profiles)
  - `team_id` (uuid, nullable, references teams)
  - `name` (text)
  - `category` (text, nullable)
  - `description` (text, nullable)
  - `message_body` (text)
  - `variables` (jsonb) - array of variable definitions
  - `usage_count` (integer, default 0)
  - `export_count` (integer, default 0)
  - `is_archived` (boolean, default false)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 7. `usage_logs`
  Track script usage for credits
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `script_id` (uuid, references scripts)
  - `action_type` (text) - run, export
  - `credits_used` (integer)
  - `created_at` (timestamptz)

  ### 8. `revenue_tracking`
  Track revenue from scripts (for teams/agency)
  - `id` (uuid, primary key)
  - `team_id` (uuid, references teams)
  - `script_id` (uuid, references scripts)
  - `transaction_id` (text)
  - `customer_id` (text)
  - `amount` (decimal)
  - `platform_share_percentage` (decimal)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can only access their own data
  - Team members can access team data
  - Admins have full access to their team data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  tier text DEFAULT 'free' CHECK (tier IN ('free', 'starter', 'pro', 'teams')),
  stripe_customer_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  tier text DEFAULT 'free' CHECK (tier IN ('free', 'starter', 'pro', 'teams')),
  stripe_subscription_id text,
  stripe_payment_link text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'cancelled')),
  next_billing_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Create credits table
CREATE TABLE IF NOT EXISTS credits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
  monthly_allocation integer DEFAULT 0,
  credits_used integer DEFAULT 0,
  credits_remaining integer DEFAULT 0,
  last_reset timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE credits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own credits"
  ON credits FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own credits"
  ON credits FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own credits"
  ON credits FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Create teams table
CREATE TABLE IF NOT EXISTS teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  admin_user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  shared_credits integer DEFAULT 0,
  stripe_customer_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE teams ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team admins can view their teams"
  ON teams FOR SELECT
  TO authenticated
  USING (admin_user_id = auth.uid());

CREATE POLICY "Users can create teams"
  ON teams FOR INSERT
  TO authenticated
  WITH CHECK (admin_user_id = auth.uid());

CREATE POLICY "Team admins can update their teams"
  ON teams FOR UPDATE
  TO authenticated
  USING (admin_user_id = auth.uid())
  WITH CHECK (admin_user_id = auth.uid());

CREATE POLICY "Team admins can delete their teams"
  ON teams FOR DELETE
  TO authenticated
  USING (admin_user_id = auth.uid());

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  role text DEFAULT 'member' CHECK (role IN ('admin', 'member')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(team_id, user_id)
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members can view their membership"
  ON team_members FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid() OR 
    team_id IN (SELECT id FROM teams WHERE admin_user_id = auth.uid())
  );

CREATE POLICY "Team admins can add members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (
    team_id IN (SELECT id FROM teams WHERE admin_user_id = auth.uid())
  );

CREATE POLICY "Team admins can remove members"
  ON team_members FOR DELETE
  TO authenticated
  USING (
    team_id IN (SELECT id FROM teams WHERE admin_user_id = auth.uid())
  );

-- Update teams policy to include team members
DROP POLICY IF EXISTS "Team admins can view their teams" ON teams;
CREATE POLICY "Team members can view their teams"
  ON teams FOR SELECT
  TO authenticated
  USING (
    admin_user_id = auth.uid() OR 
    id IN (SELECT team_id FROM team_members WHERE user_id = auth.uid())
  );

-- Create scripts table
CREATE TABLE IF NOT EXISTS scripts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  team_id uuid REFERENCES teams(id) ON DELETE SET NULL,
  name text NOT NULL,
  category text,
  description text,
  message_body text NOT NULL,
  variables jsonb DEFAULT '[]'::jsonb,
  usage_count integer DEFAULT 0,
  export_count integer DEFAULT 0,
  is_archived boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE scripts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own scripts"
  ON scripts FOR SELECT
  TO authenticated
  USING (
    owner_id = auth.uid() OR 
    team_id IN (SELECT team_id FROM team_members WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can create scripts"
  ON scripts FOR INSERT
  TO authenticated
  WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Users can update own scripts"
  ON scripts FOR UPDATE
  TO authenticated
  USING (owner_id = auth.uid())
  WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Users can delete own scripts"
  ON scripts FOR DELETE
  TO authenticated
  USING (owner_id = auth.uid());

-- Create usage_logs table
CREATE TABLE IF NOT EXISTS usage_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  script_id uuid REFERENCES scripts(id) ON DELETE SET NULL,
  action_type text CHECK (action_type IN ('run', 'export')),
  credits_used integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own usage logs"
  ON usage_logs FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own usage logs"
  ON usage_logs FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create revenue_tracking table
CREATE TABLE IF NOT EXISTS revenue_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
  script_id uuid REFERENCES scripts(id) ON DELETE SET NULL,
  transaction_id text NOT NULL,
  customer_id text,
  amount decimal(10, 2) NOT NULL,
  platform_share_percentage decimal(5, 2) DEFAULT 0.00,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE revenue_tracking ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team admins can view revenue"
  ON revenue_tracking FOR SELECT
  TO authenticated
  USING (
    team_id IN (SELECT id FROM teams WHERE admin_user_id = auth.uid())
  );

CREATE POLICY "Team admins can insert revenue"
  ON revenue_tracking FOR INSERT
  TO authenticated
  WITH CHECK (
    team_id IN (SELECT id FROM teams WHERE admin_user_id = auth.uid())
  );

-- Create function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, tier)
  VALUES (NEW.id, NEW.email, 'free');
  
  INSERT INTO public.credits (user_id, monthly_allocation, credits_remaining)
  VALUES (NEW.id, 0, 0);
  
  INSERT INTO public.subscriptions (user_id, tier, status)
  VALUES (NEW.id, 'free', 'active');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS set_updated_at ON profiles;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON subscriptions;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON credits;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON credits
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON teams;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON teams
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON scripts;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON scripts
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
