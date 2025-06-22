import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { venuesData } from '../data/artistsData';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('');

  const getAvailableSlots = () => {
    if (!selectedVenue) return [];

    const venue = venuesData.find((v) => v.name === selectedVenue);
    if (!venue) return [];

    const now = new Date();
    const selectedDateTime = selectedDate ? new Date(selectedDate) : now;
    const isToday = selectedDateTime.toDateString() === now.toDateString();

    return venue.slots.filter((slot) => {
      if (!isToday) return true;

      const [startTime] = slot.split(' - ');
      const [hours, minutesWithAmPm] = startTime.split(':');
      const minutes = minutesWithAmPm.replace(/[ap]m/i, '');
      const slotTime = new Date();
      slotTime.setHours(parseInt(hours), parseInt(minutes));

      return slotTime > now;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const venue = venuesData.find((v) => v.name === selectedVenue);
    if (venue) {
      window.location.href = `/payment?venue=${venue.id}`;
    }
  };

  const handleVenueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVenue(e.target.value);
    setSelectedTime('');
  };

  return (
    <section
      id="schedule"
      className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900/90"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Slots
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check availability and schedule your perfect celebration.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 h-5 w-5" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">
                  Select Venue
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 h-5 w-5" />
                  <select
                    value={selectedVenue}
                    onChange={handleVenueChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"
                    required
                  >
                    <option value="">Choose a venue</option>
                    {venuesData.map((venue) => (
                      <option key={venue.name} value={venue.name}>
                        {venue.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedVenue && (
                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">
                    Select Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500 h-5 w-5" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"
                      required
                    >
                      <option value="">Choose a slot</option>
                      {getAvailableSlots().map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-colors duration-300 font-bold text-lg"
              >
                Check Availability
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Our team will contact you within 24 hours to confirm your booking.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
