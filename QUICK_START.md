# ScriptPilot - Quick Start Guide

## What is ScriptPilot?
A script management platform where users create reusable message templates with variables. Each time they run a script (copy to clipboard), it costs 1 credit.

## Subscription Plans
- **Starter**: $29/month → 100 credits
- **Pro**: $79/month → 500 credits
- **Agency**: $199/month → 2000 credits

## Stripe Payment Links
```
Starter:  https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a
Pro:      https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b
Agency:   https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c
```

## Key Features
- ✅ Unlimited scripts
- ✅ Dynamic variables with {{syntax}}
- ✅ One-click copy to clipboard
- ✅ Script library with search
- ✅ Usage tracking
- ✅ Credit system (1 credit = 1 run)
- ✅ Monthly credit reset
- ✅ Team collaboration (Agency)

## Credit System Rules
1. **Saving scripts** = FREE
2. **Running scripts** (copy to clipboard) = 1 credit
3. Credits reset monthly on subscription date
4. Unused credits don't roll over
5. Out of credits? Show upgrade page

## How Users Create Scripts
1. Go to Script Builder
2. Enter script name and message
3. Add variables using {{variableName}}
4. Preview with test values
5. **Save** (free, no credits)
6. **Run** from library (costs 1 credit, copies to clipboard)

## Example Script
```
Name: Follow-up Email
Category: Sales
Variables: {{name}}, {{product}}, {{price}}

Message:
Hi {{name}},

Thanks for your interest in {{product}}!

I wanted to follow up and let you know we have a special offer at {{price}}.

Let me know if you'd like to schedule a call!

Best,
Script Pilot Team
```

When user clicks "Run":
- They fill in: name="John", product="CRM Software", price="$99/mo"
- Final message copied to clipboard
- 1 credit deducted
- Usage logged

## Database Tables
- `profiles` - User accounts + tier
- `credits` - Credit tracking per user
- `subscriptions` - Subscription state
- `scripts` - Saved message templates
- `usage_logs` - Every run logged
- `teams` - Agency collaboration
- `team_members` - Team membership
- `revenue_tracking` - Revenue shares

## Development
```bash
# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Environment Setup
Create `.env`:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Database Setup
Run migrations in order:
1. `20251217220446_create_scriptpilot_schema_v2.sql`
2. `20251217221513_update_schema_remove_free_trial_v2.sql`

## Tier Colors (Branding)
- Starter: Green (#10B981)
- Pro: Blue (#3B82F6)
- Agency: Purple (#8B5CF6)

## Next Steps (TODO)
1. ⚠️ **Implement Stripe webhook handler**
   - Listen for `checkout.session.completed`
   - Update user tier and credits
   - Send confirmation email

2. ⚠️ **Setup monthly credit reset cron**
   - Call `reset_monthly_credits()` function
   - Run on 1st of each month
   - Or use Stripe subscription cycles

3. Deploy to production
4. Configure custom domain
5. Setup error monitoring
6. Enable analytics

## Support
- Users run out of credits → Show upgrade page
- Payment issues → Check Stripe dashboard
- Scripts not saving → Check RLS policies
- White screen → Check browser console for React errors

## Key Code Locations
- Auth: `src/contexts/AuthContext.tsx`
- Pages: `src/components/pages/*.tsx`
- Database types: `src/lib/supabase.ts`
- Migrations: `supabase/migrations/*.sql`

## Testing
1. Sign up for account
2. Get auto-assigned Starter tier with 100 credits
3. Create a test script
4. Run script (uses 1 credit)
5. Check Usage page to see log
6. Verify credit count decremented

## Production Checklist
- [ ] Stripe webhooks configured
- [ ] Cron job for credit reset
- [ ] Custom domain setup
- [ ] SSL certificate
- [ ] Error monitoring
- [ ] Backup strategy
- [ ] Email notifications
- [ ] Terms of Service
- [ ] Privacy Policy

---

For detailed documentation, see `SYSTEM_DOCUMENTATION.md`
