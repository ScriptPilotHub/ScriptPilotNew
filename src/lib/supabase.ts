import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name?: string;
  tier: 'starter' | 'pro' | 'agency';
  stripe_customer_id?: string;
  created_at: string;
  updated_at: string;
};

export type Credits = {
  id: string;
  user_id: string;
  monthly_allocation: number;
  credits_used: number;
  credits_remaining: number;
  last_reset: string;
  created_at: string;
  updated_at: string;
};

export type Script = {
  id: string;
  owner_id: string;
  team_id?: string;
  name: string;
  category?: string;
  description?: string;
  message_body: string;
  variables: Array<{ name: string; placeholder?: string }>;
  usage_count: number;
  export_count: number;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
};

export type Subscription = {
  id: string;
  user_id: string;
  tier: 'starter' | 'pro' | 'agency';
  stripe_subscription_id?: string;
  stripe_payment_link?: string;
  status: 'active' | 'inactive' | 'cancelled';
  next_billing_date?: string;
  created_at: string;
  updated_at: string;
};

export type UsageLog = {
  id: string;
  user_id: string;
  script_id?: string;
  action_type: 'run' | 'export';
  credits_used: number;
  created_at: string;
};
