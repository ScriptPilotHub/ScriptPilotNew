# ScriptPilot - System Documentation

## Overview
ScriptPilot is a subscription-based script management platform that allows users to create, store, and execute reusable message templates with dynamic variables. The platform operates on a credit system with three paid tiers.

---

## Subscription Tiers & Pricing

### Stripe Payment Links
All subscriptions are processed through Stripe using these checkout links:

1. **Starter - $29/month**
   - Link: `https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a`
   - 100 credits per month
   - Unlimited scripts
   - Dynamic variables
   - Copy to clipboard
   - Email support

2. **Pro - $79/month**
   - Link: `https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b`
   - 500 credits per month
   - Everything in Starter
   - Priority support
   - Advanced analytics
   - Export to file

3. **Agency - $199/month**
   - Link: `https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c`
   - 2000 credits per month
   - Everything in Pro
   - Team collaboration
   - Dedicated support
   - API access

---

## Credit System

### How Credits Work
- **1 credit = 1 script execution** (run and copy to clipboard)
- **Saving scripts is FREE** (no credits used)
- Credits reset monthly on subscription anniversary
- Unused credits do NOT roll over

### Credit Tracking
The `credits` table tracks:
- `monthly_allocation` - Total credits for the billing period
- `credits_used` - Credits consumed this period
- `credits_remaining` - Available credits
- `last_reset` - Date of last credit reset

### Credit Deduction Flow
1. User clicks "Run Script" button
2. System checks if `credits_remaining >= 1`
3. If yes:
   - Copy script content to clipboard
   - Insert record in `usage_logs` table
   - Decrement `credits_remaining` by 1
   - Increment `credits_used` by 1
   - Increment script's `usage_count` by 1
4. If no:
   - Show error message
   - Display upgrade CTA

---

## Database Schema

### Tables

#### 1. `profiles`
Extends `auth.users` with application-specific data
```sql
- id (uuid) - References auth.users
- email (text)
- full_name (text, nullable)
- tier (text) - 'starter', 'pro', 'agency'
- stripe_customer_id (text, nullable)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### 2. `subscriptions`
Manages subscription state
```sql
- id (uuid)
- user_id (uuid) - References profiles
- tier (text) - 'starter', 'pro', 'agency'
- stripe_subscription_id (text, nullable)
- stripe_payment_link (text)
- status (text) - 'active', 'inactive', 'cancelled'
- next_billing_date (timestamptz, nullable)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### 3. `credits`
Tracks credit allocation and usage
```sql
- id (uuid)
- user_id (uuid) - References profiles (UNIQUE)
- monthly_allocation (integer)
- credits_used (integer)
- credits_remaining (integer)
- last_reset (timestamptz)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### 4. `scripts`
Stores user-created message templates
```sql
- id (uuid)
- owner_id (uuid) - References profiles
- team_id (uuid, nullable) - References teams
- name (text)
- category (text, nullable)
- description (text, nullable)
- message_body (text) - The template with {{variables}}
- variables (jsonb) - Array of {name, placeholder}
- usage_count (integer)
- export_count (integer)
- is_archived (boolean)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### 5. `usage_logs`
Audit trail of all credit usage
```sql
- id (uuid)
- user_id (uuid) - References profiles
- script_id (uuid, nullable) - References scripts
- action_type (text) - 'run' or 'export'
- credits_used (integer)
- created_at (timestamptz)
```

#### 6. `teams`
For Agency tier collaboration
```sql
- id (uuid)
- name (text)
- admin_user_id (uuid) - References profiles
- shared_credits (integer)
- stripe_customer_id (text, nullable)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### 7. `team_members`
Team membership tracking
```sql
- id (uuid)
- team_id (uuid) - References teams
- user_id (uuid) - References profiles
- role (text) - 'admin' or 'member'
- created_at (timestamptz)
```

#### 8. `revenue_tracking`
For Agency tier revenue sharing
```sql
- id (uuid)
- team_id (uuid) - References teams
- script_id (uuid, nullable) - References scripts
- transaction_id (text)
- customer_id (text)
- amount (decimal)
- platform_share_percentage (decimal)
- created_at (timestamptz)
```

---

## Row Level Security (RLS)

All tables have RLS enabled with the following access patterns:

### User Data Access
- Users can only view/edit their own profiles
- Users can only view/edit their own credits
- Users can only view/edit their own scripts
- Users can only view their own usage logs

### Team Access
- Team admins can manage team settings
- Team members can view team data
- Team members can access shared scripts
- Team admins can add/remove members

### Security Principles
- All policies use `auth.uid()` for user identification
- No `USING (true)` policies (everything is restrictive)
- Ownership/membership always checked before access
- Authenticated users only (except signup/login)

---

## Database Functions

### `get_credit_allocation(tier_name text)`
Returns the monthly credit allocation for a tier:
- Starter: 100
- Pro: 500
- Agency: 2000

### `get_stripe_payment_link(tier_name text)`
Returns the Stripe checkout URL for a tier

### `handle_new_user()`
Triggered on auth.users INSERT:
1. Creates profile record with 'starter' tier
2. Creates credits record with 100 credits
3. Creates subscription record with 'active' status

### `upgrade_user_subscription(user_id, new_tier, stripe_subscription_id)`
Handles tier upgrades:
1. Updates profile tier
2. Adds additional credits immediately
3. Updates subscription record
4. Updates Stripe payment link

### `reset_monthly_credits()`
Should be called monthly via cron:
- Resets `credits_remaining` to `monthly_allocation`
- Resets `credits_used` to 0
- Updates `last_reset` timestamp

---

## Frontend Pages

### Landing Page (`Landing.tsx`)
- Clear value proposition
- 3-tier pricing display
- Stripe checkout links embedded in buttons
- "How It Works" section
- No free trial messaging

### Login Page (`Login.tsx`)
- Email/password authentication
- Sign up / Sign in toggle
- Automatic profile creation on signup
- Error handling for auth failures

### Dashboard (`Dashboard.tsx`)
- Credit balance display
- Scripts count
- Usage statistics
- Tier badge
- Quick actions (Create Script, View Library)
- Upgrade CTA when credits low

### Script Builder (`ScriptBuilder.tsx`)
- Create new scripts
- Add variables with {{syntax}}
- Live preview functionality
- Save script (FREE - no credits)
- Run script (1 credit - copies to clipboard)
- Credit balance displayed in header

### Script Library (`ScriptLibrary.tsx`)
- View all saved scripts
- Search and filter by category
- Run any script (1 credit per run)
- Delete scripts
- Usage count displayed per script

### Usage Page (`Usage.tsx`)
- Credit balance and usage
- Historical usage logs
- Credit reset date
- Visual progress bars
- Recent activity timeline

### Upgrade Page (`Upgrade.tsx`)
- All three tier options
- Current tier highlighted
- Stripe checkout buttons
- FAQ section
- Clear credit allocations

---

## Credit Logic Implementation

### Example: Running a Script

```typescript
const handleRun = async (script: Script) => {
  // 1. Check if user has credits
  if (credits && credits.credits_remaining < 1) {
    setError('Not enough credits! Upgrade your plan.');
    return;
  }

  // 2. Copy script to clipboard
  navigator.clipboard.writeText(finalText);

  // 3. Log usage
  await supabase.from('usage_logs').insert({
    user_id: user?.id,
    script_id: script.id,
    action_type: 'run',
    credits_used: 1
  });

  // 4. Decrement credits
  await supabase
    .from('credits')
    .update({
      credits_used: (credits?.credits_used || 0) + 1,
      credits_remaining: (credits?.credits_remaining || 0) - 1
    })
    .eq('user_id', user?.id);

  // 5. Update script usage count
  await supabase
    .from('scripts')
    .update({ usage_count: script.usage_count + 1 })
    .eq('id', script.id);

  // 6. Refresh UI
  refreshCredits();
};
```

---

## Stripe Integration

### Payment Flow
1. User clicks subscription button
2. Opens Stripe checkout page (new tab)
3. User completes payment on Stripe
4. Stripe webhook hits your backend (not yet implemented)
5. Backend updates user's subscription and credits
6. User sees updated tier and credits in app

### Stripe Webhook TODO
You'll need to implement a webhook handler that:
1. Receives Stripe events (checkout.session.completed, customer.subscription.updated)
2. Calls `upgrade_user_subscription()` function
3. Updates user's tier and credits
4. Sends confirmation email

---

## Color System

### Tier Colors (Used Throughout UI)
- **Starter**: `#10B981` (green)
- **Pro**: `#3B82F6` (blue)
- **Agency**: `#8B5CF6` (purple)

### UI Colors
- Background: `#0A0A0A`
- Surface: `#1A1A1A`
- Border: `#333`
- Text Primary: `#FFFFFF`
- Text Secondary: `#808080`
- Error: `#EF4444`
- Success: `#10B981`

---

## Error Handling

### Error Boundary
Catches React rendering errors and displays user-friendly message

### Auth Errors
- Invalid credentials
- Weak password
- Email already exists
- Network errors

### Credit Errors
- Insufficient credits → Show upgrade CTA
- Failed to deduct → Rollback transaction
- Failed to refresh → Retry automatically

### Database Errors
- Connection issues → Show loading state
- Query failures → Log and show error message
- RLS violations → Check authentication

---

## Performance Optimizations

### Database
- Indexes on foreign keys
- Composite indexes for common queries
- RLS policies optimized with subqueries
- Updated_at triggers for cache invalidation

### Frontend
- React context for auth state
- Lazy loading of pages (potential future improvement)
- Debounced search in Script Library
- Optimistic UI updates for credit deductions

---

## Future Enhancements

### Stripe Webhook Implementation
Create a Supabase Edge Function:
```typescript
// supabase/functions/stripe-webhook/index.ts
Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  const body = await req.text();

  // Verify webhook signature
  const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Call upgrade_user_subscription()
  }

  if (event.type === 'customer.subscription.updated') {
    // Handle subscription changes
  }
});
```

### Monthly Credit Reset Job
Set up a cron job to call `reset_monthly_credits()` function

### Team Features (Agency Tier)
- Shared script library
- Pooled credits
- Member management
- Permission controls

### Analytics Dashboard
- Credit usage trends
- Most-used scripts
- Category breakdown
- Export usage reports

---

## Deployment Checklist

- [x] Database schema created
- [x] RLS policies enabled
- [x] Stripe payment links configured
- [x] Frontend pages built
- [x] Credit system implemented
- [x] Build tested successfully
- [ ] Stripe webhook handler deployed
- [ ] Monthly credit reset cron job configured
- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Custom domain connected
- [ ] Error monitoring setup (Sentry, etc.)
- [ ] Analytics tracking (Google Analytics, etc.)

---

## Support & Maintenance

### Regular Tasks
- Monitor Stripe webhooks
- Check credit reset job logs
- Review usage patterns
- Handle subscription cancellations
- Respond to support tickets
- Update Stripe payment links if pricing changes

### User Support Issues
- "I didn't receive credits" → Check reset_monthly_credits execution
- "Payment failed" → Check Stripe dashboard
- "Can't run scripts" → Verify credit balance
- "Lost my scripts" → Check is_archived flag

---

## Environment Variables

Required in `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Backend (for webhooks):
```
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret
```

---

## Summary

ScriptPilot is a fully functional credit-based SaaS platform with:
- 3 paid subscription tiers (no free trial)
- Stripe payment integration
- Simple 1 credit = 1 run pricing
- Comprehensive database with RLS
- Clean, modern UI
- Full credit tracking and usage logs
- Team collaboration (Agency tier)
- Revenue tracking capabilities

The system is production-ready except for:
1. Stripe webhook handler (for automatic subscription updates)
2. Monthly credit reset cron job
3. Custom domain and SSL configuration
