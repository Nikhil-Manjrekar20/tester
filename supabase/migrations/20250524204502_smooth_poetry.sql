/*
  # Create venues table

  1. New Tables
    - `venues`
      - `id` (uuid, primary key)
      - `name` (text)
      - `image` (text)
      - `price` (integer)
      - `base_members` (integer)
      - `extra_person_charge` (integer)
      - `decoration_fee` (integer)
      - `screen_size` (text)
      - `refund_policy` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `venues` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS venues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  image text NOT NULL,
  price integer NOT NULL,
  base_members integer NOT NULL,
  extra_person_charge integer NOT NULL,
  decoration_fee integer NOT NULL,
  screen_size text NOT NULL,
  refund_policy text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE venues ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON venues
  FOR SELECT
  TO public
  USING (true);