/*
  # Create slots table

  1. New Tables
    - `slots`
      - `id` (uuid, primary key)
      - `venue_id` (uuid, foreign key to venues)
      - `start_time` (time)
      - `end_time` (time)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `slots` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id uuid REFERENCES venues(id) ON DELETE CASCADE,
  start_time time NOT NULL,
  end_time time NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(venue_id, start_time, end_time)
);

ALTER TABLE slots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON slots
  FOR SELECT
  TO public
  USING (true);