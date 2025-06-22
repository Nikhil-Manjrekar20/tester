import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Slot {
  slot_id: string;
  start_time: string;
  end_time: string;
}

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [venueId, setVenueId] = useState<string>('');
  const [venue, setVenue] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);

  const [formData, setFormData] = useState({
    bookingName: '',
    persons: '1',
    whatsapp: '',
    email: '',
    decoration: false,
    slotId: '',
  });

  useEffect(() => {
    const initVenue = async () => {
      try {
        const urlVenueId = searchParams.get('venue');
        if (!urlVenueId) {
          setError('No venue selected');
          return;
        }

        setVenueId(urlVenueId);
        const { data: venueData, error: venueError } = await supabase
          .from('venues')
          .select('*')
          .eq('id', urlVenueId)
          .maybeSingle();

        if (venueError) {
          console.error('Error fetching venue:', venueError);
          setError('Error loading venue details');
          return;
        }

        if (!venueData) {
          setError('Venue not found');
          return;
        }

        setVenue(venueData);
        setError(null);
      } catch (err) {
        console.error('Error in venue initialization:', err);
        setError('Failed to load venue details');
      }
    };

    initVenue();
  }, [searchParams]);

  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate || !venueId) return;

      try {
        setLoading(true);
        setError(null);

        const { data: allSlots, error: slotsError } = await supabase
          .from('slots')
          .select('id, start_time, end_time')
          .eq('venue_id', venueId)
          .order('start_time');

        if (slotsError) throw slotsError;

        const { data: bookedSlots, error: bookingsError } = await supabase
          .from('bookings')
          .select('slot_id')
          .eq('venue_id', venueId)
          .eq('booking_date', selectedDate)
          .eq('advance_paid', true);

        if (bookingsError) throw bookingsError;

        const bookedSlotIds = new Set(bookedSlots?.map((b) => b.slot_id) || []);
        const availableSlots =
          allSlots
            ?.map((slot) => ({
              slot_id: slot.id,
              start_time: formatTime(slot.start_time),
              end_time: formatTime(slot.end_time),
            }))
            .filter((slot) => !bookedSlotIds.has(slot.slot_id)) || [];

        setSlots(availableSlots);

        if (availableSlots.length > 0) {
          if (
            !availableSlots.find((slot) => slot.slot_id === formData.slotId)
          ) {
            setFormData((prev) => ({
              ...prev,
              slotId: availableSlots[0].slot_id,
            }));
          }
        } else {
          setFormData((prev) => ({ ...prev, slotId: '' }));
        }
      } catch (err: any) {
        console.error('Error fetching slots:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [selectedDate, venueId]);

  if (!venue) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">
          {error || 'Loading venue details...'}
        </div>
      </div>
    );
  }

  const basePrice = venue.price;
  const decorationFee = formData.decoration ? venue.decoration_fee : 0;
  const advanceAmount = 700;
  const balanceAmount = basePrice + decorationFee - advanceAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          venue_id: venueId,
          slot_id: formData.slotId,
          booking_date: selectedDate,
          booking_name: formData.bookingName,
          persons: parseInt(formData.persons),
          whatsapp: formData.whatsapp,
          email: formData.email,
          decoration: formData.decoration,
          advance_paid: false,
        })
        .select()
        .single();

      if (bookingError) throw bookingError;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: advanceAmount * 100,
        currency: 'INR',
        name: "Binge'N Celebration",
        description: `Booking for ${venue.name}`,
        image: '/BINGEN.png',
        order_id: booking.id,
        handler: async (response: any) => {
          const { error: updateError } = await supabase
            .from('bookings')
            .update({
              advance_paid: true,
              payment_id: response.razorpay_payment_id,
            })
            .eq('id', booking.id);

          if (updateError) throw updateError;
          navigate('/booking-success');
        },
        prefill: {
          name: formData.bookingName,
          email: formData.email,
          contact: formData.whatsapp,
        },
        theme: {
          color: '#DB2777',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err: any) {
      console.error('Error in booking process:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/BINGEN.png"
              alt="Binge'N Celebration"
              className="h-12 w-12"
            />
            <h1 className="text-3xl font-bold text-white">
              Complete Your Booking
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-6">
                  Booking Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Booking Date*
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Available Slots*
                      </label>
                      <select
                        required
                        value={formData.slotId}
                        onChange={(e) =>
                          setFormData({ ...formData, slotId: e.target.value })
                        }
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                      >
                        <option value="">Select a slot</option>
                        {slots.map((slot) => (
                          <option key={slot.slot_id} value={slot.slot_id}>
                            {slot.start_time} - {slot.end_time}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Booking Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.bookingName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bookingName: e.target.value,
                        })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                      placeholder="Enter booking name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Persons*
                    </label>
                    <select
                      required
                      value={formData.persons}
                      onChange={(e) =>
                        setFormData({ ...formData, persons: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                    >
                      {[...Array(venue.base_members)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Person{i !== 0 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      WhatsApp Number*
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email ID*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Do you want decoration?*
                    </label>
                    <select
                      required
                      value={formData.decoration ? 'yes' : 'no'}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          decoration: e.target.value === 'yes',
                        })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !formData.slotId}
                  className={`w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-colors duration-300 font-bold mt-6 ${
                    loading || !formData.slotId
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {loading ? 'Processing...' : 'PROCEED'}
                </button>

                {error && (
                  <p className="mt-4 text-red-500 text-center">{error}</p>
                )}
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl p-6 sticky top-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Booking Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Base Price</span>
                    <span className="text-white font-medium">₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Decoration</span>
                    <span className="text-white font-medium">
                      ₹{decorationFee}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">
                      Advance Amount Payable
                    </span>
                    <div className="text-right">
                      <span className="text-white font-medium">
                        ₹{advanceAmount}
                      </span>
                      <p className="text-xs text-gray-400">
                        (Including ₹50/- convenience fee)
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Balance Amount</span>
                    <div className="text-right">
                      <span className="text-white font-medium">
                        ₹{balanceAmount}
                      </span>
                      <p className="text-xs text-gray-400">
                        (Final amount negotiable — to be paid at venue)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;