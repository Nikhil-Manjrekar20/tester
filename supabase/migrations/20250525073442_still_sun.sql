/*
  # Final: Bookings Table Setup with RLS, Functions, and Payment Column

  1. Table Definition
    - Includes uuid keys, foreign constraints, and `payment_id`

  2. Security
    - Enables RLS
    - Adds safe and minimal policies

  3. Validation
    - Includes slot availability functions
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own bookings" ON bookings;
DROP POLICY IF EXISTS "Users can create bookings" ON bookings;

-- Create bookings table if not exists (safe definition)
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id uuid REFERENCES venues(id) ON DELETE RESTRICT,
  slot_id uuid REFERENCES slots(id) ON DELETE RESTRICT,
  booking_date date NOT NULL,
  booking_name text NOT NULL,
  persons integer NOT NULL CHECK (persons > 0),
  whatsapp text NOT NULL,
  email text NOT NULL,
  decoration boolean DEFAULT false,
  advance_paid boolean DEFAULT false,
  payment_id text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Add safe and minimal policies
CREATE POLICY "Enable read access for all users"
  ON bookings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Enable insert for authenticated users only"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Function: Check if slot is available
CREATE OR REPLACE FUNCTION is_slot_available(
  p_venue_id uuid,
  p_slot_id uuid,
  p_booking_date date
) RETURNS boolean AS $$
BEGIN
  RETURN NOT EXISTS (
    SELECT 1 
    FROM bookings 
    WHERE venue_id = p_venue_id 
    AND slot_id = p_slot_id 
    AND booking_date = p_booking_date
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Get available slots
CREATE OR REPLACE FUNCTION get_available_slots(
  p_venue_id uuid,
  p_date date
) RETURNS TABLE (
  slot_id uuid,
  start_time time,
  end_time time
) AS $$
BEGIN
  RETURN QUERY
  SELECT s.id, s.start_time, s.end_time
  FROM slots s
  WHERE s.venue_id = p_venue_id
  AND NOT EXISTS (
    SELECT 1 
    FROM bookings b 
    WHERE b.venue_id = p_venue_id 
    AND b.slot_id = s.id 
    AND b.booking_date = p_date
  )
  ORDER BY s.start_time;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;