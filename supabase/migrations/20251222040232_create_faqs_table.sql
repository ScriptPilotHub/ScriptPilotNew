/*
  # Create FAQs table for chatbot

  1. New Tables
    - `faqs`
      - `id` (uuid, primary key)
      - `question` (text) - The FAQ question
      - `answer` (text) - The detailed answer
      - `keywords` (text array) - Keywords for matching user queries
      - `category` (text) - Category for organization (e.g., 'pricing', 'services', 'process')
      - `display_order` (integer) - Order for displaying on FAQ page
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `faqs` table
    - Add policy for public read access (FAQs are public information)
*/

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  keywords text[] DEFAULT '{}',
  category text NOT NULL DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (true);