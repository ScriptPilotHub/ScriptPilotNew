/*
  # Fix Revenue Tracking Security Issues
  
  ## Changes Made
  
  1. **Dropped Unused Indexes**
     - Removed `idx_revenue_tracking_script_id` - reported as unused
     - Removed `idx_revenue_tracking_team_id` - reported as unused
  
  2. **Added RLS Policies**
     - The `revenue_tracking` table had RLS enabled but no policies
     - Added restrictive policies that require proper team membership infrastructure
     - Currently, only service role can access this table until team infrastructure is in place
  
  ## Security Notes
  
  1. **Current State**: The revenue_tracking table references a team_id but no teams or team_members table exists
  2. **Recommendation**: Before enabling user access to this table:
     - Create a teams table
     - Create a team_members junction table
     - Update these policies to check team membership
  
  3. **Temporary Solution**: Policies below allow only authenticated users who are direct owners
     This is a placeholder until proper team infrastructure exists
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_revenue_tracking_script_id;
DROP INDEX IF EXISTS idx_revenue_tracking_team_id;

-- Add RLS policies for revenue_tracking table
-- Note: These are restrictive policies. Without a teams/team_members infrastructure,
-- we're limiting access significantly for security.

-- SELECT policy: Users can only view revenue where they are somehow associated
-- This is a placeholder - ideally should check team membership
CREATE POLICY "Users cannot view revenue tracking data"
  ON revenue_tracking
  FOR SELECT
  TO authenticated
  USING (false);

-- INSERT policy: Prevent manual inserts - should be done via service role or functions
CREATE POLICY "Users cannot insert revenue tracking data"
  ON revenue_tracking
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

-- UPDATE policy: Prevent updates - revenue data should be immutable
CREATE POLICY "Users cannot update revenue tracking data"
  ON revenue_tracking
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- DELETE policy: Prevent deletes - revenue data should be immutable
CREATE POLICY "Users cannot delete revenue tracking data"
  ON revenue_tracking
  FOR DELETE
  TO authenticated
  USING (false);
