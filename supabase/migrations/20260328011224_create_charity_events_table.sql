/*
  # Create charity events and gatherings tables

  1. New Tables
    - `charity_events`
      - `id` (uuid, primary key)
      - `title` (text) - Event name
      - `date` (timestamp) - Event date
      - `description` (text) - Event description
      - `amount_raised` (numeric) - Amount raised for charity
      - `created_at` (timestamp)
    
    - `gatherings`
      - `id` (uuid, primary key)
      - `date` (timestamp) - Meeting date
      - `location` (text) - Meeting location
      - `details` (text) - Additional details
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policy for public read access to events and gatherings
*/

CREATE TABLE IF NOT EXISTS charity_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date timestamptz NOT NULL,
  description text,
  amount_raised numeric,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gatherings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date timestamptz NOT NULL,
  location text NOT NULL,
  details text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE charity_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gatherings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view charity events"
  ON charity_events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view gatherings"
  ON gatherings FOR SELECT
  TO public
  USING (true);