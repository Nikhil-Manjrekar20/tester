/*
  # Swap venue names between Aura and Lunar

  1. Changes
    - Swap the name values between venues with names 'Aura' and 'Lunar'
    - Keep all other data (UUIDs, prices, etc.) unchanged
    - Ensure data integrity is maintained
*/

-- Create a temporary table to hold the swap data
CREATE TEMP TABLE venue_name_swap AS
SELECT 
  id,
  CASE 
    WHEN name = 'Aura' THEN 'Lunar'
    WHEN name = 'Lunar' THEN 'Aura'
    ELSE name
  END as new_name
FROM venues 
WHERE name IN ('Aura', 'Lunar');

-- Update the venues table with swapped names
UPDATE venues 
SET name = venue_name_swap.new_name
FROM venue_name_swap
WHERE venues.id = venue_name_swap.id;