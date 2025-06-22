import React from 'react';
import { useNavigate } from 'react-router-dom';
import { venuesData } from '../data/artistsData';
import {
  Users,
  Clock,
  CheckCircle,
  Monitor,
  IndianRupee,
  Sparkles,
} from 'lucide-react';

const VenueSpaces = () => {
  const navigate = useNavigate();

  const handleBookNow = (venueId: string) => {
    navigate(`/payment?venue=${venueId}`);
  };

  return (
    <section id="venues" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
              Our Venues
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our premium venues for your perfect celebration or
            private screening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venuesData.map((venue) => (
            <div
              key={venue.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {venue.name}
                  </h3>
                  <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    <span>{venue.price}</span>
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-5 w-5 text-pink-500" />
                    <span>Up to {venue.baseMembers} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Monitor className="h-5 w-5 text-pink-500" />
                    <span>{venue.screenSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Sparkles className="h-5 w-5 text-pink-500" />
                    <span>Decoration fee: {venue.decorationFee}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-pink-500" />
                    Available Slots
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {venue.slots.map((slot, index) => (
                      <div
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-2 bg-gray-700/30 rounded-lg p-2"
                      >
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        {slot}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {venue.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-400 text-sm flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleBookNow(venue.id)}
                  className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition-colors duration-300 font-bold"
                >
                  Book Now
                </button>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  {venue.refundPolicy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSpaces;