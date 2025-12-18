/*
  # Fix usage_logs action_type Constraint
  
  ## Problem
  The usage_logs table has a CHECK constraint that only allows 'run' and 'export' as action types,
  but the generate-script edge function tries to insert 'generate', causing a constraint violation.
  
  ## Changes
  1. Drop the existing constraint on action_type
  2. Add a new constraint that includes 'generate' as a valid action type
  
  ## Impact
  - Allows the script generation feature to log usage properly
  - Enables proper credit tracking for AI-generated scripts
  - No data loss or migration required
*/

-- Drop the existing constraint
ALTER TABLE usage_logs DROP CONSTRAINT IF EXISTS usage_logs_action_type_check;

-- Add the new constraint that includes 'generate'
ALTER TABLE usage_logs ADD CONSTRAINT usage_logs_action_type_check 
  CHECK (action_type IN ('run', 'export', 'generate'));