import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const {
      venue_id,
      slot_id,
      booking_date,
      booking_name,
      persons,
      whatsapp,
      email,
      decoration,
    } = await req.json();

    // Validate required fields
    if (!venue_id || !slot_id || !booking_date || !booking_name || !whatsapp || !email) {
      throw new Error('Missing required fields');
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Check if slot is available
    const { data: isAvailable, error: checkError } = await supabaseClient
      .rpc('is_slot_available', {
        p_venue_id: venue_id,
        p_slot_id: slot_id,
        p_booking_date: booking_date,
      });

    if (checkError) throw checkError;
    if (!isAvailable) throw new Error('Slot is already booked');

    // Create booking
    const { data: booking, error: bookingError } = await supabaseClient
      .from('bookings')
      .insert({
        venue_id,
        slot_id,
        booking_date,
        booking_name,
        persons,
        whatsapp,
        email,
        decoration,
        advance_paid: false,
      })
      .select()
      .single();

    if (bookingError) throw bookingError;

    return new Response(
      JSON.stringify(booking),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});